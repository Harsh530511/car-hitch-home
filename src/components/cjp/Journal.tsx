const ARTICLES = [
  {
    date: "06 Jun 2026",
    read: "7 min read",
    title: "Tareekh Pe Tareekh: The Indian Judiciary's Business Model.",
    excerpt: "Five crore pending cases, one infinite adjournment. A field report from inside the world's longest queue.",
  },
  {
    date: "02 Jun 2026",
    read: "4 min read",
    title: "The Great EMI Republic.",
    excerpt: "How a generation learned to swipe right on debt while being told it was financial discipline.",
  },
  {
    date: "28 May 2026",
    read: "9 min read",
    title: "Sarkari Job, Private Pain.",
    excerpt: "Twelve lakh aspirants. Two hundred seats. One exam that postponed itself four times. Welcome home.",
  },
];

const Journal = () => (
  <section id="articles" className="border-b border-foreground">
    <div className="border-b border-foreground px-6 sm:px-10 py-4 flex items-center justify-between text-xs uppercase tracking-widest font-display font-bold">
      <span>The Journal</span>
      <span>Articles & Dispatches</span>
    </div>
    <div className="px-6 sm:px-10 py-10 sm:py-14 border-b border-foreground flex flex-col sm:flex-row sm:items-end justify-between gap-6">
      <h2 className="font-display font-black tracking-tightest text-5xl sm:text-7xl uppercase leading-[0.85]">
        The Journal.
      </h2>
      <a href="#" className="font-display font-bold uppercase text-sm tracking-widest hover:text-accent">
        See all articles →
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3">
      {ARTICLES.map((a, i) => (
        <article
          key={i}
          className={`p-6 sm:p-8 flex flex-col ${i < 2 ? "border-b md:border-b-0 md:border-r border-foreground" : ""}`}
        >
          <div className="aspect-[4/3] bg-secondary border border-foreground mb-6 flex items-center justify-center">
            <span className="font-display font-black text-7xl text-foreground/20">0{i + 1}</span>
          </div>
          <div className="flex items-center justify-between text-xs uppercase tracking-widest font-display font-bold text-muted-foreground mb-4">
            <span>{a.date}</span>
            <span>{a.read}</span>
          </div>
          <h3 className="font-display font-black uppercase text-2xl tracking-tight leading-tight mb-4">{a.title}</h3>
          <p className="font-body text-sm leading-relaxed text-foreground/75 mb-6 flex-1">{a.excerpt}</p>
          <a href="#" className="font-display font-bold uppercase text-sm tracking-widest hover:text-accent">
            Read →
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Journal;
