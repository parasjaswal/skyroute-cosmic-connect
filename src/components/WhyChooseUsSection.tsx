import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, DollarSign, Server, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Faster Integrations",
    description: "Go live in days, not months. Our SDKs and documentation make integration seamless.",
  },
  {
    icon: DollarSign,
    title: "Lower Supplier Costs",
    description: "Leverage our volume-based negotiations for better margins on every booking.",
  },
  {
    icon: Server,
    title: "High-Availability Infrastructure",
    description: "99.99% uptime SLA with global CDN and multi-region redundancy.",
  },
  {
    icon: Users,
    title: "Built for B2B Scale",
    description: "Handle millions of searches and bookings with enterprise-grade performance.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="glow-text">SKYROUTE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The trusted API partner for travel platforms worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all"
              >
                <reason.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
