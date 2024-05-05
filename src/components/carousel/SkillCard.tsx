import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hoverCard, hoverCardH1 } from "@/constants/motion";

interface CardProp {
    image: string;
    title: string
}

function SkillCard({ image, title }: CardProp) {

    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <motion.div 
            className="relative border overflow-hidden min-w-[120px] h-[120px] lg:min-w-[150px] lg:h-[150px] bg-slate-100 dark:bg-gray-700 rounded-md flex items-center justify-center"
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
            {showOverlay && (
                <motion.div
                    variants={hoverCard}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 z-10 flex items-center justify-center"
                >
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
                    <motion.h1
                        variants={hoverCardH1}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="bg-white dark:text-[#333] font-semibold font-dmsans text-sm px-4 py-1 z-10 rounded-full flex items-center gap-[0.5ch] hover:opacity-75">
                        <span>{title}</span>
                    </motion.h1>
                </motion.div>
            )}
            </AnimatePresence>
            
            <img src={image} alt={image} />
        </motion.div>
  )
}

export default SkillCard