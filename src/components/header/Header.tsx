import { navigation } from "@/constants"
import { ModeToggle } from "../mode-toggle"
//import { useLocation } from "react-router-dom"
import { useState } from "react";
import { AlignRight } from "lucide-react";

function Header() {
    //const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleMenu = () => {
        setOpenNavigation(!openNavigation);
      };
    
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b lg:backdrop-blur-sm">
        <div className="flex items-center justify-between py-3 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <h2 className="font-bold text-xl font-candal">Sahil Ahmed</h2>
            <div className="gap-3 items-center max-md:hidden block">
                {/** menu nav */}
                <nav>
                    {navigation.map((item) => (
                        <a className="" href={item.url}>{item.title}</a>
                    ))}
                </nav>
                <ModeToggle />
            </div>
        </div>

        {/** mobile nav */}
        <div className="md:hidden block">mobile</div>
    </div>
  )
}

export default Header