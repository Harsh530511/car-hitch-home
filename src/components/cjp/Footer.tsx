import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="border-t border-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] border-b border-foreground">
        <div className="px-6 sm:px-10 py-10 sm:py-14 border-b lg:border-b-0 lg:border-r border-foreground">
          <p className="text-xs uppercase tracking-widest font-display font-bold text-accent mb-4">The Dispatch</p>
          <h3 className="font-display font-black tracking-tightest text-4xl sm:text-6xl uppercase leading-[0.9] mb-6">
            Get the newsletter.<br />Quit the rage-scroll.
          </h3>
          <p className="font-body text-base text-foreground/75 mb-8 max-w-md">
            One email a week. Manifesto updates, tracker progress, satire that lands too close to home.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="flex flex-col sm:flex-row border border-foreground max-w-xl"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.in"
              className="flex-1 px-5 py-4 bg-background text-foreground font-body text-base outline-none focus:bg-secondary placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-foreground text-background font-display font-black uppercase tracking-widest text-sm hover:bg-accent transition-colors"
            >
              {sent ? "Subscribed ✓" : "Subscribe →"}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {[
            { label: "Email", value: "hello@tcjp.in" },
            { label: "Press", value: "press@tcjp.in" },
            { label: "Headquarters", value: "Wherever the wifi works" },
          ].map((c, i) => (
            <div
              key={c.label}
              className={`px-6 py-8 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-foreground" : ""}`}
            >
              <p className="text-xs uppercase tracking-widest font-display font-bold text-muted-foreground mb-3">
                {c.label}
              </p>
              <p className="font-display font-black uppercase text-lg tracking-tight">{c.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs uppercase tracking-widest font-display font-bold">
        <span>© 2026 The Cockroach Janta Party</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">X / Twitter</a>
          <a href="#" className="hover:text-accent">YouTube</a>
        </div>
        <span className="text-accent">⚠ A work of satire</span>
      </div>
    </footer>
  );
};

export default Footer;
