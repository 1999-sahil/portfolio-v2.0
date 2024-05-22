import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  tag,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  tag?: string | React.ReactNode;
  link?: string;
}) => {
  return (
    <a href={link} target="_blank"
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white cursor-pointer border border-[#757575] justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="overflow-hidden flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img src={header} alt="header" className="m-auto object-fill overflow-hidden" />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-xs bg-[#003c43] text-white font-mukta dark:bg-[#333] w-fit px-2 p-1 rounded-full">
            {tag}
        </div>
        <div className="font-sans text-sm font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </a>
  );
};
