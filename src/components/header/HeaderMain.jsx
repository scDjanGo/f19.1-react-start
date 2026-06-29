import { Link, useNavigate } from "react-router-dom";

function HeaderMain() {
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault()

    const {path} = Object.fromEntries(new FormData(e.currentTarget).entries())
    
    
    navigate(`/${path}`)
    

    e.currentTarget.reset()


  }


  return (
    <header
      className={` flex items-center justify-between gap-3  text-white py-10.75 px-4 bg-black`}
    >
      <Link to={`/`}>
        <img src="/svg/logo.svg" alt="" />
      </Link>



      <form className="flex gap-3" onSubmit={handleSubmit}>
        <label htmlFor="path">
          <input type="text" id="path" name="path" placeholder="Write page" required className="border rounded-xl p-[6px_12px] text-white" />
        </label>
        <button className="border rounded-xl p-[6px_12px] text-white">GET</button>
      </form>

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
