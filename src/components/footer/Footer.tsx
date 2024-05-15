import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { GoArrowRight } from "react-icons/go"
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
            <div className="flex flex-col gap-2 lg:hidden">
                <div className="border-t border-b py-8 border-[#003c43] w-full flex flex-col items-center justify-center gap-5">
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

                <div className="border-t border-b border-[#003c43] py-8 w-full flex items-center justify-center">
                    <div className="border-2 border-[#003c43] border-dashed rounded-md -rotate-6 hover:rotate-6 hover:bg-[#e3e3e3] p-2 bg-yellow-300">
                        <img src={Gmail} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <div className="border-2 border-[#003c43] border-solid rounded-md rotate-12 hover:rotate-6 hover:bg-[#e3e3e3] p-2 bg-pink-300">
                        <img src={Linkedin} alt="" className="w-[80px] h-[80px]" />
                    </div>
                    <div className="border-2 border-[#003c43] border-dashed rounded-md -rotate-6 hover:rotate-6 hover:bg-[#e3e3e3] p-2 bg-[#757575]">
                        <img src={Github} alt="" className="w-[80px] h-[80px]" />
                    </div>
                </div>

                {/** copyright text */}
                <div className="flex flex-col gap-4">
                    <div className="">
                        <Link to="" className="flex items-center font-mukta text-lg font-bold gap-1 underline">
                            <FaGithub />
                            Github
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-lg font-bold gap-1 underline">
                            <FaLinkedin />
                            Linkedin
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-lg font-bold gap-1 underline">
                            <FaSquareXTwitter />
                            Twitter
                        </Link>
                        <Link to="" className="flex items-center font-mukta text-lg font-bold gap-1 underline">
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
            <div className="hidden lg:block"></div>
        </footer>
    )
}

export default Footer