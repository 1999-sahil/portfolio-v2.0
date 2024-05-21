import { Construction } from "lucide-react";
import leftImage from "../../assets/project.webp";
import { GoDotFill } from "react-icons/go";
import lightImg from "../../assets/documents.png";
import darkImg from "../../assets/documents-dark.png";
import { Button } from "../ui/button";
import { FaLocationArrow, FaRegHandPointDown } from "react-icons/fa";
import { techStack } from "@/constants/svg";
import { useNavigate } from "react-router-dom";


function Projects() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/work');
  };

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
          <div className="dark:bg-[#4a2230] bg-[#6d273e] text-[#fb4b87] flex items-center gap-2 w-fit px-2 py-1 rounded-[.5rem]">
            <Construction className="w-6 h-6 md:w-8 md:h-8" />
            <h2 className="font-medium font-roboto text-[14px] md:text-[18px]">
              My Work or Projects
            </h2>
          </div>

          {/** title */}
          <div className="w-fit flex flex-col gap-6">
            <h2 className="text-[1.62rem] lg:text-[2.5rem] text-[#333] dark:text-[#e3e3e3] leading-6 font-candal font-medium">
              Imagination{" "}
              <span className="text-[#fb4b87] dark:text-[#fb4b87]">trumps</span>{" "}
              Knowledge!
            </h2>
            {/** para */}
            <div>
                <p className="text-sm lg:text-lg text-[#333] dark:text-[#e3e3e3] font-mukta font-semibold">
                Deployed web application using Front end & Back end technologies.
                Creative design using Tailwind CSS and Native CSS. Build projects
                which includes different categories like Frontend, Backend and
                Full Stack. I am also interested in learing Mobile Application.
                </p>
            </div>
          </div>

          {/** design */}
          <div className="border h-fit border-black dark:border-[#4b4b4b] bg-[#444a4e] dark:bg-[#1c1c1c] rounded-[1rem] px-3 pb-1">
            <div className="flex my-1">
              <GoDotFill className="text-red-500" />
              <GoDotFill className="text-yellow-500" />
              <GoDotFill className="text-green-500" />
            </div>
            <div className="bg-white dark:bg-[#0b0b0b] flex flex-col lg:gap-4 rounded-tl-[.5rem] rounded-tr-[.5rem] p-4">
              {/** featured project line */}
              <div className="lg:hidden w-fit ml-3 flex items-center gap-2">
                <FaLocationArrow className="text-[#fb4b87]" />
                <div className="text-[10px] font-roboto flex gap-1 border dark:text-[#e3e3e3] text-[#333] border-[#fb4b87] px-2 py-[2px] rounded-[.3rem]">
                    Featured project: {" "}
                    <h2 className="font-semibold">Notecraft</h2>
                </div>
              </div>
              <div className="flex">
                {/** featured project image (left) */}
                <div className="p-3 w-full h-full md:w-1/2 md:h-1/2">
                  <img
                    src={lightImg}
                    alt=""
                    className="border bg-[#e3e3e3] p-4 rounded-md border-[#f284a9] dark:hidden"
                  />
                  <img
                    src={darkImg}
                    alt=""
                    className="border p-4 bg-[#1c1c1c] rounded-md border-[#fb4b87] hidden dark:flex"
                  />
                </div>
                {/** right section */}
                <div className="hidden md:block w-1/2 my-3 p-2">
                  <div className="flex flex-col gap-[1rem] items-center justify-center">
                    <h2 className="font-bold font-kalam text-[#333] dark:text-[#e3e3e3]">
                      Featured Project:{" "}
                      <span className="font-mukta bg-[#6d273e] text-[#fb4b87] px-2 py-1 rounded-[.5rem]">
                        Notecraft
                      </span>
                    </h2>
                    <p className="text-sm font-roboto text-[#333] dark:text-[#e3e3e3]">
                        Notecraft is a freemium productivity and digital note-taking web application.
                        It offers folder/file based feature where you canwrite your notes using blocknote editor
                        which gives many writing features.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="flex items-center gap-1 font-jersey text-[#333] dark:text-[#e3e3e3]">
                            <FaLocationArrow className="w-5 h-5 text-[#fb4b87]" />
                            Technologies used
                        </h2>
                        {/** technologies */}
                        <div className="flex flex-wrap gap-8">
                          {techStack.map((item, index) => (
                            <div key={index} className="flex flex-col gap-1 items-center border hover:border-[#fb4b87] rounded-lg p-3">
                              <img src={item.logo} alt="" className="w-[50px] h-[50px] rounded-lg" />
                              <h2 className="text-xs font-roboto text-[#333] dark:text-[#e3e3e3] font-semibold">{item.title}</h2>
                            </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/** featured project */}
              <div className="flex flex-col gap-[1rem] items-center justify-center">
                <FaRegHandPointDown className="w-8 h-8 text-[#fb4b87]" />
                <Button onClick={handleButtonClick} variant="outline" className="w-[80%] font-semibold font-roboto">
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
