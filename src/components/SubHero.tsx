import LightModeBgImage from "../assets/center-img.jpg";
import DarkModeBgImage from "../assets/center-bg.png";
import Hero from "./hero/Hero";

function SubHero() {
  return (
    <div className="relative flex items-center justify-center my-20">
          <img src={LightModeBgImage} alt="bg" className="relative dark:hidden block max-w-full h-auto overflow-clip" />
          <img src={DarkModeBgImage} alt="bg" className="hidden dark:block relative max-w-full h-auto overflow-clip" />

          <div className="absolute block top-[40%] xl:top-[30%] w-screen">
            <Hero />
          </div>
        </div>
  )
}

export default SubHero