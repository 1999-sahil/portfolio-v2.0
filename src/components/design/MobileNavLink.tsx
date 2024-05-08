import { mobileLinkVars } from "@/constants/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MobileNavLinkProps {
  title: string;
  to: string;
}

function MobileNavLink({ title, to }: MobileNavLinkProps) {
  return (
    <motion.div
      variants={mobileLinkVars}
      className=""
    >
      <Link to={to} className="text-white font-mukta text-3xl font-semibold uppercase">{title}</Link>
    </motion.div>
  )
}

export default MobileNavLink