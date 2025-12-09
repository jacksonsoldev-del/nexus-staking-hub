import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How to join presale?",
    answer:
      "Connect your wallet, navigate to the Presale page, enter the amount of BNB you want to contribute, and click 'Buy Token'. Your NEXUS tokens will be automatically sent to your wallet after the presale ends.",
  },
  {
    question: "How does staking reward work?",
    answer:
      "Your staking rewards are calculated daily based on your tier level. Tier 1 earns 3% monthly, Tier 2 earns 6% monthly, and Tier 3 earns 10% monthly. Rewards accumulate automatically and can be claimed at any time.",
  },
  {
    question: "Is early unstake allowed?",
    answer:
      "Yes, early unstaking is allowed, but there is a 30% penalty on your staked tokens. This penalty helps maintain protocol stability and rewards long-term holders.",
  },
  {
    question: "How does the 5% referral work?",
    answer:
      "When someone joins the presale using your referral link, you automatically receive 5% of their purchase amount in NEXUS tokens. Referral rewards are credited directly to your wallet and can be claimed from the Referral page.",
  },
  {
    question: "How to sell rewards to the team?",
    answer:
      "You can sell your accumulated rewards directly to the team through the 'Sell Reward to Team' feature on the Staking page. This provides an alternative exit option with guaranteed liquidity.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="neon-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Nexus Protocol
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-glass-border data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
