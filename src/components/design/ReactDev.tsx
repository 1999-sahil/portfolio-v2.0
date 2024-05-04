import { FaCode } from "react-icons/fa";

function ReactDev() {
  return (
    <div className="rotate-6 lg:-rotate-12">
        <div className="flex items-center gap-[2px] -rotate-6 bg-[#e30b5c] px-2 py-[1px] md:px-4 md:py-1 rounded-md">
          <FaCode className="md:w-8 md:h-8 lg:w-12 lg:h-12 text-black" />
          <h2 className="font-nova text-[10px] md:text-xl text-white">React</h2>
        </div>
        <h2 className="bg-[#e30b5c] rotate-6 px-2 mt-2 py-[1px] md:px-4 md:py-1 lg:py-2 rounded-md font-nova text-[10px] md:text-xl text-white">Developer</h2>
    </div>
  );
}

export default ReactDev;
