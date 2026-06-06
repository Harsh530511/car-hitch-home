const DEMANDS = [
  { n: "01", title: "End the Tareekh-Pe-Tareekh economy.", body: "A justice system that resolves cases faster than Indian Railways resolves complaints. Time-bound hearings, public dashboards, no more dynastic delays." },
  { n: "02", title: "Treat jobs as infrastructure.", body: "Public dignity for the unemployed graduate. Skill stipends, real apprenticeships, and a national right to a first job instead of a first scam call." },
  { n: "03", title: "Open the books. All of them.", body: "Every paisa of public money traceable on a public ledger. Political donations published in real time. Opacity is the original corruption." },
  { n: "04", title: "Civic anger as a public utility.", body: "A real grievance pipeline that doesn't end in a screenshot. Issues raised here move to a public tracker until they're actually closed." },
  { n: "05", title: "A boring, working state.", body: "We don't want fireworks. We want pothole-free streets, working hospitals, electricity that stays, and bureaucrats who answer the phone." },
];

const Manifesto = () => (
  <section id="manifesto" className="border-b border-foreground">
    <div className="border-b border-foreground px-6 sm:px-10 py-4 flex items-center justify-between text-xs uppercase tracking-widest font-display font-bold">
      <span>The Manifesto</span>
      <span>Five Demands</span>
    </div>

    <div className="px-6 sm:px-10 py-10 sm:py-14 border-b border-foreground">
      <h2 className="font-display font-black tracking-tightest text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.85]">
        Five demands.<br />
        <span className="text-accent">No edits.</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {DEMANDS.map((d, i) => (
        <article
          key={d.n}
          className={`px-6 sm:px-8 py-8 border-foreground ${i < DEMANDS.length - 1 ? "border-b" : "border-b"} ${
            i % 3 !== 2 ? "lg:border-r" : ""
          } ${i % 2 !== 1 ? "md:border-r lg:border-r" : "md:border-r-0"}`}
        >
          <div className="font-display font-black text-7xl tracking-tightest text-accent leading-none mb-6">{d.n}</div>
          <h3 className="font-display font-black uppercase text-xl tracking-tight mb-3 leading-tight">{d.title}</h3>
          <p className="font-body text-sm leading-relaxed text-foreground/75">{d.body}</p>
        </article>
      ))}
      <a
        href="#"
        className="px-6 sm:px-8 py-8 font-display font-black uppercase text-xl tracking-tight flex items-center justify-between hover:bg-foreground hover:text-background transition-colors"
      >
        Read the full explainer <span className="text-accent ml-4">→</span>
      </a>
    </div>
  </section>
);

export default Manifesto;
