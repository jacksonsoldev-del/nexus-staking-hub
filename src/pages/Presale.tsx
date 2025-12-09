import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Wallet, Copy, Check, Shield, Users, Coins, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const Presale = () => {
  const { toast } = useToast();
  const [bnbAmount, setBnbAmount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tokenPrice = 0.0002;
  const tokensReceived = bnbAmount ? (parseFloat(bnbAmount) / tokenPrice).toLocaleString() : "0";
  const raised = 125.5;
  const hardcap = 500;
  const progress = (raised / hardcap) * 100;

  const handleCopy = () => {
    navigator.clipboard.writeText("0xABC123...DEF456");
    setCopied(true);
    toast({ title: "Referral link copied!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBuy = () => {
    if (!isConnected) {
      toast({ title: "Please connect your wallet first", variant: "destructive" });
      return;
    }
    toast({ title: "Transaction initiated", description: "Please confirm in your wallet" });
  };

  return (
    <Layout>
      <section className="py-12 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">NEXUS</span> Presale
            </h1>
            <p className="text-muted-foreground text-lg">
              Join the presale and secure your tokens at the best price
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Presale Card */}
            <div className="lg:col-span-2 space-y-6">
              {/* Countdown Timer */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Timer className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold">Presale Ends In</h3>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { value: timeLeft.days, label: "Days" },
                    { value: timeLeft.hours, label: "Hours" },
                    { value: timeLeft.minutes, label: "Mins" },
                    { value: timeLeft.seconds, label: "Secs" },
                  ].map((item, index) => (
                    <div key={index} className="glass-card p-4 text-center">
                      <div className="font-display text-3xl md:text-4xl font-bold neon-text">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="text-muted-foreground text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Raised</span>
                  <span className="font-display font-semibold">
                    {raised} BNB / {hardcap} BNB
                  </span>
                </div>
                <Progress value={progress} className="h-4 bg-muted" />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>{progress.toFixed(1)}% Complete</span>
                  <span>{hardcap - raised} BNB Remaining</span>
                </div>
              </div>

              {/* Buy Token Form */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-xl mb-6">Buy NEXUS Tokens</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Amount in BNB
                    </label>
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={bnbAmount}
                      onChange={(e) => setBnbAmount(e.target.value)}
                      className="bg-muted border-glass-border text-lg h-14"
                    />
                  </div>

                  <div className="glass-card p-4 bg-primary/5 border-primary/20">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">You will receive</span>
                      <span className="font-display text-xl font-bold text-primary">
                        {tokensReceived} NEXUS
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Rate: 1 NEXUS = {tokenPrice} BNB
                    </div>
                  </div>

                  {!isConnected ? (
                    <Button
                      onClick={() => setIsConnected(true)}
                      className="w-full h-14 text-lg font-semibold bg-neon-gradient text-background"
                    >
                      <Wallet className="w-5 h-5 mr-2" />
                      Connect Wallet
                    </Button>
                  ) : (
                    <>
                      <div className="glass-card p-3 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Connected:</span>
                        <span className="font-mono text-primary">0x1234...5678</span>
                      </div>
                      <div className="glass-card p-3 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Balance:</span>
                        <span className="font-semibold">2.45 BNB</span>
                      </div>
                      <Button
                        onClick={handleBuy}
                        className="w-full h-14 text-lg font-semibold bg-neon-gradient text-background"
                      >
                        Buy NEXUS Tokens
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {/* Referral Notice */}
              <div className="glass-card p-4 border-neon-purple/30 flex items-center gap-4">
                <Users className="w-8 h-8 text-neon-purple flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    You were referred by: <span className="text-primary font-mono">0xABC...DEF</span>
                  </p>
                  <p className="text-xs text-neon-purple">They will receive 5% referral bonus</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">Presale Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Token Price</span>
                    <span className="font-semibold">{tokenPrice} BNB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Buyers</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tokens Sold</span>
                    <span className="font-semibold">62,750,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Buy</span>
                    <span className="font-semibold">0.01 BNB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Buy</span>
                    <span className="font-semibold">5 BNB</span>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="glass-card p-6 border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="font-display font-semibold">Security Notice</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Presale is fully handled by blockchain smart contracts. Your funds are secure and 
                  all transactions are transparent and verifiable on-chain.
                </p>
              </div>

              {/* Your Referral Link */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">Your Referral Link</h3>
                <div className="flex gap-2">
                  <Input
                    value="nexus.io/ref/0xABC123"
                    readOnly
                    className="bg-muted border-glass-border font-mono text-sm"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopy}
                    className="border-glass-border"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Earn 5% from every purchase made through your link
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presale;
