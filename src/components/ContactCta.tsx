
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
    <section id="contact" className="section-padding bg-gradient-to-b from-oiltac-light to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="section-subtitle text-center">
            Let's discuss how OILTAC can benefit your specific equipment and operations.
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
                  <Mail className="text-oiltac-primary mr-3" />
                  <span>info@oiltacfuel.com</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-oiltac-light-dark/30">
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
                    placeholder="Tell us about your needs and how we can help"
                    className="w-full"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-oiltac-primary hover:bg-oiltac-secondary text-white w-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Information"}
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
