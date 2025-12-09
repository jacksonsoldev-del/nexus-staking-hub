import { Link } from "react-router-dom";
import { Send, Twitter, FileCode, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-gradient flex items-center justify-center">
                <span className="font-display font-bold text-background text-lg">N</span>
              </div>
              <span className="font-display font-bold text-xl">
                <span className="neon-text">NEXUS</span>
                <span className="text-foreground/80"> PROTOCOL</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A transparent, secure, and sustainable crypto income ecosystem powered fully by decentralized smart contracts.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/presale" className="text-muted-foreground hover:text-primary transition-colors">
                  Presale
                </Link>
              </li>
              <li>
                <Link to="/staking" className="text-muted-foreground hover:text-primary transition-colors">
                  Staking
                </Link>
              </li>
              <li>
                <Link to="/referral" className="text-muted-foreground hover:text-primary transition-colors">
                  Referral
                </Link>
              </li>
            </ul>
          </div>

          {/* Smart Contracts */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Smart Contracts</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <FileCode className="w-4 h-4 text-primary" />
                <span className="text-sm">Token: 0x...coming</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <FileCode className="w-4 h-4 text-primary" />
                <span className="text-sm">Presale: 0x...coming</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <FileCode className="w-4 h-4 text-primary" />
                <span className="text-sm">Staking: 0x...coming</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-neon-purple" />
                <span className="text-sm">Audited by CertiK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-glass-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Nexus Protocol. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm font-display">
            Powered by <span className="text-primary">Smart Contracts</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
