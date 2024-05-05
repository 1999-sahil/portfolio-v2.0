import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { svg } from "@/constants/svg";
import useMeasure from "react-use-measure";

function Carousel() {
    let [ref, { width }] =useMeasure();

    const xTranslation = useMotionValue(0);

    const FAST_DURATION = 20;
    const SLOW_DURATION = 55;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [mustFinish, setMustFinish] = useState(false);
    const [reRender, setReRender] = useState(false);


    useEffect(() => {
        let controls;

        const finalPosition = -width / 2;

        if(mustFinish) {
            controls = animate(xTranslation, [xTranslation, [xTranslation.get(), finalPosition]], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setReRender(!reRender);
                }
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [xTranslation, width, duration, reRender]);

  return (
    <main className="py-10 my-10">
        <motion.div 
                className="flex gap-1" 
                ref={ref} 
                style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {[...svg, ...svg].map((item, index) => (
                    <SkillCard 
                        image={item.image}
                        title={item.title}
                        key={index} 
                    />
                ))}
            </motion.div>
    </main>
  )
}

export default Carousel