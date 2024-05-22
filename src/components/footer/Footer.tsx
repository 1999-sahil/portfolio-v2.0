import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { GoArrowRight, GoArrowUpRight } from "react-icons/go"
import { RiCopyrightLine } from "react-icons/ri"
import { SiNotion } from "react-icons/si"
import { Link } from "react-router-dom"
import Gmail from "../../assets/gmail.svg"
import Linkedin from "../../assets/linkedin.svg"
import Github from "../../assets/github-footer.svg"

function Footer() {
    return (
        <footer>
            {/** small devices */}
            <div className="flex flex-col gap-2 lg:hidden mx-3">
                <div className="border-t border-b py-8 border-[#003c43] dark:border-[#757575] w-full flex flex-col items-center justify-center gap-5">
                    {/** text */}
                    <div className="">
                        <h2 className="text-lg font-roboto font-medium">Let&apos;s connect for discussion</h2>
                    </div>

                    {/** button */}
                    <div className="flex gap-5">
                        <Link to="" className="flex items-center gap-2 text-sm font-roboto font-medium bg-[#003c43] text-white px-5 py-2 rounded-full">
                            Email
                            <GoArrowRight size={16} />
                        </Link>
                        <Link to="" className="text-sm font-roboto font-medium bg-[#e3e3e3] border border-[#003c43] text-[#003c43] px-5 py-2 rounded-full">Linkedin</Link>
                    </div>
                </div>

                <div className="border-t border-b border-[#003c43] dark:border-[#757575] py-8 w-full flex items-center justify-center">
                    <div className="border-2 border-[#003c43] dark:border-red-500 border-dashed rounded-md -rotate-6 hover:rotate-6 hover:bg-[#e3e3e3] p-2 bg-yellow-300">
                        <img src={Gmail} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <div className="border-2 border-[#003c43] dark:border-white border-solid rounded-md rotate-12 hover:rotate-6 hover:bg-[#e3e3e3] p-2 bg-[#41c9e2]">
                        <img src={Linkedin} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <div className="border-2 border-[#003c43] dark:border-white border-dashed rounded-md -rotate-6 hover:rotate-6 hover:bg-[#e3e3e3] p-2 bg-[#757575]">
                        <img src={Github} alt="" className="w-[80px] h-[80px]" />
                    </div>
                </div>

                {/** copyright text */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex gap-6">
                        <Link to="" className="flex items-center font-mukta text-base font-medium gap-1">
                            <FaGithub />
                            Github
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-base font-medium gap-1">
                            <FaLinkedin />
                            Linkedin
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-base font-medium gap-1">
                            <FaSquareXTwitter />
                            Twitter
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-base font-medium gap-1">
                            <SiNotion />
                            Notion
                        </Link>
                    </div>
                    <div className="flex items-center gap-[2px]">
                        <RiCopyrightLine />
                        <h2 className="text-sm font-mukta font-bold">All Rights Reserved. @2024</h2>
                    </div>
                </div>
            </div>

            {/** large devices */}
            <div className="hidden lg:block mx-5">
                <div className="border-t border-b border-[#003c43] dark:border-[#757575] w-full flex items-center justify-center py-8">
                    {/** left */}
                    <div className="border-r-2 border-[#003c43] dark:border-[#757575] w-1/2 py-8">
                        <div className="flex flex-col items-center justify-center gap-6">
                            <h2 className="text-xl font-roboto font-medium text-[#333] dark:text-[#e3e3e3]">Let&apos;s connect for discussion</h2>
                            <div className="flex items-center gap-8 font-medium font-mukta">
                                <Link to="" className="bg-[#003c43] flex items-center gap-1 w-fit px-6 py-2 rounded-full text-[#e3e3e3]">
                                    Email
                                    <GoArrowUpRight />
                                </Link>
                                <Link to="" className="border border-[#003c43] rounded-full px-5 py-2 bg-[#e3e3e3] text-[#003c43]">Linkedin</Link>
                            </div>
                        </div>
                    </div>

                    {/** right */}
                    <div className="w-1/2 py-8 flex items-center justify-center">
                        <div className="flex">
                            <div className="border-2 border-[#003c43] dark:border-red-500 w-fit border-dashed rounded-md -rotate-6 hover:rotate-6 hover:bg-yellow-400 p-2 bg-yellow-300 dark:bg-yellow-400">
                                <img src={Gmail} alt="" className="w-[100px] h-[100px]" />
                            </div>
                            <div className="border-2 border-[#003c43] dark:border-blue-500 w-fit border-solid rounded-md rotate-12 hover:-rotate-6 hover:bg-white p-2 bg-gray-200">
                                <img src={Linkedin} alt="" className="w-[100px] h-[100px]" />
                            </div>
                            <div className="border-2 border-[#003c43] dark:border-white w-fit border-dashed rounded-md -rotate-12 hover:rotate-6 hover:bg-white p-2 bg-[#757575]">
                                <img src={Github} alt="" className="w-[100px] h-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-5 mt-4 mb-2 flex justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg text-center font-kristi bg-black dark:border dark:border-white px-5 py-[1px] rounded-full text-white">--------- Sahil Ahmed ---------</h2>
                        <h2 className="flex text-sm gap-[2px] font-mukta font-semibold">
                            <RiCopyrightLine />
                            All Rights Reserves. @2024
                        </h2>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                        <Link to={"https://github.com/1999-sahil"} className="flex items-center font-mukta text-base font-medium gap-1">
                            <FaGithub />
                            Github
                        </Link>
                        <Link to={"www.linkedin.com/in/sahil-ahmed-86222718a"} className="flex items-center font-mukta text-base font-medium gap-1">
                            <FaLinkedin />
                            Linkedin
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-base font-medium gap-1">
                            <FaSquareXTwitter />
                            Twitter
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-base font-medium gap-1">
                            <SiNotion />
                            Notion
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
