import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, Building2, Rocket } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹10,000",
    period: "/month",
    description: "Perfect for startups and small agencies testing the waters",
    features: [
      { text: "5,000 API calls/month", included: true },
      { text: "Flights & Hotels API", included: true },
      { text: "Standard support (48h response)", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "Sandbox access", included: true },
      { text: "Single API key", included: true },
      { text: "Email support", included: true },
      { text: "Buses & Transfers API", included: false },
      { text: "Webhooks integration", included: false },
      { text: "Priority support", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    icon: Zap,
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "₹25,000",
    period: "/month",
    description: "For growing travel businesses scaling their operations",
    features: [
      { text: "25,000 API calls/month", included: true },
      { text: "Full API access (Flights, Hotels, Buses, Transfers)", included: true },
      { text: "Priority support (24h response)", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Production + Sandbox access", included: true },
      { text: "5 API keys", included: true },
      { text: "Email + Chat support", included: true },
      { text: "Webhooks integration", included: true },
      { text: "Custom rate limits", included: true },
      { text: "Multi-currency support", included: true },
      { text: "Dedicated account manager", included: false },
    ],
    icon: Building2,
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations requiring maximum performance",
    features: [
      { text: "Unlimited API calls", included: true },
      { text: "Full API access + Custom endpoints", included: true },
      { text: "Dedicated support + SLA guarantee", included: true },
      { text: "Enterprise analytics suite", included: true },
      { text: "On-premise deployment option", included: true },
      { text: "Unlimited API keys", included: true },
      { text: "24/7 Phone + Chat + Email support", included: true },
      { text: "Advanced webhooks & integrations", included: true },
      { text: "White-label options", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    icon: Rocket,
    popular: false,
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    question: "How do API calls work?",
    answer: "Each search request counts as one API call. Booking confirmations and cancellations are also counted separately. Unused calls don't roll over to the next month.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens if I exceed my API call limit?",
    answer: "You'll receive notifications at 80% and 100% usage. Additional calls are charged at ₹2 per call for Starter, ₹1.5 per call for Pro plans.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! All plans come with a 14-day free trial with full access to features. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, UPI, and bank transfers for Enterprise plans.",
  },
];

const PricingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Simple, Transparent <span className="glow-text">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that scales with your business. Start with a 14-day free trial, no credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative ${plan.popular ? "md:-mt-8 md:mb-8" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                
                <div className={`h-full glass-card-hover p-8 flex flex-col ${
                  plan.popular ? "border-primary/50 shadow-xl shadow-primary/10" : ""
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <plan.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="font-display text-5xl font-bold glow-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <Button 
                    variant={plan.popular ? "hero" : "heroOutline"} 
                    className="w-full mb-8"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Frequently Asked <span className="glow-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <h4 className="font-display font-semibold text-lg mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
