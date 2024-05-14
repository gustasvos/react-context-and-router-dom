import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to={"/"}> Home </Link>
      <Link to={"/profile"}> Profile </Link>
      <Link to={"/menu"}> Menu </Link>
    </div>
  );
};

export default Navbar;
