import { MobileNavigation, Navigation } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileNavLink from "../design/MobileNavLink";
import { containerVars, menuVars } from "@/constants/motion";
import { ArrowRight, X } from "lucide-react";
import { DiCssdeck } from "react-icons/di";
import { ModeToggle } from "../mode-toggle";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="fixed w-full min-w-[300px] min-h-[4.6rem] bg-[#003c43] dark:bg-[#121212] flex items-center justify-center drop-shadow-md border-b">
      <nav className="w-full flex items-center justify-between m-2 lg:px-10 px-3 py-3">
        {/** logo */}
        <Link to="/" className="flex items-center">
          <DiCssdeck className="w-10 h-10 text-[#e3e3e3]" />
          <h2 className="underlined text-[20px] font-roboto text-[#e3e3e3] font-bold w-fit">
            SahilA.
          </h2>
        </Link>

        {/** nav links (desktop) */}
        <div className="hidden lg:flex gap-5">
          {Navigation.map((link, index) => {
            return (
                <div key={index} className="text-[#e3e3e3] px-2 py-1">
                    <Link to="/" className="font-mukta font-medium text-base">
                        <h2 className="capitalize">{link.title}</h2>
                    </Link>
                </div>
            )
           })}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <ModeToggle />
          <Link to="/" className="text-sm font-semibold gap-2 bg-white font-mukta rounded-[0.25rem] flex items-center justify-center px-[1.12rem] py-[0.5rem] transition-all ease-out duration-75 text-[#171717]">
            My Resume
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/** menu icon and theme (mobile) */}
        <div className="lg:hidden flex items-center gap-2">
          <ModeToggle />
          <div onClick={toggleMenu} className="cursor-pointer">
            <RiMenu3Fill className="w-7 h-7 text-[#e3e3e3]" />
          </div>
        </div>
      </nav>

      {/** navlinks (mobile-dropdown) */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-screen origin-top bg-[#003c43] dark:bg-[#121212]"
          >
            {/** logo and close button container */}
            <div className="flex h-full flex-col">
              <div className="flex justify-between px-6 py-6 border-b">
                <div className="flex items-center">
                  <DiCssdeck className="text-[#e3e3e3] w-8 h-8" />
                  <h2 className="text-[#e3e3e3] underlined font-roboto font-bold text-lg">
                    SahilA.
                  </h2>
                </div>
                <div
                  onClick={toggleMenu}
                  className="text-[#e3e3e3] cursor-pointer bg-gray-800 bg-opacity-40 rounded-full p-1"
                >
                  <X className="w-8 h-8" />
                </div>
              </div>

              {/** mobile links */}
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
                        to={link.href}
                      />
                    </div>
                  );
                })}

                {/** resume-button */}
                <Link to="/" className="text-xl font-semibold gap-2 bg-white font-mukta rounded-[0.25rem] flex items-center justify-center px-[3rem] py-[0.5rem] transition-all ease-out duration-75 text-[#171717]">
                  My Resume
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;


{/**
{Navigation.map((link, index) => {
            return (
                <NavLink 
                    key={index} 
                    id={link.id} 
                    title={link.title} 
                    to={link.to} 
                />
            )
          })}
*/}