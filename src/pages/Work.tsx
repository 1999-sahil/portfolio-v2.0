import ProjectCard from "@/components/design/ProjectCard"
import { TypewriterText } from "@/components/design/TypewriterText"
import WorkFooter from "@/components/design/WorkFooter"

function Work() {
  return (
    <div className="gridLinesBackground w-full h-full bg-[#f5f5b2f3] dark:bg-black">
      
      <TypewriterText />
      
      {/** projects grid container */}
      <div className="mx-6 py-5">
        <ProjectCard />
      </div>

      {/** footer */}
      <div className="pb-5 pt-10 lg:px-20">
        <WorkFooter />
      </div>
    </div>
  )
}

export default Work