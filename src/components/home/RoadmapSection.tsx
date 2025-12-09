import { Rocket, TrendingUp, Globe, Check } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    icon: Rocket,
    status: "active",
    items: [
      "Token launch",
      "Presale system",
      "Referral system",
      "Staking engine activation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    icon: TrendingUp,
    status: "upcoming",
    items: [
      "DEX listing",
      "Buyback engine activation",
      "Community growth",
      "Marketing campaigns",
    ],
  },
  {
    phase: "Phase 3",
    title: "Global Growth",
    icon: Globe,
    status: "upcoming",
    items: [
      "Strategic partnerships",
      "CEX listings",
      "Ecosystem expansion",
      "Global adoption",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Roadmap</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our journey to revolutionize DeFi earnings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`glass-card-hover p-8 relative overflow-hidden ${
                phase.status === "active" ? "border-primary/50" : ""
              }`}
            >
              {/* Phase Badge */}
              {phase.status === "active" && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                  Active
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-neon-gradient flex items-center justify-center mb-6">
                <phase.icon className="w-7 h-7 text-background" />
              </div>

              {/* Content */}
              <div className="mb-1 text-primary font-display text-sm">{phase.phase}</div>
              <h3 className="font-display text-2xl font-bold mb-6">{phase.title}</h3>

              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Connection Line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
