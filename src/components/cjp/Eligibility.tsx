const ITEMS = [
  { title: "Overqualified", body: "Three degrees, one unpaid internship, zero callbacks. You qualify." },
  { title: "Politically Frustrated", body: "You have rage-quit at least one WhatsApp family group this year." },
  { title: "Civic Anger", body: "You have screamed at a pothole. Out loud. In public. We saw." },
  { title: "Financially Confused", body: "Your salary arrives and leaves on the same day. EMI is your love language." },
];

const Eligibility = () => (
  <section id="join" className="border-b border-foreground">
    <div className="border-b border-foreground px-6 sm:px-10 py-4 flex items-center justify-between text-xs uppercase tracking-widest font-display font-bold">
      <span>Membership</span>
      <span>Eligibility Check</span>
    </div>
    <div className="px-6 sm:px-10 py-10 sm:py-14 border-b border-foreground">
      <h2 className="font-display font-black tracking-tightest text-5xl sm:text-7xl uppercase leading-[0.85]">
        Are you eligible<br />to join?
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2">
      {ITEMS.map((it, i) => (
        <div
          key={i}
          className={`p-6 sm:p-10 flex gap-5 ${i < 2 ? "border-b border-foreground" : i === 2 ? "border-b md:border-b-0 border-foreground" : ""} ${
            i % 2 === 0 ? "md:border-r border-foreground" : ""
          }`}
        >
          <div className="shrink-0 h-10 w-10 border border-foreground flex items-center justify-center text-accent font-display font-black text-xl">
            ✓
          </div>
          <div>
            <h3 className="font-display font-black uppercase text-xl tracking-tight mb-2">{it.title}</h3>
            <p className="font-body text-sm leading-relaxed text-foreground/75">{it.body}</p>
          </div>
        </div>
      ))}
    </div>
    <a
      href="#"
      className="block px-6 sm:px-10 py-10 border-t border-foreground bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <span className="font-display font-black uppercase text-4xl sm:text-6xl tracking-tightest leading-none">
          Join the Party
        </span>
        <span className="font-display font-black text-4xl sm:text-6xl">→</span>
      </div>
    </a>
  </section>
);

export default Eligibility;
