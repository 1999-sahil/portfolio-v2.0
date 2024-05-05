import { Copyright, HeartIcon, Mail, PhoneCall } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiNotionFill } from 'react-icons/ri';

function Footer() {
    return (
        <footer className="mt-20">
            {/** title */}
            <div className="flex items-center justify-center mb-[3rem] gap-2">
                <div className="shake">
                    <PhoneCall className="shake-icon w-12 h-12 lg:w-16 lg:h-16 -rotate-12 text-green-600 dark:text-white drop-shadow-lg" />
                </div>
                <h2 className="font-black font-candal rotate-6 text-3xl lg:text-4xl text-[#12372a] dark:text-[#ffd800]">Connect With Me</h2>
            </div>

            {/** social icons */}
            <div className="w-full flex flex-col lg:flex-row">
                <div className="github-icon flex items-center justify-between cursor-pointer h-[4.5rem] lg:h-[9rem] w-full lg:w-1/4 bg-[#333] text-[#d6d6d6] px-[2.5rem] lg:px-[1.5rem] hover:opacity-80">
                    <h2 className="text-4xl lg:text-5xl font-nova">Github</h2>
                    <FaGithub className="h-8 w-8 lg:h-11 lg:w-11" />
                </div>
                <div className="linkedin-icon flex items-center justify-between h-[4.5rem] lg:h-[9rem] w-full lg:w-1/4 cursor-pointer bg-[#0077b5] text-[#cce4f0] px-[2.5rem] lg:px-[1.5rem] hover:opacity-80">
                    <h2 className="text-4xl lg:text-5xl font-nova">Linkedin</h2>
                    <FaLinkedin className="h-8 w-8 lg:h-11 lg:w-11" />
                </div>
                <div className="twitter-icon flex items-center justify-between h-[4.5rem] lg:h-[9rem] w-full lg:w-1/4 cursor-pointer bg-[#1da1f2] text-[#d2ecfc] px-[2.5rem] lg:px-[1.5rem] hover:opacity-80">
                    <h2 className="text-4xl lg:text-5xl font-nova">Twitter</h2>
                    <FaTwitter className="h-8 w-8 lg:h-11 lg:w-11" />
                </div>
                <div className="notion-icon flex items-center justify-between h-[4.5rem] lg:h-[9rem] w-full lg:w-1/4 cursor-pointer bg-[#e46e2e] text-[#d6d6d6] px-[2.5rem] lg:px-[1.5rem] hover:opacity-80">
                    <h2 className="text-4xl lg:text-5xl font-nova">Notion</h2>
                    <RiNotionFill className="h-8 w-8 lg:h-11 lg:w-11" />
                </div>
            </div>

            {/** mail */}
            <div className="bg-green-600 hover:bg-green-700 cursor-pointer w-full h-[2.5rem] lg:h-[3.5rem] flex items-center justify-center gap-3 text-[#d6d6d6]">
                <h2 className="text-xl lg:text-2xl font-nova font-bold">Send me a mail!</h2>
                <Mail className="h-6 w-6 lg:h-8 lg:w-8 bg-green-500 p-1 rounded-md text-gray-200" />
            </div>

            {/** copyright */}
            <div className="w-full flex items-center justify-center py-8 dark:bg-gray-900">
                <span className="flex text-[8px] lg:text-base gap-1 lg:gap-2 font-bold">
                    Build From Scratch With
                    <HeartIcon className="text-pink-700 h-4 w-4" />
                    <strong>Sahil Ahmed</strong>
                    <Copyright className="dark:text-gray-400 text-gray-600 h-4 w-4" />
                    Copyright @2024. All Rights Reserved.
                </span>
            </div>

            {/** lowest gradient div */}
            <div className="w-full h-[2px] bg-gradient-to-l from-orange-600 via-pink-600 to-yellow-400"></div>
        </footer>
    )
}

export default Footer