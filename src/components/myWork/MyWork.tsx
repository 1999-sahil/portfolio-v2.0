import LightFeaturedProjectImage from "../../assets/documents.png";
import DarkFeaturedProjectImage from "../../assets/documents-dark.png";
import RightArrowImage from "../../assets/right-side-arrow.webp";

function MyWork() {

    return (
        <div className="relative mt-[650px] md:mt-[280px] lg:mt-[60px]">
            <h2 className="font-black font-candal text-5xl lg:text-4xl text-[#12372a] dark:text-[#ffd800] text-center mb-10 w-full">My Work</h2>
        
            {/** container for text and image */}
            <div className="px-8 lg:px-12 m-auto flex flex-col lg:flex-row gap-10">
                {/** text container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <h2 className="font-black mb-4 text-3xl font-dmsans bg-gradient-to-tr from-blue-700 dark:from-blue-400 to-green-500 dark:to-green-400 inline-block text-transparent bg-clip-text">
                        Imagination Trumps Knowledge!
                    </h2>
                    <span className='font-bold font-ubuntu mb-12 text-lg text-wrap whitespace-nowrap text-[#333333] dark:text-gray-100'>
                        Deployed web applications using Front end & Back end technologies. Creative design using Tailwind CSS and Native CSS.
                        Build 20+ projects which includes different categories like Frontend, Backend and Full Stack.
                        I am also interested in learning Mobile Applications.
                    </span>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <img src={RightArrowImage} alt="" className="w-[150px] h-[150px] ml-20 hidden md:flex" />
                        <h2 className='font-extrabold text-xl font-dmsans text-gray-800 dark:text-white flex flex-col gap-2 items-center'>
                            Featured Project
                            <span className='font-bold text-orange-500 font-nova text-2xl'>NoteCraft</span>
                        </h2>
                        <div>
                            <button className="text-white text-lg font-dmsans font-bold px-10 py-4 rounded-lg bg-purple-500 hover:bg-purple-600">
                                View Projects
                            </button>
                        </div>
                        <img src={RightArrowImage} alt="" className="w-[150px] h-[150px] flex md:hidden scale-y-[-1] rotate-[90deg] mt-8" />
                    </div>
                </div>

                {/** image container */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src={LightFeaturedProjectImage} alt="" className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] block dark:hidden object-contain" />
                    <img src={DarkFeaturedProjectImage} alt="" className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] hidden dark:block object-contain" />
                </div>
            </div>
            
        </div>

    )
}

export default MyWork