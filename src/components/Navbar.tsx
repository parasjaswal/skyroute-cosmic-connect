import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "API Docs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Handle hash links on the home page
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const element = document.querySelector(href.replace("/", ""));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              SKYROUTE <span className="glow-text">API</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex">
              Get API Access
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-[73px] z-40 glass-card border-b border-border/50 lg:hidden"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-lg font-medium py-2 transition-colors hover:text-foreground ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" className="mt-4">
              Get API Access
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
