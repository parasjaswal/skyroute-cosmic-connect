import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Users, Award, Globe, Zap } from "lucide-react";

const stats = [
  { value: "500+", label: "Travel Partners" },
  { value: "50M+", label: "API Calls/Month" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "15+", label: "Countries" },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push the boundaries of travel technology, delivering cutting-edge solutions that keep our partners ahead.",
  },
  {
    icon: Users,
    title: "Partner Success",
    description: "Your success is our success. We provide dedicated support and resources to help you grow your travel business.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in API performance, security, and reliability for enterprise-grade operations.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect to travel inventory worldwide with our extensive supplier network spanning all continents.",
  },
];

const team = [
  { name: "Rajesh Kumar", role: "CEO & Founder", emoji: "👨‍💼" },
  { name: "Priya Sharma", role: "CTO", emoji: "👩‍💻" },
  { name: "Amit Patel", role: "VP of Engineering", emoji: "👨‍🔧" },
  { name: "Sneha Gupta", role: "Head of Partnerships", emoji: "👩‍💼" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-orb w-96 h-96 bg-primary/20 top-20 -left-48" />
          <div className="floating-orb w-80 h-80 bg-accent/20 bottom-20 -right-40" style={{ animationDelay: "3s" }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="glow-text">SKYROUTE</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to democratize travel technology, making enterprise-grade APIs accessible to businesses of all sizes.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="font-display text-4xl font-bold glow-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold mb-6">
                Our <span className="glow-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, SKYROUTE API emerged from a simple observation: building a travel platform shouldn't take months of integration work with multiple suppliers.
                </p>
                <p>
                  Our founders, with decades of combined experience in travel technology and B2B software, set out to create a unified API that would give any business access to global travel inventory.
                </p>
                <p>
                  Today, we power hundreds of travel platforms across 15+ countries, processing millions of searches and bookings every month. From startups to enterprises, our partners trust us to be the backbone of their travel operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground mb-8">
                To become the world's most trusted travel API, enabling any business to offer world-class travel experiences to their customers.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To simplify travel technology integration, providing reliable, scalable, and affordable API access to global travel inventory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Our <span className="glow-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Leadership <span className="glow-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the people driving innovation in travel technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.emoji}
                </div>
                <h3 className="font-display font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
