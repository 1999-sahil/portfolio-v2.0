import { FiMonitor } from "react-icons/fi"
import { MdDraw } from "react-icons/md"
import { SiReact } from "react-icons/si"
import { TbMinusVertical } from "react-icons/tb"
import FourthBlockImg from "../../assets/block4.svg"

function MyExpertise() {
    return (
        <div className="w-full">
            <h2 className="font-black font-candal text-5xl lg:text-4xl text-[#12372a] dark:text-yellow-400 text-center mb-16 w-full px-2">My Expertise</h2>

            {/** blocks */}
            <div className="grid w-full h-auto px-[1rem] lg:px-0 lg:grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] md:gap-[2px]">
                {/** first block */}
                <div className="px-6 py-6 lg:border-t-[3px] lg:border-l-[3px] lg:border-b-[3px] border-[3px] border-solid border-[#333] dark:border-gray-100 w-full">
                    <div className="flex flex-col gap-4 w-fit">
                        <div className="flex gap-3">
                            <FiMonitor className="w-10 h-10 mt-2 text-[#333] dark:text-gray-100" />
                            <span className="flex flex-col text-[24px] font-candal text-[#333] dark:text-gray-100 font-black">
                                <h2 className="strike-through w-fit">Software</h2>
                                Development
                            </span>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center font-dmsans font-bold text-[#333] dark:text-gray-400 opacity-50">
                                <h2>{"<h3>"}</h2>
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical className="block lg:hidden" />
                                <h2>{"</h3>"}</h2>
                            </div>
                            <div className="w-fit h-auto md:px-2">
                                <p className="text-[18px] md:text-[20px] lg:text-[16px] font-semibold font-dmsans text-wrap whitespace-nowrap">
                                    Experienced in both Object Oriented Programming:
                                    Java, JavaScript, TypeScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/** second block */}
                <div className="px-8 py-6 lg:border-t-[3px] lg:border-l-[3px] lg:border-b-[3px] border-[3px] border-solid border-[#333] dark:border-gray-100 w-full">
                    <div className="flex flex-col gap-4 w-fit">
                        <div className="flex gap-3">
                            <SiReact className="w-10 h-10 mt-2 text-[#333] dark:text-gray-100" />
                            <span className="flex flex-col text-[24px] font-candal text-[#333] dark:text-gray-100 font-black">
                                <h2 className="strike2-through w-fit">Frontend Dev</h2>
                                ReactJS, NextJS
                            </span>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center font-dmsans font-bold text-[#333] dark:text-gray-400 opacity-50">
                                <h2>{"<h3>"}</h2>
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical className="block lg:hidden" />
                                <h2>{"</h3>"}</h2>
                            </div>
                            <div className="w-fit h-auto md:px-2">
                                <p className="text-[18px] md:text-[20px] lg:text-[16px] font-semibold font-dmsans text-wrap whitespace-nowrap">
                                    Passionate about UI/UX.
                                    Development experience in HTML, CSS, JS, React and
                                    NextJS frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/** third block */}
                <div className="px-8 py-6 lg:border-t-[3px] lg:border-l-[3px] lg:border-b-[3px] border-[3px] border-solid border-[#333] dark:border-gray-100 w-full">
                    <div className="flex flex-col gap-4 w-fit">
                        <div className="flex gap-3">
                            <MdDraw className="w-10 h-10 mt-2 text-[#333] dark:text-gray-100" />
                            <span className="flex flex-col text-[24px] font-candal text-[#333] dark:text-gray-100 font-black">
                                <h2 className="strike3-through w-fit">UI Developer</h2>
                                User Interfaces
                            </span>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center font-dmsans font-bold text-[#333] dark:text-gray-400 opacity-50">
                                <h2>{"<h3>"}</h2>
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical />
                                <TbMinusVertical className="block lg:hidden" />
                                <h2>{"</h3>"}</h2>
                            </div>
                            <div className="w-fit h-auto md:px-2">
                                <h2 className="text-[18px] md:text-[20px] lg:text-[16px] font-semibold font-dmsans whitespace-nowrap text-wrap">
                                    Hands-on experience developing attractive user interfaces using
                                    Bootstrap, Tailwind CSS, Shadcn UI, Material UI.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/** fourth block */}
                <div className="w-full hidden lg:hidden md:block px-8 py-6">
                    <img src={FourthBlockImg} alt="" className="w-full h-[250px] bg-yellow-300 dark:bg-yellow-400 rounded-lg p-5" />
                </div>
            </div>
        </div>
    )
}

export default MyExpertise
