import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Smart Contract Powered Ecosystem</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
            <span className="neon-text">NEXUS PROTOCOL</span>
            <br />
            <span className="text-foreground">Smart Contract Powered</span>
            <br />
            <span className="text-muted-foreground">Earning Ecosystem</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up-delay-2">
            Earn <span className="text-primary font-semibold">3–10% monthly</span> through on-chain staking rewards. 
            Fully decentralized. Fully transparent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Link to="/presale" className="btn-primary inline-flex items-center justify-center gap-2">
              Join Presale
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/staking" className="btn-outline inline-flex items-center justify-center gap-2">
              Open Staking Dashboard
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-up-delay-3">
            {[
              { value: "210M", label: "Total Supply" },
              { value: "10%", label: "Max Monthly Yield" },
              { value: "5%", label: "Referral Bonus" },
              { value: "100%", label: "On-Chain" },
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
