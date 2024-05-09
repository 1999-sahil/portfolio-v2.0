import { expertise } from "@/constants"
import { FaLaptopCode } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import { LuLaptop2 } from "react-icons/lu"
import { MdOutlineDraw } from "react-icons/md"
import { SiReactos } from "react-icons/si"
import left from "../../assets/leftImage2.webp"
import { Smile } from "lucide-react"

function MySkills() {
    return (
        <div className="skills-section">
            <div className="skills-container flex px-4 gap-4">
                {/** left */}
                <div className="w-[10%] flex flex-col items-center">
                    {/** smiley */}
                    <div className="bg-[#226f41] text-[#6ecf97] mr-1.5 p-2 rounded-[.5rem]">
                        <Smile />
                    </div>
                    <div className="md:w-[40%]">
                        <img src={left} alt="" className="" />
                    </div>
                </div>

                {/** right */}
                <div className="w-[90%] h-full flex flex-col gap-[2rem] lg:gap-[4rem]">
                    {/** top heading */}
                    <div className="bg-[#226f41] text-[#6ecf97] flex items-center gap-2 w-fit px-2 py-1 rounded-[.5rem]">
                        <LuLaptop2 className="w-6 h-6 md:w-8 md:h-8" />
                        <h2 className="font-medium font-roboto text-[14px] md:text-[18px]">My Expertise</h2>
                    </div>

                    {/** title */}
                    <div className="w-fit">
                        <h2 className="text-[1.62rem] lg:text-[2.5rem] text-[#333] dark:text-[#e3e3e3] leading-6 font-candal font-medium">
                            Let's work <span className="text-[#2d8e56] dark:text-[#6ecf97]">better</span> together
                        </h2>
                    </div>

                    {/** design */}
                    <div className="border h-fit border-black dark:border-[#4b4b4b] bg-[#444a4e] dark:bg-[#1c1c1c] rounded-[1rem] px-3 pb-1">
                        <div className="flex my-1">
                            <GoDotFill className="text-red-500" />
                            <GoDotFill className="text-yellow-500" />
                            <GoDotFill className="text-green-500" />
                        </div>
                        <div className="bg-white dark:bg-[#0b0b0b] flex flex-col gap-4 lg:gap-10 rounded-tl-[.5rem] rounded-tr-[.5rem] p-2">
                            <div className="w-full">
                                <h2 className="text-[10px] lg:text-[20px] whitespace-nowrap text-[#333] dark:text-[#e3e3e3] mb-2 font-semibold font-jersey">
                                    My Expertise which I gain in different domains
                                </h2>
                                <p className="text-[8px] lg:text-[16px] font-mukta font-semibold text-[#333] dark:text-gray-400">
                                    What you learn is what everyone sees. Sense the buzz of learning experience.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="w-[30%] h-[50px] lg:h-[150px] bg-[#6ecf97] dark:bg-[#3d8a5d] rounded-[.5rem] flex items-center justify-center border border-[#2d8e56]">
                                    <MdOutlineDraw className="w-8 h-8 lg:w-20 lg:h-20 text-[#333]" />
                                </div>
                                <div className="w-[30%] h-[50px] lg:h-[150px] bg-[#6ecf97] dark:bg-[#3d8a5d] rounded-[.5rem] flex items-center justify-center border border-[#2d8e56]">
                                    <SiReactos className="w-8 h-8 lg:w-20 lg:h-20 text-[#333]" />
                                </div>
                                <div className="w-[30%] h-[50px] lg:h-[150px] bg-[#6ecf97] dark:bg-[#3d8a5d] rounded-[.5rem] flex items-center justify-center border border-[#2d8e56]">
                                    <FaLaptopCode className="w-8 h-8 lg:w-20 lg:h-20 text-[#333]" />                                
                                </div>
                            </div>
                        </div>
                    </div>

                    {/** skills columns */}
                    <div className="">
                        <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                            {expertise.map((item, index) => (
                                <div key={index} className="flex flex-col gap-3 dark:text-[#e3e3e3] text-[#333] w-full lg:w-[33%] lg:p-2">
                                    <div className="flex items-center gap-2">
                                        <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#2d8e56] dark:text-[#6ecf97]" />
                                        <div className="font-bold font-jersey text-[18px] lg:text-[20px]">{item.title}</div>
                                    </div>
                                    <div className="font-roboto capitalize text-sm">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills