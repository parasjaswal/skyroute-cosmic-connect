import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCaptureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours to set up your sandbox access.",
    });
    setFormData({ name: "", company: "", email: "", phone: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 section-gradient" />
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb w-72 h-72 bg-primary/20 top-10 -left-36" />
        <div className="floating-orb w-64 h-64 bg-accent/20 bottom-10 -right-32" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6"
            >
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Start Selling Travel in <span className="glow-text">7 Days</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your sandbox access and start building your travel platform today
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input
                  placeholder="John Doe"
                  className="bg-secondary border-border h-12"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input
                  placeholder="Travel Corp Ltd."
                  className="bg-secondary border-border h-12"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="john@travelcorp.com"
                  className="bg-secondary border-border h-12"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="bg-secondary border-border h-12"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <Button variant="hero" size="xl" className="w-full group">
              Request Sandbox Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
