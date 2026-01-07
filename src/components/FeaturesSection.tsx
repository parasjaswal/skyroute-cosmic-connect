import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Plane, 
  Hotel, 
  Bus, 
  Car, 
  Zap, 
  Clock, 
  Shield, 
  Webhook, 
  Layers,
  Database
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Unified API",
    description: "One API for Flights, Hotels, Buses, and Transfers",
  },
  {
    icon: Database,
    title: "Enterprise Caching",
    description: "Enterprise-grade caching & intelligent rate limiting",
  },
  {
    icon: Clock,
    title: "Real-time Availability",
    description: "Live pricing and inventory from all suppliers",
  },
  {
    icon: Zap,
    title: "Booking Lifecycle",
    description: "Complete booking management from search to confirmation",
  },
  {
    icon: Shield,
    title: "Secure API Keys",
    description: "Role-based access with secure webhooks",
  },
  {
    icon: Webhook,
    title: "Multi-supplier",
    description: "Aggregate from 100+ global travel suppliers",
  },
];

const productIcons = [
  { icon: Plane, label: "Flights" },
  { icon: Hotel, label: "Hotels" },
  { icon: Bus, label: "Buses" },
  { icon: Car, label: "Transfers" },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="glow-text">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Built for B2B scale with enterprise-grade infrastructure
          </p>

          {/* Product icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {productIcons.map((product, index) => (
              <motion.div
                key={product.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card-hover px-6 py-4 flex items-center gap-3"
              >
                <product.icon className="w-6 h-6 text-primary" />
                <span className="font-medium">{product.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
