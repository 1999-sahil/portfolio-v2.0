import { AboutMe } from "@/constants";
import splitString from "@/utils/splitString";
import { motion } from "framer-motion";

const heading = "About Me";
const text = AboutMe;

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

function About() {

  const headingChars = splitString(heading);
  const textChars = splitString(text);

  return (
    <div className="mx-6">
      <div className="flex items-center justify-center gap-1 mt-5 mb-8">
        <h1 className="text-[22px] text-[#12372a] dark:text-[#ffd800] text-center font-candal font-black">Passion Fuels Purpose!</h1>
        <svg width="40px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#A0041E" d="M1 17l8-7l16 1l1 16l-7 8s.001-5.999-6-12s-12-6-12-6z"></path><path fill="#FFAC33" d="M.973 35s-.036-7.979 2.985-11S15 21.187 15 21.187S14.999 29 11.999 32c-3 3-11.026 3-11.026 3z"></path><circle fill="#FFCC4D" cx="8.999" cy="27" r="4"></circle><path fill="#55ACEE" d="M35.999 0s-10 0-22 10c-6 5-6 14-4 16s11 2 16-4c10-12 10-22 10-22z"></path><path d="M26.999 5a3.996 3.996 0 0 0-3.641 2.36A3.969 3.969 0 0 1 24.999 7a4 4 0 0 1 4 4c0 .586-.133 1.139-.359 1.64A3.993 3.993 0 0 0 30.999 9a4 4 0 0 0-4-4z" fill="#000000"></path><path fill="#A0041E" d="M8 28s0-4 1-5s13.001-10.999 14-10s-9.001 13-10.001 14S8 28 8 28z"></path></svg>
      </div>
      <motion.h1
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="font-bold text-[18px] font-candal mb-3 text-gray-700"
      >
        {headingChars.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="text-[16px] font-dmsans font-semibold text-[#333]"
      >
        {textChars.map((chars) => (
          <motion.span
            key={chars}
            transition={{ duration: 0.35 }}
            variants={charVariants}
          >
            {chars}
          </motion.span>
        ))}
      </motion.p>
    </div>
  )
}

export default About