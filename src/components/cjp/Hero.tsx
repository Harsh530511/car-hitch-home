const NAV = ["Vision", "Manifesto", "Articles", "Gallery", "Members", "Issues", "Tracker", "Contact"];

const MEMBERS = [
  { name: "Aarav S.", city: "Bengaluru" },
  { name: "Priya R.", city: "Pune" },
  { name: "Karthik V.", city: "Chennai" },
  { name: "Mehak J.", city: "Delhi" },
  { name: "Rohan D.", city: "Mumbai" },
  { name: "Sneha M.", city: "Hyderabad" },
  { name: "Ishaan G.", city: "Kolkata" },
  { name: "Anaya P.", city: "Jaipur" },
  { name: "Vikram T.", city: "Lucknow" },
  { name: "Tara B.", city: "Goa" },
];

const Hero = () => (
  <section className="border-b border-foreground">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
      <div className="border-b lg:border-b-0 lg:border-r border-foreground">
        <div className="border-b border-foreground px-6 sm:px-10 py-4 flex items-center justify-between text-xs uppercase tracking-widest font-display font-bold">
          <span>Issue №01 · Est. 2026</span>
          <span className="text-accent">● Live</span>
        </div>

        <div className="px-6 sm:px-10 py-10 sm:py-16">
          <p className="font-deva text-lg sm:text-xl mb-6">कॉकरोच जनता पार्टी · Est. 2026</p>
          <h1 className="font-display font-black tracking-tightest leading-[0.85] text-[14vw] sm:text-[10vw] lg:text-[8.5vw] uppercase">
            The<br />Cockroach<br />Janta<br /><span className="text-accent">Party.</span>
          </h1>
          <p className="mt-8 max-w-xl font-body text-base sm:text-lg leading-relaxed">
            A party for the overqualified, underpaid and politically frustrated.
            Voice of the burnt-out youth. Filed under: general disgruntlement.
          </p>
        </div>

        <div className="border-t border-foreground px-6 sm:px-10 py-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-display font-bold uppercase tracking-widest">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-accent transition-colors">
              {n}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-foreground">
          <a
            href="#join"
            className="px-6 sm:px-10 py-6 font-display font-black text-xl sm:text-2xl uppercase tracking-tight border-b sm:border-b-0 sm:border-r border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-between"
          >
            Join the Party <span className="text-accent ml-4">→</span>
          </a>
          <a
            href="#issues"
            className="px-6 sm:px-10 py-6 font-display font-black text-xl sm:text-2xl uppercase tracking-tight hover:bg-foreground hover:text-background transition-colors flex items-center justify-between"
          >
            Raise an Issue <span className="text-accent ml-4">→</span>
          </a>
        </div>
      </div>

      {/* Live members panel */}
      <aside className="bg-background">
        <div className="border-b border-foreground px-5 py-4 flex items-center justify-between">
          <span className="font-display font-bold uppercase text-xs tracking-widest">Live · Joining now</span>
          <span className="h-2 w-2 bg-accent animate-pulse rounded-none" />
        </div>
        <ul className="divide-y divide-foreground">
          {MEMBERS.map((m, i) => (
            <li key={i} className="px-5 py-3 flex items-center justify-between text-sm font-body">
              <span className="font-medium">{m.name}</span>
              <span className="text-muted-foreground uppercase text-xs tracking-wider">{m.city}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-foreground px-5 py-4 text-xs uppercase tracking-widest font-display font-bold">
          + 21,242 more
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;
