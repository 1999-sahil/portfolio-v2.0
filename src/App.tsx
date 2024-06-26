import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import HeroBanner from "./components/banner/HeroBanner";
import { GoDotFill } from "react-icons/go";
import UiDev from "./components/design/UiDev";
import Frontend from "./components/design/Frontend";
import UiDesign from "./components/design/UiDesign";
import ReactDev from "./components/design/ReactDev";
import WebDev from "./components/design/WebDev";
import MySkills from "./components/myExpertise/MySkills";
import Projects from "./components/myWork/Projects";
import About from "./components/about/About";
import TechSkill from "./components/design/TechSkill";
import LightSVG from "./assets/lightArrow.svg";
import DarkSVG from "./assets/darkArrow.svg";
import Footer from "./components/footer/Footer";
import CardRevealEffect from "./components/cardReveal/CardRevealEffect";
import { FaCodeBranch } from "react-icons/fa";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <main
      className="overflow-hidden pt-[5rem] bg-[#f5f5b2] dark:bg-black gridLinesBackground"
      ref={ref}
    >
      {/** hero section */}
      <section className="w-full h-screen">
        <HeroBanner />
      </section>

      {/** design */}
      <section className="w-[95%] h-[300px] lg:h-[500px] mx-auto p-1 bg-[#444a4e] rounded-2xl">
        <div className="flex items-center justify-between mb-1">
          <div className="flex">
            <GoDotFill className="text-red-500" />
            <GoDotFill className="text-yellow-500" />
            <GoDotFill className="text-green-500" />
          </div>
          <div className="text-[10px] bg-[#e3e3e3] dark:bg-[#333] dark:text-[#e3e3e3] mr-2 rounded-md px-1 font-medium font-roboto">
            Close
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-[#121212] w-full h-[93%] lg:h-[96%] rounded-xl relative m-auto">
          <div className="absolute w-full h-full">
            <div className="absolute top-[5%] left-[5%]">
              <UiDev />
            </div>
            <div className="absolute top-[40%] left-[40%]">
              <Frontend />
            </div>
            <div className=" absolute right-[5%] top-[5%]">
              <UiDesign />
            </div>
            <div className="absolute bottom-[20%] left-[10%]">
              <ReactDev />
            </div>
            <div className="absolute bottom-[10%] right-[5%]">
              <WebDev />
            </div>
            <div className="absolute top-[30%] left-[15%]">
              <svg
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="30px"
                height="30px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                className="bg-green-500 rounded-full p-[2px] lg:w-12 lg:h-12"
              >
                <g>
                  <path
                    className="st0"
                    d="M463.203,105.688c-3.047-4.25-6.234-8.406-9.609-12.484C406.641,36.313,335.531,0,256,0
		C176.484,0,105.359,36.313,58.406,93.203c-3.375,4.078-6.563,8.234-9.594,12.484C18.078,147.922,0,199.844,0,256
		c0,56.313,18.156,108.484,49.031,150.719c3.125,4.328,6.406,8.563,9.844,12.656C105.844,475.922,176.719,512,256,512
		c79.688,0,150.813-36.406,197.75-93.438c3.453-4.078,6.734-8.313,9.781-12.641C494.078,363.766,512,312,512,256
		C512,199.844,493.922,147.922,463.203,105.688z M471.688,247.969H385.75c-0.625-32.563-5.031-63.438-12.5-91.219
		c21.156-7.219,40.594-16.359,57.781-27.063C455.328,163.156,470.047,203.938,471.688,247.969z M263.984,41.906
		c37.375,5.188,70.438,46.109,89.297,104.281c-27.469,7.828-57.594,12.406-89.297,13.094V41.906z M247.984,41.906v117.375
		c-31.703-0.688-61.828-5.266-89.297-13.094C177.547,88.016,210.609,47.094,247.984,41.906z M247.984,175.266v72.703H142.219
		c0.625-30.766,4.891-60.094,11.984-86.516C183.094,169.75,214.703,174.594,247.984,175.266z M247.984,263.969v72.703
		c-33.234,0.797-64.828,5.734-93.703,14.094c-7.141-26.484-11.422-55.922-12.063-86.797H247.984z M247.984,352.656v117.375
		c-37.297-5.172-70.313-45.938-89.188-103.938C186.625,358.031,216.734,353.453,247.984,352.656z M263.984,470.031V352.625
		c31.703,0.563,61.859,5.094,89.359,12.875C334.5,423.813,301.406,464.844,263.984,470.031z M263.984,336.625v-72.656H369.75
		c-0.625,30.625-4.859,59.859-11.891,86.188C328.938,341.938,297.281,337.188,263.984,336.625z M263.984,247.969v-72.703
		c33.281-0.672,64.891-5.5,93.797-13.797c7.078,26.406,11.344,55.75,11.969,86.5H263.984z M421.281,117.203
		c-15.656,9.547-33.344,17.703-52.563,24.266c-13.219-40.938-33.266-74-57.406-94.219
		C354.906,58.797,393.156,83.609,421.281,117.203z M200.656,47.25c-24.141,20.234-44.188,53.281-57.406,94.203
		c-19.188-6.563-36.891-14.703-52.531-24.25C118.844,83.625,157.063,58.813,200.656,47.25z M80.969,129.688
		c17.188,10.703,36.609,19.828,57.75,27.063c-7.469,27.781-11.875,58.656-12.5,91.219H40.313
		C41.953,203.938,56.688,163.156,80.969,129.688z M40.313,263.969h85.906c0.625,32.688,5.063,63.688,12.594,91.563
		c-21.094,7.25-40.469,16.359-57.609,27.031C56.75,348.984,41.938,308.109,40.313,263.969z M91.125,395.203
		c15.875-9.703,33.484-17.797,52.281-24.297c13.219,40.781,33.25,73.703,57.344,93.844
		C157.344,453.25,119.219,428.594,91.125,395.203z M311.219,464.75c24.25-20.25,44.359-53.438,57.578-94.547
		c19.281,6.547,37.047,14.719,52.734,24.281C393.313,428.234,354.938,453.156,311.219,464.75z M431.359,381.922
		c-17.266-10.734-36.781-19.859-58.016-27.063c7.406-27.703,11.781-58.453,12.406-90.891h85.938
		C470.078,307.859,455.5,348.438,431.359,381.922z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/** my expertise */}
      <section className="w-full h-full my-28">
        <MySkills />
      </section>

      {/** projects section */}
      <section className="w-full h-full mb-20">
        <Projects />
      </section>

      {/** about me section */}
      <section className="w-full h-full mb-20">
        <About />
      </section>

      {/** skills section */}
      <section className="w-full h-full mb-20">
        <TechSkill />
      </section>

      {/** my approach card */}
      <section className="w-full h-full">
        <div className="flex flex-col items-center justify-center m-2">
          <h2 className="flex items-center gap-2 mb-12  text-orange-600 bg-[#f9bf54] dark:bg-[#f5deb3] font-medium whitespace-nowrap font-roboto text-[18px] md:text-[22px] w-fit px-2 py-1 rounded-[.5rem] text-center">
            <FaCodeBranch />
            My Approach
          </h2>
          <h2 className="text-center px-1 text-[1.62rem] lg:text-[2.5rem] text-[#333] dark:text-[#e3e3e3] leading-8 md:leading-[50px] font-candal font-medium">
            Plug and <span className="bg-orange-500 text-[#f5deb3] px-1">play</span> with your workflow
            </h2>
        </div>
        <div>
          <CardRevealEffect />
        </div>
      </section>

      {/** arrow */}
      <section className="w-full h-full mb-20 flex items-center justify-center">
        <div className="flex dark:hidden">
          <img src={LightSVG} alt="" />
        </div>
        <div className="hidden dark:flex">
          <img src={DarkSVG} alt="" />
        </div>
      </section>

      {/** footer */}
      <section className="w-full h-full">
        <Footer />
      </section>

    </main>
  );
}

export default App;

