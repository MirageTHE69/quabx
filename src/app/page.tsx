import Experience from "@/components/Experience";
import Splash from "@/components/Splash";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import Verification from "@/components/Verification";
import { FinalCta, Footer, Industries, Knowledge, Platform, Pricing, Split } from "@/components/Sections";

export default function Home() {
  return (
    <Experience>
      <a className="skip-link" href="#main">Skip to content</a>
      <Splash />
      <Nav />
      <main id="main">
        <Hero />
        <Capabilities />
        <HowItWorks />
        <Split />
        <Platform />
        <Verification />
        <Industries />
        <Knowledge />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </Experience>
  );
}
