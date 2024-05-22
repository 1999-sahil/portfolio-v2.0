import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdCopyright } from "react-icons/md"
import { Link } from "react-router-dom"

function WorkFooter() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row items-center justify-center lg:justify-between">
        <div className="flex items-center gap-1 font-mukta text-sm">
            Copyright <MdCopyright /> 2024. Sahil Ahmed
        </div>
        <div className="flex items-center gap-2 font-mukta text-sm">
            <Link to="" className="flex items-center gap-1 border border-black dark:border-white rounded-full p-[2px] px-2">
                <FaGithub />
                Github
            </Link>
            <Link to="" className="flex items-center gap-1 border border-black dark:border-white rounded-full p-[2px] px-2">
                <FaLinkedin />
                Linkedin
            </Link>
        </div>
    </div>
  )
}

export default WorkFooter