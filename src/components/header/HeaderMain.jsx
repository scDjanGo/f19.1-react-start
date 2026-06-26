import { Link } from "react-router-dom";

function HeaderMain() {
  return (
    <header
      className={` flex items-center justify-between gap-3  text-white py-10.75 px-4 bg-black`}
    >
      <Link to={`/`}>
        <img src="/svg/logo.svg" alt="" />
      </Link>

      <nav className="flex items-center gap-10 text-[17px] ">
        <Link to={`/`} className="hover:text-[#118DA8] duration-300">
          Home
        </Link>
        <Link to={`/episodes`} className="hover:text-[#118DA8] duration-300">
          Episodes
        </Link>
        <Link to={`/about`} className="hover:text-[#118DA8] duration-300">
          About
        </Link>
        <Link to={`/contact`} className="hover:text-[#118DA8] duration-300">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default HeaderMain;
