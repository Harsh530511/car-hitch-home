import Marquee from "./Marquee";

const items = [
  "Breaking · TCJP rally swells past Sansad Bhavan",
  "Exit Polls · Burnt-Out Youth bloc surges +14",
  "Update · Cockroach mascot confirmed indestructible",
  "Alert · Manifesto crashes three news websites",
  "Live · Wifi at HQ is back online",
];

const BreakingTicker = () => <Marquee items={items} separator="●" inverted fast />;

export default BreakingTicker;
