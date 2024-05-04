import { navigation } from "@/constants";
import { ModeToggle } from "../mode-toggle";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import MenuSvg from "../design/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { RiMenu2Fill } from "react-icons/ri";

function Header() {

  const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b lg:backdrop-blur-sm
        ${
          openNavigation
            ? "dark:bg-n-8/30 bg-n-1/80"
            : "dark:bg-n-11 bg-n-1/80 backdrop-blur-sm"
        }
    `}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4 py-5">
        <div className="flex items-center">
          {/** nav icon */}
          <div className="block lg:hidden mr-2 bg-gray-100 hover:bg-opacity-90 rounded-full p-3">
            <RiMenu2Fill className="h-6 w-6 text-green-800" />

            
          </div>
          {/** logo name/image */}
          <a
            href="#"
            className="flex items-center gap-2 p-1"
          >
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
              className="bg-[#1c1a1a] p-[1px] rounded-lg md:w-12 md:h-12"
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
          </a>
        </div>

        {/** theme and nav menu icon */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;

{/** navigation links */}
{/**
<nav
className={`${
  openNavigation ? "flex" : "hidden"
} fixed top-[4.5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
>
<div className="relative z-2 flex flex-col bg-pink-400 items-center justify-center m-auto lg:flex-row py-8">
  {navigation.map((item) => (
    <a
      key={item.id}
      href={item.url}
      onClick={handleClick}
      className={`block relative text-2xl font-dmsans font-bold capitalize transition-colors px-6 py-3 lg:px-3.5 lg:py-1.5 lg:mx-3 lg:text-sm hover:bg-gray-200 rounded-full
          ${item.onlyMobile ? "lg:hidden" : ""}
          ${
            item.url === pathname.hash
              ? "z-2 lg:text-green-600 bg-green-100 hover:bg-green-100 rounded-full"
              : "dark:lg:text-white lg:text-[#333]"
          }
      `}
    >
      {item.title}
    </a>
  ))}
</div>
<HamburgerMenu />
</nav>
*/}
