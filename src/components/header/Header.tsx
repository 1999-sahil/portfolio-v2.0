
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";
import MobileNavLink from "../design/MobileNavLink";
import { MobileNavigation, Navigation } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { containerVars, menuVars } from "@/constants/motion";
import { X } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import NavLink from "../design/NavLink";

function Header() {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="dark:bg-[#ffd700]">
      <nav className="flex justify-between items-center py-6 px-2 lg:px-7 border-b">
        <div className="flex items-center ml-5 gap-1">
          <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              fill="#ffd800"
              className="bg-black p-[2px] rounded-lg lg:w-8 lg:h-8"
              viewBox="0 0 377.343 377.343"
              //style="enable-background:new 0 0 377.343 377.343;"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M301.689,53.505H75.651c-10.876,0-19.725,8.843-19.725,19.718v230.911c0,10.866,8.843,19.715,19.725,19.715h226.039
		                c10.873,0,19.722-8.843,19.722-19.715V73.223C321.406,62.348,312.562,53.505,301.689,53.505z M189.307,112.351h-38.696v-12.344
		                h-37.637v20.413l61.429,33.24c9.936,5.373,14.904,12.596,14.904,21.668v20.992c0,7.578-3.861,14.166-11.565,19.77
		                c-7.716,5.604-16.58,8.404-26.605,8.404h-38.163c-10.114,0-18.958-2.779-26.538-8.361c-7.588-5.562-11.369-12.136-11.369-19.72
		                v-12.443h38.422v12.344h37.778v-21.29l-61.048-32.257c-10.104-5.374-15.157-12.665-15.157-21.863v-20.99
		                c0-7.516,3.809-14.077,11.438-19.68c7.625-5.603,16.489-8.405,26.593-8.405h38.04c10.025,0,18.889,2.818,26.605,8.457
		                c7.705,5.637,11.565,12.214,11.565,19.727v12.339H189.307z M338.677,0H38.662C19.094,0,3.226,15.869,3.226,35.439v306.464
		                c0,19.573,15.869,35.439,35.437,35.439h300.02c19.568,0,35.436-15.866,35.436-35.439V35.439C374.117,15.869,358.25,0,338.677,0z
		                M335.381,304.122c0,18.572-15.113,33.691-33.691,33.691H75.651c-18.576,0-33.695-15.114-33.695-33.691V73.223
		                c0-18.569,15.114-33.688,33.695-33.688h226.039c18.572,0,33.691,15.114,33.691,33.688V304.122z"
                />
              </g>
          </svg>
          <h2 className="lg:flex hidden w-fit font-nova dark:text-black font-semibold text-2xl name-strike">
            SahilA.
          </h2>
        </div>

        {/** nav link desktop */}
        <div className="lg:flex hidden gap-8">
          {Navigation.map((link, index) => (
             <NavLink
             key={index}
             id={link.id}
             title={link.title}
             href={link.href}
           />
          ))}
        </div>

        <div className="flex items-center gap-4 mr-3">
          <ModeToggle />
        <div
          onClick={toggleMenu}
          className="lg:hidden cursor-pointer text-base text-black"
        >
          <RiMenu3Fill className="w-8 h-8 text-[#333] dark:text-black" />
        </div>
        </div>
      </nav>

      {/** mobile navLinks */}
      <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed z-10 left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10"
        >
          <div className="flex h-full flex-col">
            {/** logo and close button */}
            <div className="flex justify-between mb-2">
              <div className="flex gap-2 items-center">
                <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              fill="#ffd800"
              className="bg-black p-[2px] rounded-lg"
              viewBox="0 0 377.343 377.343"
              //style="enable-background:new 0 0 377.343 377.343;"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M301.689,53.505H75.651c-10.876,0-19.725,8.843-19.725,19.718v230.911c0,10.866,8.843,19.715,19.725,19.715h226.039
		                c10.873,0,19.722-8.843,19.722-19.715V73.223C321.406,62.348,312.562,53.505,301.689,53.505z M189.307,112.351h-38.696v-12.344
		                h-37.637v20.413l61.429,33.24c9.936,5.373,14.904,12.596,14.904,21.668v20.992c0,7.578-3.861,14.166-11.565,19.77
		                c-7.716,5.604-16.58,8.404-26.605,8.404h-38.163c-10.114,0-18.958-2.779-26.538-8.361c-7.588-5.562-11.369-12.136-11.369-19.72
		                v-12.443h38.422v12.344h37.778v-21.29l-61.048-32.257c-10.104-5.374-15.157-12.665-15.157-21.863v-20.99
		                c0-7.516,3.809-14.077,11.438-19.68c7.625-5.603,16.489-8.405,26.593-8.405h38.04c10.025,0,18.889,2.818,26.605,8.457
		                c7.705,5.637,11.565,12.214,11.565,19.727v12.339H189.307z M338.677,0H38.662C19.094,0,3.226,15.869,3.226,35.439v306.464
		                c0,19.573,15.869,35.439,35.437,35.439h300.02c19.568,0,35.436-15.866,35.436-35.439V35.439C374.117,15.869,358.25,0,338.677,0z
		                M335.381,304.122c0,18.572-15.113,33.691-33.691,33.691H75.651c-18.576,0-33.695-15.114-33.695-33.691V73.223
		                c0-18.569,15.114-33.688,33.695-33.688h226.039c18.572,0,33.691,15.114,33.691,33.688V304.122z"
                />
              </g>
                </svg>
                <h2 className="font-bold font-dmsans text-xl">Sahil A.</h2>
              </div>
              <div className="cursor-pointer bg-white bg-opacity-35 p-2 rounded-full" onClick={toggleMenu}>
                <X className="w-8 h-8" />
              </div>
            </div>

            {/** nav links */}
            <motion.div 
              variants={containerVars} 
              initial="initial"
              animate="open"
              exit="initial"
              onClick={toggleMenu}
              className="flex flex-col h-full justify-center items-center gap-5"
            >
              {MobileNavigation.map((link, index) => {
                return (
                  <div className="overflow-hidden">
                    <MobileNavLink 
                      key={index} 
                      title={link.title} 
                      href={link.href}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
