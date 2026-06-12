function HeaderMain() {
  return (
    <header className="bg-[#191919] flex items-center justify-between gap-3 text-white py-10.75 px-12.5">
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
      </nav>
    </header>
  );
}

export default HeaderMain;
