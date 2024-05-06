import { FaArrowTrendUp } from "react-icons/fa6";
import Frontend from "../design/Frontend";
import UiDesign from "../design/UiDesign";
import UiDev from "../design/UiDev";
import WebDev from "../design/WebDev";
import ReactDev from "../design/ReactDev";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="gridBackground w-full h-screen flex flex-col py-12 justify-between">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        className="flex flex-col gap-5 h-fit"
      >
        {/** name */}
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-base md:text-lg font-dmsans bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 md:px-4 md:py-1.5 rounded-md">
            Hey, I'm Sahil...
          </h2>
        </div>

        {/** title */}
        <div className="flex items-center justify-center gap-2 text-2xl lg:text-4xl md:text-3xl font-candal font-black">
          <h2 className="">A</h2>
          <h2 className="underline">Software Engineer</h2>
        </div>

        <h2 className="text-center font-nova font-bold text-xl lgtext-3xl">
          who
        </h2>

        <div className="w-full flex items-center justify-center mx-auto">
          <h2 className="font-jersey text-4xl md:text-6xl lg:mx-5 font-black text-center m-auto text-wrap">
            <strong className="">Craft</strong>{" "}
            <strong className="text-purple-700 dark:text-purple-600">
              Digital Naratives
            </strong>{" "}
            With{" "}
            <strong className="text-emerald-600 dark:text-emerald-500">
              Artistic Precision
            </strong>
          </h2>
        </div>
      </motion.div>

      {/** design */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 2,
          //delay: 0.35,
        }}
        className="containerGridBg flex items-center justify-center mt-12 md:mt-4 xl:mt-4 relative w-[90%] lg:w-[80%] h-[40%] bg-[#fffcc1] dark:bg-[#f5f2c6] rounded-r-full">
        <div className="w-fit absolute -right-4 top-16">
          <UiDesign />
        </div>
        <div className="w-fit absolute bottom-3 left-6 md:left-20 md:-bottom-4 lg:left-[5%]">
          <Frontend />
        </div>
        <div className="w-fit absolute left-5 -top-2 md:left-20 md:-top-6 lg:left-[10%]">
          <UiDev />
        </div>
        <div className="w-fit absolute -bottom-2 right-10 lg:right-[10%] lg:-bottom-8">
          <WebDev />
        </div>
        <div className="w-fit absolute right-24 top-1 md:right-[20%] md:top-1 lg:-top-6">
          <ReactDev />
        </div>
        <div className="w-fit absolute">
          <button className="flex items-center text-gray-900 gap-1 md:gap-2 font-nova font-bold text-xl md:text-[28px] lg:text-5xl">
            Get in touch
            <FaArrowTrendUp className="w-5 h-5 md:w-8 md:h-8 lg:w-14 lg:h-14" />
          </button>
        </div>
        {/** web */}
        <div className="w-fit absolute left-12 top-14 md:left-[10%]">
          <div className="bg-black rounded-full p-1">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="25px"
              height="25px"
              className="md:w-10 md:h-10 lg:w-16 lg:h-16"
              viewBox="0 0 92 92"
              enable-background="new 0 0 92 92"
              xmlSpace="preserve"
              fill="#aef359"
            >
              <path
                id="XMLID_1666_"
                d="M46,0C20.6,0,0,20.6,0,46s20.6,46,46,46s46-20.6,46-46S71.4,0,46,0z M49.7,83.8c-0.2,0-0.4,0-0.7,0.1V62.2
	c5.2-0.1,9.9-0.2,14.2-0.5C59.4,73.4,52.3,81.2,49.7,83.8z M42.3,83.8c-2.7-2.7-9.7-10.5-13.5-22.1c4.2,0.3,9,0.5,14.2,0.5v21.7
	C42.8,83.9,42.6,83.8,42.3,83.8z M8,46c0-2.5,0.3-5,0.7-7.4c2.2-0.4,6.4-1,12.3-1.6c-0.5,2.9-0.8,5.9-0.8,9.1c0,3.2,0.3,6.2,0.7,9
	c-5.8-0.6-10.1-1.2-12.3-1.6C8.3,51,8,48.5,8,46z M26.3,46c0-3.4,0.4-6.6,1-9.6c4.6-0.3,9.8-0.6,15.7-0.6v20.4
	c-5.8-0.1-11.1-0.3-15.8-0.7C26.7,52.6,26.3,49.4,26.3,46z M49.6,8.2c2.7,2.7,9.6,10.7,13.5,22.1c-4.2-0.3-8.9-0.5-14.1-0.5V8.1
	C49.2,8.1,49.4,8.2,49.6,8.2z M43,8.1v21.7c-5.2,0.1-9.9,0.2-14.1,0.5c3.8-11.4,10.8-19.4,13.4-22.1C42.6,8.2,42.8,8.1,43,8.1z
	 M49,56.2V35.8c5.8,0.1,11.1,0.3,15.7,0.6c0.6,3,1,6.2,1,9.6c0,3.4-0.3,6.6-0.9,9.6C60.2,55.9,54.9,56.1,49,56.2z M70.9,37
	c5.9,0.6,10.1,1.2,12.3,1.6C83.7,41,84,43.5,84,46c0,2.5-0.3,5-0.7,7.4c-2.2,0.4-6.4,1-12.3,1.6c0.5-2.9,0.7-5.9,0.7-9.1
	C71.7,42.9,71.4,39.8,70.9,37z M81.4,32.2c-2.8-0.4-6.8-0.9-11.9-1.4c-2.4-8.6-6.6-15.5-10.1-20.4C69.5,14.2,77.5,22.2,81.4,32.2z
	 M32.6,10.4c-3.6,4.8-7.7,11.7-10.1,20.3c-5,0.4-9,1-11.9,1.4C14.5,22.2,22.6,14.2,32.6,10.4z M10.6,59.8c2.8,0.4,6.8,0.9,11.8,1.4
	c2.4,8.6,6.4,15.5,10,20.3C22.4,77.6,14.5,69.7,10.6,59.8z M59.6,81.5c3.6-4.8,7.6-11.6,10-20.2c5-0.4,9-1,11.8-1.4
	C77.5,69.7,69.6,77.6,59.6,81.5z"
              />
            </svg>
          </div>
          <svg
            className="w-fit absolute left-6 top-6 md:top-10 md:left-8 lg:left-10 lg:top-12 md:w-8 md:h-8 lg:w-14 lg:h-14"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 396.433 396.433"
            //style="enable-background:new 0 0 396.433 396.433;"
            xmlSpace="preserve"
            width="25px"
            height="25px"
            fill="#ff5ccd"
          >
            <path
              d="M375.345,152.655C255.313,116.943,137.343,78.915,35.325,3.875C16.849-9.716,0.701,15.563,7.566,31.636
	c48.861,114.446,90.3,231.237,127.888,349.823c6.304,19.899,34.264,20.031,40.536,0c16.386-52.336,37.152-114.487,23.508-169.351
	c56.81-5.213,113.603-11.136,170.232-17.962C392.229,191.436,399.784,159.925,375.345,152.655z"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
