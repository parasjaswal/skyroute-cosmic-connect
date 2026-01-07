import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Copy, Check, Terminal, Zap, Lock, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const endpoints = [
  {
    method: "GET",
    path: "/v1/flights/search",
    description: "Search for available flights",
    params: ["origin", "destination", "date", "passengers", "class"],
  },
  {
    method: "POST",
    path: "/v1/flights/book",
    description: "Create a flight booking",
    params: ["flight_id", "passengers", "contact_info", "payment"],
  },
  {
    method: "GET",
    path: "/v1/hotels/search",
    description: "Search for available hotels",
    params: ["city", "check_in", "check_out", "guests", "rooms"],
  },
  {
    method: "POST",
    path: "/v1/hotels/book",
    description: "Create a hotel booking",
    params: ["hotel_id", "room_id", "guest_info", "payment"],
  },
  {
    method: "GET",
    path: "/v1/bookings/{id}",
    description: "Get booking details",
    params: ["booking_id"],
  },
  {
    method: "DELETE",
    path: "/v1/bookings/{id}",
    description: "Cancel a booking",
    params: ["booking_id", "reason"],
  },
];

const codeExamples = {
  javascript: `const SKYROUTE_API_KEY = 'your_api_key_here';

// Search for flights
const searchFlights = async () => {
  const response = await fetch(
    'https://api.skyrouteapi.com/v1/flights/search?' + 
    new URLSearchParams({
      origin: 'DEL',
      destination: 'DXB',
      date: '2026-02-15',
      passengers: '1',
      class: 'economy'
    }),
    {
      headers: {
        'Authorization': \`Bearer \${SKYROUTE_API_KEY}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  const data = await response.json();
  console.log(data.flights);
};

searchFlights();`,

  python: `import requests

SKYROUTE_API_KEY = 'your_api_key_here'
BASE_URL = 'https://api.skyrouteapi.com/v1'

# Search for flights
def search_flights():
    headers = {
        'Authorization': f'Bearer {SKYROUTE_API_KEY}',
        'Content-Type': 'application/json'
    }
    
    params = {
        'origin': 'DEL',
        'destination': 'DXB',
        'date': '2026-02-15',
        'passengers': 1,
        'class': 'economy'
    }
    
    response = requests.get(
        f'{BASE_URL}/flights/search',
        headers=headers,
        params=params
    )
    
    data = response.json()
    print(data['flights'])

search_flights()`,

  curl: `# Search for flights
curl -X GET "https://api.skyrouteapi.com/v1/flights/search?\\
origin=DEL&\\
destination=DXB&\\
date=2026-02-15&\\
passengers=1&\\
class=economy" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json"

# Response
{
  "status": "success",
  "flights": [
    {
      "id": "FL-123456",
      "airline": "SkyRoute Air",
      "departure": "2026-02-15T06:30:00",
      "arrival": "2026-02-15T08:15:00",
      "price": {
        "amount": 12450,
        "currency": "INR"
      }
    }
  ]
}`,
};

const DocsPage = () => {
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, lang: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(lang);
    toast({ title: "Copied to clipboard!" });
    setTimeout(() => setCopiedCode(null), 2000);
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">API Version 1.0</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              API <span className="glow-text">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to integrate SKYROUTE API into your travel platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                Get API Keys
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Terminal className="w-4 h-4" />
                Try Sandbox
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold mb-4">
                Quick <span className="glow-text">Start</span>
              </h2>
              <p className="text-muted-foreground">
                Get started with SKYROUTE API in minutes. Follow these simple steps:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Lock, title: "1. Get API Key", desc: "Sign up and generate your API credentials" },
                { icon: Globe, title: "2. Choose Environment", desc: "Start with Sandbox for testing" },
                { icon: Zap, title: "3. Make First Call", desc: "Use our code examples below" },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Code Examples */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card overflow-hidden"
            >
              <Tabs defaultValue="javascript" className="w-full">
                <div className="border-b border-border px-4">
                  <TabsList className="bg-transparent h-14">
                    <TabsTrigger value="javascript" className="data-[state=active]:bg-primary/10">JavaScript</TabsTrigger>
                    <TabsTrigger value="python" className="data-[state=active]:bg-primary/10">Python</TabsTrigger>
                    <TabsTrigger value="curl" className="data-[state=active]:bg-primary/10">cURL</TabsTrigger>
                  </TabsList>
                </div>
                
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang} className="m-0">
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4"
                        onClick={() => copyCode(code, lang)}
                      >
                        {copiedCode === lang ? (
                          <Check className="w-4 h-4 text-accent" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                      <pre className="p-6 overflow-x-auto text-sm">
                        <code className="text-muted-foreground">{code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold mb-4">
                API <span className="glow-text">Endpoints</span>
              </h2>
              <p className="text-muted-foreground">
                Complete reference of available API endpoints
              </p>
            </motion.div>

            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card-hover p-6"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded text-xs font-bold ${
                        endpoint.method === "GET" 
                          ? "bg-accent/20 text-accent" 
                          : endpoint.method === "POST"
                          ? "bg-primary/20 text-primary"
                          : "bg-destructive/20 text-destructive"
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {endpoint.params.map((param) => (
                      <span key={param} className="px-2 py-1 rounded bg-secondary text-xs text-muted-foreground">
                        {param}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocsPage;
