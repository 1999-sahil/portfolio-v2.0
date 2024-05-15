import { IoMdPerson } from "react-icons/io"
import leftImage from "../../assets/about.webp"
import { GoDotFill } from "react-icons/go"
import { AboutMe, education } from "@/constants"

function About() {
    return (
        <div className="project-section">
            <div className="projects-container flex px-4 gap-4">
                {/** left */}
                <div className="w-[10%] flex justify-center">
                    <div className="md:w-[40%]">
                        <img src={leftImage} alt="" className="" />
                    </div>
                </div>

                {/** right */}
                <div className="w-[90%] h-full flex flex-col gap-[2rem] lg:gap-[3rem]">
                    {/** top heading */}
                    <div className="dark:bg-[#4b4623] bg-[#867c2f] text-[#e3ce2c] flex items-center gap-2 w-fit px-2 py-1 rounded-[.5rem]">
                        <IoMdPerson className="w-5 h-5 md:w-8 md:h-8" />
                        <h2 className="font-medium font-roboto text-[14px] md:text-[18px]">
                            About Me
                        </h2>
                    </div>

                    {/** title */}
                    <div className="w-fit">
                        <h2 className="text-[1.62rem] lg:text-[2.5rem] text-[#333] dark:text-[#e3e3e3] leading-6 font-candal font-medium">
                            Passion <span className="text-[#ad9f39] dark:text-[#e3ce2c]">fuels</span> purpose!
                        </h2>
                    </div>

                    {/** design */}
                    <div className="flex flex-col gap-5">
                        <div className="border h-fit border-black dark:border-[#4b4b4b] bg-[#444a4e] dark:bg-[#1c1c1c] rounded-[1rem] px-3 pb-1">
                            <div className="flex my-1">
                                <GoDotFill className="text-red-500" />
                                <GoDotFill className="text-yellow-500" />
                                <GoDotFill className="text-green-500" />
                            </div>
                            <div className="bg-white dark:bg-[#0b0b0b] flex flex-col gap-4 lg:gap-10 rounded-tl-[.5rem] rounded-tr-[.5rem] p-2 lg:p-4">
                                <h2 className="dark:text-[#e3e3e3] text-[#333] font-candal lg:text-xl">About Me</h2>
                                <p className="dark:text-[#e3e3e3] text-[#333] font-roboto font-medium text-sm lg:text-lg">
                                    {AboutMe}
                                </p>
                            </div>
                        </div>

                        <div className="border h-fit border-black dark:border-[#4b4b4b] bg-[#444a4e] dark:bg-[#1c1c1c] rounded-[1rem] px-3 pb-1">
                            <div className="flex my-1">
                                <GoDotFill className="text-red-500" />
                                <GoDotFill className="text-yellow-500" />
                                <GoDotFill className="text-green-500" />
                            </div>
                            <div className="bg-white dark:bg-[#0b0b0b] flex flex-col gap-4 lg:gap-10 rounded-tl-[.5rem] rounded-tr-[.5rem] p-2 lg:p-4">
                                <h2 className="dark:text-[#e3e3e3] text-[#333] font-candal lg:text-xl">My Education</h2>
                                <p>
                                    {education.map((item, index) => (
                                        <div key={index} className="flex flex-col gap-1 font-medium lg:text-lg">
                                            <div className="text-sm lg:text-xl font-roboto">
                                                Degree:{" "}
                                                <span className="font-medium">{item.course}</span>
                                            </div>
                                            <div className="text-sm lg:text-lg font-roboto">
                                                Year:{" "}
                                                <span className="font-medium">{item.batch}</span>
                                            </div>
                                            <div className="text-sm lg:text-lg font-roboto">
                                                Location:{" "}
                                                <span className="font-medium">{item.collegeAddress}</span>
                                            </div>
                                            <div className="text-sm lg:text-lg font-roboto">
                                                College:{" "}
                                                <span className="font-medium">{item.collegeName}</span>
                                            </div>
                                            <div className="text-sm lg:text-lg font-kalam underline underline-offset-2 dark:decoration-[#e3ce2c] decoration-[#ffd800]">
                                                {item.description}
                                            </div>
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About