import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import SubHero from "./components/SubHero";
import Skills from "./components/Skills";
import MyWork from "./components/myWork/MyWork";
import Carousel from "./components/carousel/Carousel";
import Carousel2 from "./components/carousel/Carousel2";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
      <div className="overflow-hidden" ref={ref}>
        <HeroSection />

        <SubHero />

        <Skills />

        <MyWork />

        <div className="carousel mt-20 py-10 flex flex-col gap-4 border-b border-t">
          <Carousel />
          <Carousel2 />
        </div>

        <Footer />
      </div>
  );
}

export default App;
