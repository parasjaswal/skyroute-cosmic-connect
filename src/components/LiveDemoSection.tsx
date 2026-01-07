import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, Building2, Search, Calendar, ArrowRight } from "lucide-react";

const mockFlights = [
  { airline: "SkyRoute Air", from: "DEL", to: "DXB", price: "₹12,450", duration: "3h 45m", departure: "06:30", arrival: "08:15" },
  { airline: "Global Wings", from: "DEL", to: "DXB", price: "₹14,200", duration: "4h 10m", departure: "09:15", arrival: "11:25" },
  { airline: "AeroConnect", from: "DEL", to: "DXB", price: "₹11,890", duration: "3h 55m", departure: "14:00", arrival: "15:55" },
];

const mockHotels = [
  { name: "Grand Hyatt Dubai", rating: 5, price: "₹18,500/night", location: "Downtown Dubai", image: "🏨" },
  { name: "JW Marriott Marquis", rating: 5, price: "₹15,200/night", location: "Business Bay", image: "🏢" },
  { name: "Atlantis The Palm", rating: 5, price: "₹32,000/night", location: "Palm Jumeirah", image: "🏝️" },
];

const LiveDemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searched, setSearched] = useState(false);
  const [activeTab, setActiveTab] = useState<"flights" | "hotels">("flights");

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 section-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Try Our <span className="glow-text">Live Demo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our API in action with this interactive demo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Search Panel */}
          <div className="glass-card p-6 mb-6">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => { setActiveTab("flights"); setSearched(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === "flights" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Plane className="w-4 h-4" />
                Flights
              </button>
              <button
                onClick={() => { setActiveTab("hotels"); setSearched(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === "hotels" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Hotels
              </button>
            </div>

            {/* Search Form */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-1 block">From</label>
                <Input 
                  placeholder="New Delhi (DEL)" 
                  className="bg-secondary border-border"
                  defaultValue="New Delhi (DEL)"
                />
              </div>
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-1 block">To</label>
                <Input 
                  placeholder="Dubai (DXB)" 
                  className="bg-secondary border-border"
                  defaultValue="Dubai (DXB)"
                />
              </div>
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-1 block">Date</label>
                <div className="relative">
                  <Input 
                    placeholder="15 Jan 2026" 
                    className="bg-secondary border-border"
                    defaultValue="15 Jan 2026"
                  />
                  <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-end">
                <Button variant="hero" className="w-full" onClick={handleSearch}>
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  {activeTab === "flights" ? "3 flights found" : "3 hotels found"} • Sample API Response
                </p>
                <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent">
                  200 OK • 124ms
                </span>
              </div>

              {activeTab === "flights" ? (
                mockFlights.map((flight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card-hover p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Plane className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{flight.airline}</p>
                        <p className="text-sm text-muted-foreground">{flight.duration}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-display font-bold">{flight.departure}</p>
                      <p className="text-xs text-muted-foreground">{flight.from}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <div className="text-center">
                      <p className="font-display font-bold">{flight.arrival}</p>
                      <p className="text-xs text-muted-foreground">{flight.to}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-bold glow-text">{flight.price}</p>
                      <Button variant="outline" size="sm">Select</Button>
                    </div>
                  </motion.div>
                ))
              ) : (
                mockHotels.map((hotel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card-hover p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                        {hotel.image}
                      </div>
                      <div>
                        <p className="font-semibold">{hotel.name}</p>
                        <p className="text-sm text-muted-foreground">{hotel.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array(hotel.rating).fill(0).map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-bold glow-text">{hotel.price}</p>
                      <Button variant="outline" size="sm">Book</Button>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
