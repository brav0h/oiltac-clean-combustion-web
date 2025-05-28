
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactCta = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      // Insert the form data into the Supabase database
      const { error } = await supabase
        .from('contact_requests')
        .insert([formData]);
      
      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      // Show success message
      toast({
        title: "Information request sent",
        description: "Thank you for your interest. We'll be in touch shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (err) {
      console.error('Exception when submitting form:', err);
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
    <section id="contact" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Let's Talk Results</h2>
          <p className="section-subtitle text-center">
            Want to see how much you can save with OILTAC? Request a use case tailored to your operation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-12">
            <div className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-oiltac-dark">Ready to improve performance?</h3>
                  <p className="text-oiltac-gray">
                    Whether you want to schedule a consultation, request technical data, 
                    or discuss implementation options, our team is ready to help.
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-oiltac-forest mr-3" />
                  <span>info@oiltacfuel.com</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4 text-oiltac-dark">
                Tell us about your engines or fleet — we'll show you what's possible.
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-oiltac-gray mb-1">
                      Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-oiltac-gray mb-1">
                      Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-oiltac-gray mb-1">
                    Company
                  </label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your company"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-oiltac-gray mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Share any fuel types, fleet sizes, or current pain points."
                    className="w-full"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-oiltac-forest hover:bg-oiltac-forest/90 text-white w-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "✅ Request My Results"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
