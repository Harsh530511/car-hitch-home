import Marquee from "./Marquee";

const items = [
  "Party Launch · Volume 1, Edition 1",
  "Filed under: General Disgruntlement",
  "Sponsored by no one. Funded by nothing.",
  "HQ: Wherever the wifi works",
  "Now accepting rants, retweets, and resentment",
];

const TopBar = () => <Marquee items={items} />;

export default TopBar;
