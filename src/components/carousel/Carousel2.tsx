import { svg } from "@/constants/svg";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import SkillCard from "./SkillCard";

function Carousel2() {
    let [ref, { width }] =useMeasure();

    const xTranslation = useMotionValue(0);

    const FAST_DURATION = 20;
    const SLOW_DURATION = 55;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [mustFinish, setMustFinish] = useState(false);
    const [reRender, setReRender] = useState(false);


    useEffect(() => {
        let controls;

        const finalPosition = width / 2;

        if(mustFinish) {
            controls = animate(xTranslation, [xTranslation, [xTranslation.get(), finalPosition]], {
                ease: "linear",
                duration: duration * (1 + xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setReRender(!reRender);
                }
            })
        } else {
            controls = animate(xTranslation, [-finalPosition, 0], {
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
    <div className="">
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
    </div>
  )
}

export default Carousel2