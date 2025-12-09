import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Presale", path: "/presale" },
  { name: "Staking", path: "/staking" },
  { name: "Referral", path: "/referral" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const location = useLocation();

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-glass-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neon-gradient flex items-center justify-center">
              <span className="font-display font-bold text-background text-lg">N</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              <span className="neon-text">NEXUS</span>
              <span className="text-foreground/80"> PROTOCOL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary text-glow"
                    : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Wallet Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={handleConnect}
              className={`gap-2 font-semibold transition-all duration-300 ${
                isConnected
                  ? "bg-muted text-foreground hover:bg-muted/80"
                  : "bg-neon-gradient text-background hover:opacity-90"
              }`}
            >
              <Wallet className="w-4 h-4" />
              {isConnected ? "0x1234...5678" : "Connect Wallet"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-glass-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={handleConnect}
                className="gap-2 font-semibold bg-neon-gradient text-background mt-2"
              >
                <Wallet className="w-4 h-4" />
                {isConnected ? "0x1234...5678" : "Connect Wallet"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
