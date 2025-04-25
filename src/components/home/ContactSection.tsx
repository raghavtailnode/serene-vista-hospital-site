
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  delay?: number;
}

const ContactInfoItem = ({ icon, title, content, delay = 0 }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="bg-hospital-100 p-3 rounded-full text-hospital-400">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="text-gray-600 mt-1">{content}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-hospital-800">
          Get in <span className="text-hospital-200">Touch</span>
        </h2>
        <p className="section-subheading">
          Have questions or need to schedule an appointment? 
          Reach out to us, and our team will be happy to assist you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.985!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzUzLjAiTiA3M8KwNTknMDYuMCJX!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
              />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <ContactInfoItem
              icon={<MapPin className="h-6 w-6" />}
              title="Our Location"
              content="123 Healthcare Avenue, Medical District, New York, NY 10001"
              delay={100}
            />
            
            <ContactInfoItem
              icon={<Phone className="h-6 w-6" />}
              title="Phone Number"
              content={<a href="tel:+1234567890" className="hover:text-hospital-200 transition-colors">(123) 456-7890</a>}
              delay={200}
            />
            
            <ContactInfoItem
              icon={<Mail className="h-6 w-6" />}
              title="Email Address"
              content={<a href="mailto:info@serenevista.com" className="hover:text-hospital-200 transition-colors">info@serenevista.com</a>}
              delay={300}
            />
            
            <ContactInfoItem
              icon={<Clock className="h-6 w-6" />}
              title="Working Hours"
              content={
                <div>
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: Emergency Services Only</p>
                </div>
              }
              delay={400}
            />
          </div>
        </div>

        <Card className="border-none shadow-lg mt-12">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold mb-6 text-hospital-800">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="bg-hospital-200 hover:bg-hospital-300 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
