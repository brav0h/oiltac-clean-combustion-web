
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactCta = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // In a real implementation, you would send this data to your server
    // For now, we'll just show a success message
    toast({
      title: "Information request sent",
      description: "Thank you for your interest. We'll be in touch shortly.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
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
                  <Mail className="text-oiltac-forest mr-3" />
                  <span>info@oiltac.com</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-oiltac-forest mr-3" />
                  <span>+1 (888) 555-FUEL</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="bg-oiltac-forest hover:bg-oiltac-forest/90 text-white w-full py-6"
                >
                  Request Information
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
