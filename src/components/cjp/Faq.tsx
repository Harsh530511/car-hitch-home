import { useState } from "react";

const FAQS = [
  {
    q: "What is The Cockroach Janta Party?",
    a: "It is a satirical political movement organising the chronically online, the overqualified, and the politically frustrated into a single, very loud, very polite mob.",
  },
  {
    q: "Why is it called the Cockroach Janta Party?",
    a: "Because cockroaches survive everything — nuclear winters, broken governments, even Indian summers. We aspire to that level of indestructibility.",
  },
  {
    q: "Is this a real political party?",
    a: "It is as real as the promises made every election cycle. Take that as you will.",
  },
  {
    q: "Who can join?",
    a: "Anyone overqualified, underpaid, politically frustrated, or financially confused. Bring a charged phone and a sense of humour.",
  },
  {
    q: "How is the party funded?",
    a: "Sponsored by no one. Funded by nothing. Our entire treasury fits in a Google Sheet.",
  },
  {
    q: "Where is the headquarters?",
    a: "Wherever the wifi works.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-foreground">
      <div className="border-b border-foreground px-6 sm:px-10 py-4 flex items-center justify-between text-xs uppercase tracking-widest font-display font-bold">
        <span>FAQ</span>
        <span>Frequently Disgruntled</span>
      </div>
      <div className="px-6 sm:px-10 py-10 sm:py-14 border-b border-foreground">
        <h2 className="font-display font-black tracking-tightest text-5xl sm:text-7xl uppercase leading-[0.85]">
          Frequently<br />Asked.
        </h2>
      </div>
      <div>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={i < FAQS.length - 1 ? "border-b border-foreground" : ""}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-6 sm:px-10 py-6 flex items-center justify-between gap-6 text-left hover:bg-foreground hover:text-background transition-colors group"
              >
                <span className="font-display font-black uppercase text-lg sm:text-2xl tracking-tight">{f.q}</span>
                <span className="font-display font-black text-3xl shrink-0 text-accent group-hover:text-background">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 sm:px-10 pb-8 -mt-2">
                  <p className="font-body text-base sm:text-lg leading-relaxed text-foreground/80 max-w-3xl">{f.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
