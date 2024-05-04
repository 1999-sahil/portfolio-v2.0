import { FaLaptopCode } from "react-icons/fa";

function Frontend() {
  return (
    <div className="flex items-center gap-1 md:gap-2 bg-[#fc6a03] w-fit px-2 md:px-3 py-1 rounded-md rotate-3 lg:rotate-6">
      <div className="bg-black p-[2px] rounded-lg">
        <FaLaptopCode className="h-6 w-6 text-[#fc6a03] md:w-10 md:h-10" />
      </div>

      <div className="flex flex-col font-bold text-white text-[10px] md:text-xl font-dmsans">
        <h2>Frontend</h2>
        <h2>Developer</h2>
      </div>
    </div>
  );
}

export default Frontend;
