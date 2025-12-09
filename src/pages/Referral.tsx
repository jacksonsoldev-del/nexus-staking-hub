import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Copy, Check, Users, Coins, Gift, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const referralHistory = [
  { address: "0x1234...5678", amount: "0.5 BNB", tokens: "2,500", reward: "125", date: "2024-03-15" },
  { address: "0xABCD...EFGH", amount: "1.0 BNB", tokens: "5,000", reward: "250", date: "2024-03-14" },
  { address: "0x9876...5432", amount: "0.25 BNB", tokens: "1,250", reward: "62.5", date: "2024-03-13" },
  { address: "0xDEAD...BEEF", amount: "2.0 BNB", tokens: "10,000", reward: "500", date: "2024-03-12" },
  { address: "0xCAFE...BABE", amount: "0.1 BNB", tokens: "500", reward: "25", date: "2024-03-11" },
];

const Referral = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const referralLink = "https://nexusprotocol.io/ref/0x1234...5678";
  const totalReferrals = 47;
  const totalRewards = 2350;
  const claimableRewards = 487.5;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({ title: "Referral link copied to clipboard!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaim = () => {
    toast({ title: "Claim initiated", description: "Processing your referral rewards..." });
  };

  const handleShare = (platform: string) => {
    toast({ title: `Sharing to ${platform}`, description: "Opening share dialog..." });
  };

  return (
    <Layout>
      <section className="py-12 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">Referral</span> Program
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Earn <span className="text-primary font-semibold">5%</span> from every presale purchase 
              made through your referral link
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-display text-3xl font-bold neon-text">{totalReferrals}</div>
              <div className="text-muted-foreground">Total Referrals</div>
            </div>
            <div className="glass-card p-6 text-center">
              <Coins className="w-8 h-8 text-neon-purple mx-auto mb-3" />
              <div className="font-display text-3xl font-bold">{totalRewards.toLocaleString()}</div>
              <div className="text-muted-foreground">Total Earned (NEXUS)</div>
            </div>
            <div className="glass-card p-6 text-center border-primary/50 animate-pulse-glow">
              <Gift className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-display text-3xl font-bold neon-text">{claimableRewards}</div>
              <div className="text-muted-foreground">Claimable (NEXUS)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Referral Link Card */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-xl mb-4">Your Referral Link</h3>
                
                <div className="flex gap-2 mb-4">
                  <Input
                    value={referralLink}
                    readOnly
                    className="bg-muted border-glass-border font-mono text-sm"
                  />
                  <Button
                    onClick={handleCopy}
                    className="px-6 bg-neon-gradient text-background"
                  >
                    {copied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("Twitter")}
                    className="gap-2 border-glass-border"
                  >
                    <Share2 className="w-4 h-4" />
                    Share on X
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("Telegram")}
                    className="gap-2 border-glass-border"
                  >
                    <Share2 className="w-4 h-4" />
                    Share on Telegram
                  </Button>
                </div>
              </div>

              {/* Referral History */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-xl mb-6">Referral History</h3>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-glass-border">
                        <TableHead className="text-muted-foreground">Wallet</TableHead>
                        <TableHead className="text-muted-foreground">Purchase</TableHead>
                        <TableHead className="text-muted-foreground">Tokens</TableHead>
                        <TableHead className="text-muted-foreground">Your Reward</TableHead>
                        <TableHead className="text-muted-foreground">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {referralHistory.map((item, index) => (
                        <TableRow key={index} className="border-glass-border">
                          <TableCell className="font-mono text-sm">{item.address}</TableCell>
                          <TableCell>{item.amount}</TableCell>
                          <TableCell>{item.tokens}</TableCell>
                          <TableCell className="text-primary font-semibold">
                            +{item.reward} NEXUS
                          </TableCell>
                          <TableCell className="text-muted-foreground">{item.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-4 text-center">
                  <Button variant="link" className="text-primary">
                    View All Transactions
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Claim Button */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">Claim Rewards</h3>
                
                <div className="glass-card p-4 bg-primary/5 border-primary/20 mb-4">
                  <div className="text-sm text-muted-foreground mb-1">Available to Claim</div>
                  <div className="font-display text-2xl font-bold neon-text">
                    {claimableRewards} NEXUS
                  </div>
                </div>

                {!isConnected ? (
                  <Button
                    onClick={() => setIsConnected(true)}
                    className="w-full h-12 font-semibold bg-neon-gradient text-background"
                  >
                    Connect Wallet
                  </Button>
                ) : (
                  <Button
                    onClick={handleClaim}
                    className="w-full h-12 font-semibold bg-neon-gradient text-background"
                  >
                    <Gift className="w-5 h-5 mr-2" />
                    Claim {claimableRewards} NEXUS
                  </Button>
                )}
              </div>

              {/* How It Works */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Share your unique referral link" },
                    { step: "2", text: "Friends join the presale using your link" },
                    { step: "3", text: "Earn 5% of their purchase instantly" },
                    { step: "4", text: "Claim your rewards anytime" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="glass-card p-6 border-primary/30">
                <h3 className="font-display font-semibold mb-3">Referral Info</h3>
                <p className="text-sm text-muted-foreground">
                  Referral rewards are automatically calculated as 5% of the referred user's 
                  token purchase and credited to your wallet. Rewards can be claimed at any time.
                </p>
              </div>

              {/* Leaderboard Teaser */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">Top Referrers</h3>
                <div className="space-y-3">
                  {[
                    { rank: "🥇", address: "0xABC...123", referrals: 156 },
                    { rank: "🥈", address: "0xDEF...456", referrals: 134 },
                    { rank: "🥉", address: "0xGHI...789", referrals: 98 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.rank}</span>
                        <span className="font-mono text-sm">{item.address}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">{item.referrals} refs</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Referral;
