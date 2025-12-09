import { Shield, Clock, Percent, Users, RefreshCw, Eye } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Smart Contract Controlled",
    description: "All operations are automated and trustless",
  },
  {
    icon: Clock,
    title: "Daily Reward Distribution",
    description: "Rewards are calculated and distributed every 24 hours",
  },
  {
    icon: Percent,
    title: "3%–10% Monthly Yield",
    description: "Tiered rewards based on your contribution level",
  },
  {
    icon: Users,
    title: "Referral Reward: 5%",
    description: "Earn from every user you refer to the platform",
  },
  {
    icon: RefreshCw,
    title: "Buyback Engine",
    description: "Automated buyback system for price stability",
  },
  {
    icon: Eye,
    title: "Secure & Transparent",
    description: "Fully auditable on-chain operations",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            About <span className="neon-text">Nexus Protocol</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nexus Protocol is a transparent, secure, and sustainable crypto income ecosystem 
            powered fully by decentralized smart contracts. Token distribution, presale, staking, 
            referral rewards, and buyback systems are all handled by autonomous blockchain mechanisms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
