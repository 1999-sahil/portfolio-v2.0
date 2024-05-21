import ProjectCard from "@/components/design/ProjectCard"

function Work() {
  return (
    <div className="pt-[5rem] gridLinesBackground w-full h-full bg-[#f5f5b2f3] dark:bg-black">
      {/*<Lamp />*/}
      {/** projects grid container */}
      <div className="mx-5 py-5">
        <ProjectCard />
      </div>
    </div>
  )
}

export default Work