import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ToolsSection from "../components/home/ToolsSection";

const home = () => {
  return (
    <div className="py-5">
      <Hero />
      <About />
      <ToolsSection />
    </div>
  );
};

export default home;
