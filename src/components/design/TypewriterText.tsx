
import { ArrowRight } from "lucide-react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export function TypewriterText() {
  const words = [
    {
      text: "Turning",
    },
    {
      text: "vision",
    },
    {
      text: "into",
    },
    {
      text: "reality",
    },
    {
        text: "with",
    },
    {
      text: "Code",
      className: "text-pink-500 dark:text-pink-500",
    },
    {
        text: "and",
    },
    {
        text: "Design.",
        className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[22rem] lg:h-[28rem] pt-12">
      <p className="text-neutral-600 dark:text-neutral-200 text-base font-roboto font-medium">
        A collection of my projects which I build
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button className="flex items-center w-[10rem] h-10 hover:text-white dark:hover:text-black rounded-lg bg-white text-black border border-black text-sm font-roboto px-4 justify-between">
          <h2 className="flex items-center gap-1.5">
            <FaGithub className="h-4 w-4 mb-[2px]" />
            Github
          </h2>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
