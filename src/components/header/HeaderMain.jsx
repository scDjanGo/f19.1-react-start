import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

function HeaderMain() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeState = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  return (
    <header className={` flex items-center justify-between gap-3  text-white py-10.75 px-4 ${theme === "light" ? "bg-green-400" : "bg-black"} `}>
      <img src="/svg/logo.svg" alt="" />

      <nav className="flex items-center gap-10 text-[17px] ">
        <a href="#" className="hover:text-[#118DA8] duration-300">
          Home
        </a>
        <a href="#" className="hover:text-[#118DA8] duration-300">
          Episodes
        </a>
        <a href="#" className="hover:text-[#118DA8] duration-300">
          About
        </a>
        <a href="#" className="hover:text-[#118DA8] duration-300">
          Contact
        </a>

        <button onClick={handleThemeState} className="border rounded-xl p-2">
          {theme === "light" ? "Светлая тема" : "Тёмная тема"}
        </button>
      </nav>
    </header>
  );
}

export default HeaderMain;
