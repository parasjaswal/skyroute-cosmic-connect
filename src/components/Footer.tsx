import { motion } from "framer-motion";
import { Plane, Mail, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                SKYROUTE <span className="glow-text">API</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Powering the world's travel platforms with unified API access to flights, hotels, 
              and global inventory. Built for B2B scale.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:sales@skyrouteapi.com" className="hover:text-foreground transition-colors">
                sales@skyrouteapi.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  API Documentation
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  SLA Agreement
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SKYROUTE API. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
