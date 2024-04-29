import { navigation } from "@/constants";
import { ModeToggle } from "../mode-toggle";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import MenuSvg from "../design/MenuSvg";
import { HamburgerMenu } from "../design/Header";

function Header() {
  const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(true);

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
      className={`fixed top-0 left-0 w-full z-50 border-b dark:border-n-6 border-n-2 dark:lg:border-n-8/90 lg:border-n-2/90 lg:backdrop-blur-sm
        ${openNavigation ? "dark:bg-n-8/30 bg-n-1/80" : "dark:bg-n-11 bg-n-1/80 backdrop-blur-sm"}
    `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="bg-orange-500 flex">
          {/** logo name/image */}
          <a href="" className="block xl:mr-8">
            Sahil Ahmed
          </a>
          
        </div>

        {/** navigation links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative text-2xl font-ubuntu font-semibold uppercase transition-colors px-6 py-3 md:py-8 lg:-mr-0.25 lg:text-sm
                    ${item.onlyMobile ? "lg:hidden" : ""}
                    ${item.url === pathname.hash ? "z-2 lg:text-green-600 underline underline-offset-2" : "dark:lg:text-white lg:text-[#333]"}
                `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/** theme */}
        <div className="hidden lg:block">
            <ModeToggle />
        </div>

        {/** mobile onclick navigation */}
        <div className="ml-auto lg:hidden flex items-center gap-3">
            <ModeToggle />
            <Button onClick={toggleNavigation} className="dark:bg-n-7 bg-n-2/90 dark:hover:bg-n-6 hover:bg-n-3">
                <MenuSvg openNavigation={openNavigation} />
            </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
