import { motion } from "framer-motion";

const Globe = () => {
  const flightPaths = [
    { id: 1, d: "M 80 200 Q 200 100 320 180", delay: 0 },
    { id: 2, d: "M 150 280 Q 250 200 380 250", delay: 0.5 },
    { id: 3, d: "M 200 120 Q 300 80 420 150", delay: 1 },
    { id: 4, d: "M 100 320 Q 220 280 340 300", delay: 1.5 },
    { id: 5, d: "M 280 100 Q 350 150 450 120", delay: 2 },
  ];

  const cities = [
    { cx: 80, cy: 200, name: "NYC" },
    { cx: 320, cy: 180, name: "LON" },
    { cx: 380, cy: 250, name: "DXB" },
    { cx: 420, cy: 150, name: "SIN" },
    { cx: 200, cy: 120, name: "PAR" },
    { cx: 340, cy: 300, name: "SYD" },
    { cx: 150, cy: 280, name: "LAX" },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Glowing orbs */}
      <div className="floating-orb w-64 h-64 bg-primary/30 -top-10 -left-10" />
      <div className="floating-orb w-48 h-48 bg-accent/30 -bottom-10 -right-10" style={{ animationDelay: "2s" }} />
      
      {/* Globe container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-rotate-slow" 
             style={{ width: "500px", height: "500px", left: "-50px", top: "-50px" }} />
        
        {/* Globe SVG */}
        <svg 
          viewBox="0 0 500 400" 
          className="w-full h-full max-w-[500px]"
          style={{ filter: "drop-shadow(0 0 40px hsl(217 91% 60% / 0.2))" }}
        >
          {/* Grid lines */}
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(199 89% 48%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Horizontal grid lines */}
          {[100, 150, 200, 250, 300].map((y, i) => (
            <motion.line
              key={`h-${i}`}
              x1="50" y1={y} x2="450" y2={y}
              stroke="hsl(217 91% 60% / 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}

          {/* Vertical grid lines */}
          {[100, 175, 250, 325, 400].map((x, i) => (
            <motion.line
              key={`v-${i}`}
              x1={x} y1="80" x2={x} y2="320"
              stroke="hsl(217 91% 60% / 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}

          {/* Flight paths */}
          {flightPaths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 2, 
                delay: path.delay,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 3
              }}
            />
          ))}

          {/* Cities */}
          {cities.map((city, i) => (
            <g key={city.name}>
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="6"
                fill="hsl(217 91% 60%)"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="12"
                fill="none"
                stroke="hsl(199 89% 48% / 0.5)"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              <motion.text
                x={city.cx}
                y={city.cy - 15}
                fill="hsl(215 20% 65%)"
                fontSize="10"
                textAnchor="middle"
                fontFamily="Space Grotesk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {city.name}
              </motion.text>
            </g>
          ))}

          {/* Animated plane icons */}
          <motion.g
            initial={{ x: -50 }}
            animate={{ x: 450 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <text x="0" y="160" fontSize="16" fill="hsl(199 89% 48%)">✈</text>
          </motion.g>
          <motion.g
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
          >
            <text x="0" y="260" fontSize="16" fill="hsl(217 91% 60%)">✈</text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};

export default Globe;
