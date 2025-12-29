import Hero from "@/components/Hero";
import Features from "@/components/hero/Features";
import TopDeals from "@/components/TopDeals";
const Homepage = () => {
  return (
    <div className="pt-2">
      <div className="container">
        <Hero />
        <Features />
        <TopDeals />
      </div>
    </div>
  );
};

export default Homepage;
