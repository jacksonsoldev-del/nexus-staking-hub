import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Coins, 
  TrendingUp, 
  Clock, 
  Gift, 
  AlertTriangle, 
  Wallet,
  Calendar,
  Percent,
  Timer,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const tiers = [
  {
    name: "Tier 1",
    rate: "3%",
    range: "0.01–0.1 BNB",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Tier 2",
    rate: "6%",
    range: "0.11–0.9 BNB",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Tier 3",
    rate: "10%",
    range: "1–5 BNB",
    color: "from-amber-500 to-orange-500",
  },
];

const userStakes = [
  {
    id: 1,
    amount: 50000,
    tier: "Tier 2",
    rate: "6%",
    startDate: "2024-01-15",
    endDate: "2024-08-15",
    duration: "7 months",
    dailyReward: 9.86,
    claimed: 345.1,
    remaining: 156,
    progress: 68,
  },
  {
    id: 2,
    amount: 25000,
    tier: "Tier 1",
    rate: "3%",
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    duration: "3 months",
    dailyReward: 2.47,
    claimed: 123.5,
    remaining: 45,
    progress: 50,
  },
];

const Staking = () => {
  const { toast } = useToast();
  const [stakeAmount, setStakeAmount] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("3");
  const [isConnected, setIsConnected] = useState(false);

  const totalStaked = 75000;
  const claimableRewards = 156.78;
  const dailyReward = 12.33;
  const totalEarned = 468.6;
  const activeStakes = 2;

  const handleStake = () => {
    if (!isConnected) {
      toast({ title: "Please connect your wallet first", variant: "destructive" });
      return;
    }
    toast({ title: "Staking initiated", description: "Please confirm in your wallet" });
  };

  const handleClaim = () => {
    toast({ title: "Claim initiated", description: "Claiming your rewards..." });
  };

  const handleUnstake = (stakeId: number) => {
    toast({
      title: "Early Unstake Warning",
      description: "30% penalty will be applied. Continue?",
      variant: "destructive",
    });
  };

  return (
    <Layout>
      <section className="py-12 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">Staking</span> Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Stake your NEXUS tokens and earn up to 10% monthly rewards
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { icon: Coins, label: "Total Staked", value: `${totalStaked.toLocaleString()} NEXUS` },
              { icon: Gift, label: "Claimable", value: `${claimableRewards} NEXUS`, highlight: true },
              { icon: TrendingUp, label: "Daily Reward", value: `${dailyReward} NEXUS` },
              { icon: Award, label: "Total Earned", value: `${totalEarned} NEXUS` },
              { icon: Clock, label: "Active Stakes", value: activeStakes.toString() },
            ].map((stat, index) => (
              <div
                key={index}
                className={`glass-card p-4 ${stat.highlight ? "border-primary/50 animate-pulse-glow" : ""}`}
              >
                <stat.icon className={`w-5 h-5 mb-2 ${stat.highlight ? "text-primary" : "text-muted-foreground"}`} />
                <div className={`font-display font-bold text-lg md:text-xl ${stat.highlight ? "neon-text" : ""}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tiers.map((tier, index) => (
              <div key={index} className="tier-card">
                <div className={`w-full h-1 rounded-t-2xl bg-gradient-to-r ${tier.color} absolute top-0 left-0`} />
                <div className="pt-2">
                  <h3 className="font-display font-bold text-xl mb-1">{tier.name}</h3>
                  <div className="font-display text-4xl font-bold neon-text mb-2">{tier.rate}</div>
                  <p className="text-muted-foreground text-sm">Monthly Return</p>
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <p className="text-sm text-muted-foreground">Presale Range</p>
                    <p className="font-semibold">{tier.range}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Staking Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* New Stake Form */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-xl mb-6">Stake Tokens</h3>
                
                <Tabs defaultValue="stake" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-muted mb-6">
                    <TabsTrigger value="stake">Stake</TabsTrigger>
                    <TabsTrigger value="unstake">Unstake</TabsTrigger>
                  </TabsList>

                  <TabsContent value="stake" className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Amount to Stake
                      </label>
                      <Input
                        type="number"
                        placeholder="Enter NEXUS amount"
                        value={stakeAmount}
                        onChange={(e) => setStakeAmount(e.target.value)}
                        className="bg-muted border-glass-border text-lg h-14"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Available: 125,000 NEXUS
                      </p>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Lock Duration
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { months: "3", bonus: "+0%" },
                          { months: "7", bonus: "+2%" },
                          { months: "12", bonus: "+5%" },
                        ].map((option) => (
                          <button
                            key={option.months}
                            onClick={() => setSelectedDuration(option.months)}
                            className={`glass-card p-4 text-center transition-all ${
                              selectedDuration === option.months
                                ? "border-primary/50 bg-primary/10"
                                : "hover:border-glass-border"
                            }`}
                          >
                            <div className="font-display font-bold text-xl">{option.months}</div>
                            <div className="text-xs text-muted-foreground">Months</div>
                            <div className="text-xs text-primary mt-1">{option.bonus}</div>
                          </button>
                        ))}
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
                      <Button
                        onClick={handleStake}
                        className="w-full h-14 text-lg font-semibold bg-neon-gradient text-background"
                      >
                        Stake Tokens
                      </Button>
                    )}
                  </TabsContent>

                  <TabsContent value="unstake" className="space-y-4">
                    <div className="glass-card p-4 border-destructive/30 bg-destructive/5">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        <div>
                          <p className="font-semibold text-destructive">Early Unstake Penalty</p>
                          <p className="text-sm text-muted-foreground">
                            30% of staked tokens will be deducted if you unstake before the lock period ends
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-center py-4">
                      Select a stake from below to unstake
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Active Stakes */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-xl mb-6">Your Active Stakes</h3>
                
                <div className="space-y-4">
                  {userStakes.map((stake) => (
                    <div key={stake.id} className="glass-card p-4 border-glass-border">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <div className="font-display text-2xl font-bold">
                            {stake.amount.toLocaleString()} NEXUS
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                              {stake.tier}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {stake.rate} monthly
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Daily Reward</div>
                          <div className="font-display font-bold text-primary">
                            +{stake.dailyReward} NEXUS
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <div className="text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Start
                          </div>
                          <div className="font-medium">{stake.startDate}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> End
                          </div>
                          <div className="font-medium">{stake.endDate}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground flex items-center gap-1">
                            <Timer className="w-3 h-3" /> Remaining
                          </div>
                          <div className="font-medium">{stake.remaining} days</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground flex items-center gap-1">
                            <Gift className="w-3 h-3" /> Claimed
                          </div>
                          <div className="font-medium text-primary">{stake.claimed} NEXUS</div>
                        </div>
                      </div>

                      <Progress value={stake.progress} className="h-2 bg-muted mb-4" />

                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          className="bg-neon-gradient text-background"
                        >
                          Claim Reward
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-glass-border"
                        >
                          Sell to Team
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUnstake(stake.id)}
                          className="border-destructive/50 text-destructive hover:bg-destructive/10"
                        >
                          Unstake (-30%)
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    onClick={handleClaim}
                    className="w-full justify-start gap-3 bg-neon-gradient text-background"
                  >
                    <Gift className="w-5 h-5" />
                    Claim All Rewards
                    <span className="ml-auto font-bold">{claimableRewards}</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 border-glass-border"
                  >
                    <TrendingUp className="w-5 h-5" />
                    Sell Reward to Team
                  </Button>
                </div>
              </div>

              {/* Staking Info */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">Staking Info</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reward Distribution</span>
                    <span className="font-medium">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Stake</span>
                    <span className="font-medium">100 NEXUS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Early Unstake Fee</span>
                    <span className="font-medium text-destructive">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Compound Option</span>
                    <span className="font-medium text-primary">Available</span>
                  </div>
                </div>
              </div>

              {/* Penalty Warning */}
              <div className="glass-card p-6 border-amber-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-display font-semibold">Important</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Early unstaking before your lock period ends will result in a 
                  <span className="text-amber-500 font-semibold"> 30% penalty</span> on your staked tokens.
                  Rewards are not affected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staking;
