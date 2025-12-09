import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

const tokenomicsData = [
  { name: "Presale + Staking + Referral", value: 60, color: "#00D4FF" },
  { name: "Liquidity Pool", value: 20, color: "#8B5CF6" },
  { name: "Buyback & Treasury", value: 10, color: "#EC4899" },
  { name: "Marketing", value: 5, color: "#10B981" },
  { name: "Stability Fund", value: 5, color: "#F59E0B" },
];

export function TokenomicsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Tokenomics</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Total Supply: <span className="text-primary font-semibold">210,000,000 NEXUS</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Animated Pie Chart */}
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Glow effect behind chart */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="w-64 h-64 rounded-full blur-3xl opacity-30 animate-pulse"
                style={{ 
                  background: 'radial-gradient(circle, #00D4FF 0%, #8B5CF6 50%, transparent 70%)' 
                }}
              />
            </div>
            
            <div 
              className="h-80 relative"
              style={{ 
                perspective: '1000px',
                perspectiveOrigin: 'center center'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="w-full h-full transition-transform duration-700 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  animation: isHovered ? 'none' : 'rotate3D 12s linear infinite',
                  transform: isHovered ? 'rotateX(15deg) rotateY(0deg) scale(1.05)' : undefined,
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      {tokenomicsData.map((entry, index) => (
                        <filter key={`glow-${index}`} id={`glow-${index}`}>
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      ))}
                      {tokenomicsData.map((entry, index) => (
                        <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor={entry.color} stopOpacity={1}/>
                          <stop offset="100%" stopColor={entry.color} stopOpacity={0.6}/>
                        </linearGradient>
                      ))}
                    </defs>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={3}
                      dataKey="value"
                      strokeWidth={2}
                      stroke="rgba(255,255,255,0.1)"
                    >
                      {tokenomicsData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={`url(#gradient-${index})`}
                          filter={`url(#glow-${index})`}
                          style={{
                            filter: 'drop-shadow(0 0 8px ' + entry.color + '40)',
                          }}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(230 25% 10% / 0.95)",
                        border: "1px solid hsl(230 20% 25%)",
                        borderRadius: "12px",
                        padding: "12px",
                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Floating particles around chart */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: tokenomicsData[i % tokenomicsData.length]?.color || '#00D4FF',
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.6,
                    boxShadow: `0 0 10px ${tokenomicsData[i % tokenomicsData.length]?.color || '#00D4FF'}`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Distribution Cards */}
          <div className="space-y-4">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="glass-card p-4 flex items-center gap-4 group hover:border-primary/30 transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0 animate-pulse"
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: `0 0 12px ${item.color}80`,
                  }}
                />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.name}</p>
                </div>
                <div className="font-display font-bold text-xl" style={{ color: item.color }}>
                  {item.value}%
                </div>
              </div>
            ))}

            <div className="glass-card p-4 mt-6 border-primary/30">
              <p className="text-sm text-muted-foreground text-center">
                <span className="text-primary font-semibold">No team allocation.</span> All tokens are 
                transparently distributed via smart contract.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate3D {
          0% {
            transform: rotateX(10deg) rotateY(0deg);
          }
          50% {
            transform: rotateX(-10deg) rotateY(180deg);
          }
          100% {
            transform: rotateX(10deg) rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
}
