import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const tokenomicsData = [
  { name: "Presale + Staking + Referral", value: 60, color: "#00D4FF" },
  { name: "Liquidity Pool", value: 20, color: "#8B5CF6" },
  { name: "Buyback & Treasury", value: 10, color: "#EC4899" },
  { name: "Marketing", value: 5, color: "#10B981" },
  { name: "Stability Fund", value: 5, color: "#F59E0B" },
];

export function TokenomicsSection() {
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
          {/* Pie Chart */}
          <div className="glass-card p-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(230 25% 10%)",
                      border: "1px solid hsl(230 20% 25%)",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Distribution Cards */}
          <div className="space-y-4">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="glass-card p-4 flex items-center gap-4 group hover:border-primary/30 transition-all"
              >
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
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
    </section>
  );
}
