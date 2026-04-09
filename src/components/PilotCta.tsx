declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PilotCta = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    job_title: "",
    industry: "",
    fleet_size: "",
    region: "",
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "New Pilot Request — OILTAC",
          from_name: formData.name,
          name: formData.name,
          company: formData.company,
          job_title: formData.job_title,
          industry: formData.industry,
          fleet_size: formData.fleet_size,
          region: formData.region,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'pilot_form_submit', {
            event_category: 'conversion',
            event_label: 'Pilot Form Submitted'
          });
        }
        toast({
          title: "Pilot request received",
          description: "We'll be in touch within 2 business days.",
        });

        setFormData({
          name: "",
          company: "",
          job_title: "",
          industry: "",
          fleet_size: "",
          region: "",
          message: ""
        });
      } else {
        console.error("Error submitting pilot request:", data);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive",
        });
      }
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Run the Numbers?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The fastest way to evaluate OILTAC is to run it in your own operation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pilot-name" className="block text-sm font-medium text-white/80 mb-1">Full name <span className="text-white/50">*</span></label>
                <Input
                  id="pilot-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label htmlFor="pilot-company" className="block text-sm font-medium text-white/80 mb-1">Company name <span className="text-white/50">*</span></label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pilot-job-title" className="block text-sm font-medium text-white/80 mb-1">Job title / role</label>
                <Input
                  id="pilot-job-title"
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  placeholder="e.g. Fleet Manager, Engineer"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label htmlFor="pilot-region" className="block text-sm font-medium text-white/80 mb-1">Region / country <span className="text-white/50">*</span></label>
                <Input
                  id="pilot-region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Netherlands, Southeast Asia"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pilot-industry" className="block text-sm font-medium text-white/80 mb-1">Industry / application type <span className="text-white/50">*</span></label>
              <select
                id="pilot-industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-white/30 bg-white/20 text-white px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" disabled className="text-gray-800">Select industry</option>
                <option value="Marine" className="text-gray-800">Marine</option>
                <option value="Power Generation" className="text-gray-800">Power Generation</option>
                <option value="Off-Road Diesel" className="text-gray-800">Off-Road Diesel</option>
                <option value="Industrial Heating" className="text-gray-800">Industrial Heating</option>
                <option value="Other" className="text-gray-800">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="pilot-fleet-size" className="block text-sm font-medium text-white/80 mb-1">Approximate fleet or equipment size</label>
              <Input
                id="pilot-fleet-size"
                name="fleet_size"
                value={formData.fleet_size}
                onChange={handleChange}
                placeholder='e.g. "12 vessels" or "3 generators"'
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label htmlFor="pilot-message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
              <Textarea
                id="pilot-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your operation or any specific goals for the trial."
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
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>

          <p className="text-center text-white/60 text-sm mt-4">
            Or contact us directly at{" "}
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
