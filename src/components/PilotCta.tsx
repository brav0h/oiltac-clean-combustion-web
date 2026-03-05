import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const PilotCta = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    fleet_type: "",
    engine_type: "",
    fleet_size: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("contact_requests")
        .insert([{
          name: formData.name,
          company: formData.company,
          message: `[PILOT REQUEST] Fleet type: ${formData.fleet_type} | Engine type: ${formData.engine_type} | Fleet size: ${formData.fleet_size}\n\n${formData.message}`
        }]);

      if (error) {
        console.error("Error submitting pilot request:", error);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Pilot request received",
        description: "We\'ll be in touch within 2 business days.",
      });

      setFormData({
        name: "",
        company: "",
        fleet_type: "",
        engine_type: "",
        fleet_size: "",
        message: ""
      });
    } catch (err) {
      console.error("Exception when submitting pilot request:", err);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pilot-cta" className="section-padding" style={{ backgroundColor: "#1B2A4A" }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Put OILTAC to Work on Your Fleet — Start with a Pilot
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We&apos;re currently running pilot programs with tugboat operators and maritime fleets. If you operate diesel or heavy fuel oil engines and want to see the results firsthand — with your fuel, your equipment, and your own measurement — we want to talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <p className="font-semibold text-lg mb-2">No capital investment</p>
            <p className="text-white/80 text-sm">OILTAC is added to existing fuel. No hardware changes, no retrofits, no downtime.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <p className="font-semibold text-lg mb-2">Measurable results</p>
            <p className="text-white/80 text-sm">We&apos;ll help you set up a baseline and track fuel consumption, emissions, and maintenance intervals before and after.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <p className="font-semibold text-lg mb-2">Flexible start</p>
            <p className="text-white/80 text-sm">Whether you have a single tugboat or a multi-vessel fleet, we can design a trial that fits your operation.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pilot-name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                <Input
                  id="pilot-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label htmlFor="pilot-company" className="block text-sm font-medium text-white/80 mb-1">Company</label>
                <Input
                  id="pilot-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Company or fleet name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pilot-fleet-type" className="block text-sm font-medium text-white/80 mb-1">Fleet type</label>
              <select
                id="pilot-fleet-type"
                name="fleet_type"
                value={formData.fleet_type}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-white/30 bg-white/20 text-white px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" disabled className="text-gray-800">Select fleet type</option>
                <option value="Maritime" className="text-gray-800">Maritime</option>
                <option value="Railroad" className="text-gray-800">Railroad</option>
                <option value="Industrial Plant" className="text-gray-800">Industrial Plant</option>
                <option value="Off-Road & Mining" className="text-gray-800">Off-Road &amp; Mining</option>
                <option value="Other" className="text-gray-800">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pilot-engine-type" className="block text-sm font-medium text-white/80 mb-1">Engine type</label>
                <Input
                  id="pilot-engine-type"
                  name="engine_type"
                  value={formData.engine_type}
                  onChange={handleChange}
                  placeholder="e.g., diesel, HFO, dual-fuel"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label htmlFor="pilot-fleet-size" className="block text-sm font-medium text-white/80 mb-1">Fleet size</label>
                <Input
                  id="pilot-fleet-size"
                  name="fleet_size"
                  value={formData.fleet_size}
                  onChange={handleChange}
                  placeholder="Approximate number of engines or vessels"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pilot-message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
              <Textarea
                id="pilot-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your operation or the challenge you&apos;re facing"
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-white font-semibold text-base"
              style={{ backgroundColor: "#F97316" }}
            >
              {isSubmitting ? "Submitting..." : "Request My Pilot"}
            </Button>
          </form>

          <p className="text-center text-white/60 text-sm mt-4">
            Or email us directly at{" "}
            <a href="mailto:info@oiltacfuel.com" className="text-white underline hover:text-white/80">
              info@oiltacfuel.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PilotCta;
