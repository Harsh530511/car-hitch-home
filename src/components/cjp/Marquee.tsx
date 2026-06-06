interface Props {
  items: string[];
  separator?: string;
  fast?: boolean;
  inverted?: boolean;
  className?: string;
}

const Marquee = ({ items, separator = "✦", fast, inverted, className = "" }: Props) => {
  const loop = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y border-foreground ${
        inverted ? "bg-foreground text-background" : "bg-background text-foreground"
      } ${className}`}
    >
      <div className={`marquee ${fast ? "marquee-fast" : ""} py-3`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="px-6 text-sm font-display font-bold uppercase tracking-wider whitespace-nowrap flex items-center"
          >
            <span className={`mr-6 ${inverted ? "text-background" : "text-accent"}`}>{separator}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
