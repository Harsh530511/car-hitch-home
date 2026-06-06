const Vision = () => (
  <section id="vision" className="border-b border-foreground">
    <div className="border-b border-foreground px-6 sm:px-10 py-4 flex items-center justify-between text-xs uppercase tracking-widest font-display font-bold">
      <span>Chapter One</span>
      <span>Vision & Mission</span>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-6 sm:px-10 py-10 sm:py-16 border-b lg:border-b-0 lg:border-r border-foreground">
        <p className="text-xs uppercase tracking-widest font-display font-bold text-accent mb-4">01 · Our Movement</p>
        <h3 className="font-display font-black tracking-tightest text-4xl sm:text-5xl uppercase leading-[0.95] mb-6">
          Our Movement's Vision.
        </h3>
        <p className="font-body text-base sm:text-lg leading-relaxed text-foreground/80">
          We are not here to set up another PM CARES, another committee, or another scheme named after
          someone's grandfather. We are here because the country was promised to us — and the country was
          quietly given to someone else. The Cockroach Janta Party exists to outlive the rot, eat through the
          spreadsheets, and refuse to die quietly.
        </p>
      </div>
      <div className="px-6 sm:px-10 py-10 sm:py-16">
        <p className="text-xs uppercase tracking-widest font-display font-bold text-accent mb-4">02 · Our Mission</p>
        <h3 className="font-display font-black tracking-tightest text-4xl sm:text-5xl uppercase leading-[0.95] mb-6">
          Our Mission.
        </h3>
        <p className="font-body text-base sm:text-lg leading-relaxed text-foreground/80">
          Build a party for a generation raised on promises and powered by EMIs. A party that doesn't need
          your vote so much as it needs your honesty. We organise the chronically online, the
          overqualified, and the politically allergic — and we turn that energy into accountability.
        </p>
      </div>
    </div>
  </section>
);

export default Vision;
