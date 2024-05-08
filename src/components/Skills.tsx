import CodeBgImage from "../assets/hello-world.webp"
import MyExpertise from "./myExpertise/MyExpertise"

function Skills() {
  return (
    <div className="relative flex items-center justify-center w-full h-[80vh] my-20">
        <img src={CodeBgImage} alt="#code-bg" className="relative -bottom-[800px] md:-bottom-[470px] lg:-bottom-[220px] w-3/4 h-fit md:w-1/2 overflow-clip opacity-20" />
        <div className="absolute top-0 block w-screen lg:px-[6rem]">
          <MyExpertise />
        </div>
    </div>
  )
}

export default Skills