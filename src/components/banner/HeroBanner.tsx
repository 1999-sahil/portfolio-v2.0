import { ArrowRight } from "lucide-react";

function HeroBanner() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-10 pt-10 lg:pt-20 px-5">
      <div className="flex items-center gap-2 px-[1rem] lg:px-[2rem] py-[.2rem] lg:py-[.4rem] bg-gradient-to-r from-[#4f7b5b] to-[#2f535d] rounded-[2rem] w-fit">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 487.47 487.47"
          //style={{ enable-background: new "0 0 487.47 487.47" }}
          width="20px"
          height="20px"
          xmlSpace="preserve"
          className="lg:w-8 lg:h-8"
        >
          <g>
            <path
              style={{ fill:"#FFCD00" }}
              d="M9.66,211.964c-12.88,12.89-12.88,33.85,0,46.74l93.6,93.6l46.74-46.74l-93.61-93.62
		C43.5,199.074,22.55,199.084,9.66,211.964z"
            />
            <path
              style={{ fill:"#FFCD00" }}
              d="M35.58,130.254c-12.89,12.89-12.89,33.85,0,46.74l121.49,121.5c0.01,0,46.75-46.75,46.75-46.75
		L82.31,130.234C69.42,117.364,48.47,117.374,35.58,130.254z"
            />
            <path
              style={{ fill:"#FFCD00" }}
              d="M63.92,50.954c-12.89,12.89-12.89,33.86,0,46.75l146.97,146.97l46.74-46.74L110.66,50.954
		C97.78,38.074,76.81,38.074,63.92,50.954z"
            />
            <path
              style={{ fill:"#FFDA44" }}
              d="M311.45,144.114l69.19,69.19l53.81-53.81l17.55,17.54c22.87,22.88,35.47,53.3,35.47,85.65
		c0,32.35-12.6,62.76-35.47,85.64l-90.72,90.72c-22.87,22.87-53.29,35.47-85.64,35.47c-32.35,0-62.77-12.6-85.64-35.47l-86.74-86.74
		L311.45,144.114z"
            />
            <path
              style={{ fill:"#FFCD00" }}
              d="M143.21,22.624c-6.24,6.24-9.68,14.54-9.68,23.37s3.44,17.13,9.68,23.37l121.49,121.5l46.75-46.75
		L189.96,22.624C177.07,9.734,156.1,9.734,143.21,22.624z"
            />
            <path
              style={{ fill:"#FFCD00" }}
              d="M326.21,97.994c-12.89,12.88-12.89,33.85,0,46.74l61.5,61.5l46.74-46.74l-61.5-61.5
		c-6.24-6.25-14.54-9.68-23.37-9.68C340.75,88.314,332.45,91.744,326.21,97.994z"
            />
          </g>
        </svg>
        <h2 className="text-[#e3e3e3] text-sm lg:text-lg font-mukta font-medium">Hey! I am Sahil...</h2>
      </div>

      {/** hero quote */}
      <div className="mx-2 m-auto w-full md:w-[60%] lg:mt-10">
        <h2 className="text-5xl md:text-[60px] leading-[56px] md:leading-[86px] font-candal font-black text-center bg-gradient-to-r from-emerald-600 via-yellow-700 to-sky-500 text-transparent inline-block bg-clip-text">
            <span className="bg-gradient-to-l from-purple-700 via-red-500 to-pink-600 text-transparent inline-block bg-clip-text">Craft Digital Naratives</span>{" "}
            with Artistic Precision
        </h2>
      </div>

      {/** engineer */}
      <div className="lg:w-1/2 mx-2 m-auto w-full text-center text-wrap">
        <h2 className="font-roboto font-semibold lg:leading-8 lg:text-[18px] text-xs text-[#333] dark:text-[#e3e3e3]">
          A Software Engineer, Front End Developer, UI Developer & Full Stack Developer.
        </h2>
      </div>

      {/** get in touch */}
      <div>
        <button className="text-[16px] font-semibold gap-2 bg-[#333] text-[#e3e3e3] dark:bg-[#e3e3e3] dark:text-[#121212] hover:bg-opacity-90 font-mukta rounded-[0.25rem] flex items-center justify-center px-[1.12rem] py-[0.5rem]">
            Get in touch
            <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
