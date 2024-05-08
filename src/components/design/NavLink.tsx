import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  to: string;
}

const NavLink = ({ id, title, to }: Props) => {
  return (
    <div className="bg-red-400">
      <Link to={to} className="text-white">
        <h2>{id}</h2>
        <h2>{title}</h2>
      </Link>
    </div>
  )
}

export default NavLink