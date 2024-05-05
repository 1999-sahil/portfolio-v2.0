import { Link } from "react-router-dom";

interface Link {
    id: string;
    title: string;
    href: string;
}

function NavLink({ id, title, href }: Link) {
  return (
    <div>
        <Link to={href} className="">
            <h2 className="text-end font-bold font-dmsans text-[#333] dark:text-black text-xs">{id}</h2>
            <h2 className="font-nova font-semibold capitalize text-[#333] dark:text-black text-base">{title}</h2>
        </Link>
    </div>
  )
}

export default NavLink