import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Building2 } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    value: "sales@skyrouteapi.com",
    link: "mailto:sales@skyrouteapi.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm IST",
    value: "+91 22 4567 8900",
    link: "tel:+912245678900",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "Mumbai, Maharashtra, India",
    link: "#",
  },
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Sales Inquiry",
    description: "Learn about our API plans and pricing",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Get help with integration and issues",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations",
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="glow-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our API? We're here to help you build your travel platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6 text-center block"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="text-primary font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">
                Send Us a <span className="glow-text">Message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      placeholder="John Doe"
                      className="bg-secondary border-border"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="bg-secondary border-border"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input
                      placeholder="Your Company"
                      className="bg-secondary border-border"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-secondary border-border"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject *</label>
                  <Input
                    placeholder="How can we help?"
                    className="bg-secondary border-border"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea
                    placeholder="Tell us about your project and requirements..."
                    className="bg-secondary border-border min-h-[150px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">
                How Can We <span className="glow-text">Help?</span>
              </h2>

              <div className="space-y-4 mb-8">
                {supportOptions.map((option, index) => (
                  <div key={option.title} className="glass-card-hover p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-display font-semibold text-lg">Office Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-foreground">10:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
