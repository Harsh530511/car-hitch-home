import TopBar from "@/components/cjp/TopBar";
import Hero from "@/components/cjp/Hero";
import Swarm from "@/components/cjp/Swarm";
import BreakingTicker from "@/components/cjp/BreakingTicker";
import Vision from "@/components/cjp/Vision";
import Manifesto from "@/components/cjp/Manifesto";
import Journal from "@/components/cjp/Journal";
import Faq from "@/components/cjp/Faq";
import Eligibility from "@/components/cjp/Eligibility";
import Footer from "@/components/cjp/Footer";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground border-x border-foreground max-w-[1600px] mx-auto">
    <TopBar />
    <Hero />
    <Swarm />
    <BreakingTicker />
    <Vision />
    <Manifesto />
    <Journal />
    <Faq />
    <Eligibility />
    <Footer />
  </main>
);

export default Index;
