import swarm from "@/assets/swarm.jpg";

const STATS = [
  { value: "21,252", label: "Members & counting" },
  { value: "05", label: "Demands" },
  { value: "00", label: "Corporate donors" },
  { value: "∞", label: "Patience" },
];

const Swarm = () => (
  <section className="border-b border-foreground">
    <div className="relative">
      <img
        src={swarm}
        alt="The swarm: a crowd of burnt-out youth raising fists at a rally"
        width={1920}
        height={1088}
        loading="lazy"
        className="w-full h-[55vh] sm:h-[70vh] object-cover grayscale"
      />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full bg-background/95 border-t border-foreground px-6 sm:px-10 py-6 sm:py-8">
          <p className="text-xs uppercase tracking-widest font-display font-bold text-accent mb-2">The Swarm</p>
          <h2 className="font-display font-black tracking-tightest text-4xl sm:text-6xl lg:text-7xl uppercase leading-none">
            Voice of the Burnt-Out Youth.
          </h2>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-foreground">
      {STATS.map((s, i) => (
        <div
          key={i}
          className={`px-6 py-8 ${i < STATS.length - 1 ? "border-b lg:border-b-0 lg:border-r border-foreground" : ""} ${
            i < 2 ? "border-b lg:border-b-0" : ""
          } ${i % 2 === 0 ? "border-r lg:border-r border-foreground" : ""}`}
        >
          <div className="font-display font-black text-5xl sm:text-6xl tracking-tightest leading-none">{s.value}</div>
          <div className="mt-3 text-xs uppercase tracking-widest font-display font-bold text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Swarm;
