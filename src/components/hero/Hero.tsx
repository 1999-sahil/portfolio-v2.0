
function Hero() {
    return (
        <div className="flex justify-between lg:px-10">
            {/** left */}
            <div className="md:w-1/2 pl-4 lg:pl-0 xl:pr-10 flex flex-col gap-3 items-start xl:items-center justify-center text-center">
                <h2 className="font-black font-candal text-lg md:text-3xl xl:text-5xl text-[#12372a] dark:text-gray-200">
                    developer!
                </h2>
                <p className="font-medium font-dmsans w-[290px] hidden lg:block text-[#757575] dark:text-gray-200 text-start">
                    Develop UI designs into reality through code for all screens.</p>
            </div>

            {/** right */}
            <div className="md:w-1/2 pr-9 lg:pr-0 flex flex-col gap-3 items-end xl:items-center justify-center text-center">
                <h2 className="font-black font-candal text-lg md:text-3xl xl:text-5xl text-[#12372a] dark:text-gray-200">
                    {"<code />"}
                </h2>
                <p className="font-medium hidden lg:block w-[290px] font-dmsans text-base text-[#757575] dark:text-gray-200 text-end">
                    Frontend developer who writes clean, elegant and efficient code.
                </p>
            </div>
        </div>
    )
}

export default Hero