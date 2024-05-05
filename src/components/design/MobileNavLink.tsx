import { mobileLinkVars } from "@/constants/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavLink {
    title: string;
    href: string;
}

function MobileNavLink({ title, href }: NavLink) {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-3xl uppercase font-candal font-bold"
    >
      <Link to={href} className="">{title}</Link>
    </motion.div>
  )
}

export default MobileNavLink