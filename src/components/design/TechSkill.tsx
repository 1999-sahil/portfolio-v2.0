import { techStacks } from "@/constants"
import { GrTechnology } from "react-icons/gr"

function TechSkill() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center rounded-[16px] p-5 lg:p-10 m-2">

        {/** heading */}
        <div className="dark:bg-[#32295f] bg-[#ab9bfb] text-[#5035a8] dark:text-[#ad94ff] flex items-center gap-2 w-fit px-2 py-1 rounded-[.5rem]">
            <GrTechnology className="w-6 h-6 md:w-8 md:h-8" />
            <h2 className="font-medium whitespace-nowrap font-roboto text-[18px] md:text-[22px]">
                Technical Skills
            </h2>
        </div>

        <div className="text-center mb-10">
            <h2 className="text-[1.62rem] lg:text-[2.5rem] text-[#333] dark:text-[#e3e3e3] leading-8 md:leading-[50px] font-candal font-medium">
                Technical skills which I learned from developers to become a{" "}
                <span className="bg-[#6c54bc] text-[#dcf] px-[3px]">developer</span>.
            </h2>
        </div>

        {/** tech stacks container */}
        <div className="flex flex-wrap gap-6 lg:gap-10 items-center justify-center">
            {techStacks.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                    <div>
                        <img src={item.icon} alt={item.icon} className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-md bg-blend-overlay bg-gray-200 dark:bg-[#333] p-2 border border-gray-400" />
                    </div>
                    {/*<div className="text-sm font-bold font-roboto">{item.title}</div>*/}
                </div>
            ))}
        </div>
    </div>
  )
}

export default TechSkill