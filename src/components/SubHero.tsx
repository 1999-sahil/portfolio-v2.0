import LightModeBgImage from "../assets/center-img.jpg";
import DarkModeBgImage from "../assets/center-bg.png";
import Hero from "./hero/Hero";
import { motion } from "framer-motion";

function SubHero() {
  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{
      duration: 0.5,
      delay: 0.25,
    }}
      className="relative flex items-center justify-center my-20 pt-10 dark:bg-gradient-to-t from-orange-500 via-yellow-300 to-yellow-500">
          <img src={LightModeBgImage} alt="bg" className="relative dark:hidden block max-w-full h-auto overflow-clip" />
          <img src={DarkModeBgImage} alt="bg" className="hidden dark:block relative max-w-full h-auto overflow-clip" />

          <div className="absolute block top-[40%] xl:top-[30%] w-screen">
            <Hero />
          </div>
        </motion.div>
  )
}

export default SubHero