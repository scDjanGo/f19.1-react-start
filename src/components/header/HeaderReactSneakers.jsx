import { Link } from "react-router-dom";

const LINKS = [
  { id: 1, link: "#", label: "1205 руб.", icon: "/svg/cart.svg" },
  { id: 2, link: "favorites", label: "Закладки", icon: "/svg/favorites.svg" },
  { id: 3, link: "profile", label: "Профиль", icon: "/svg/profile.svg" },
];

export default function HeaderReactSneakers() {
  return (
    <div className="py-11 px-10.75 flex items-center ga-3 justify-between border-b border-[#EAEAEA]">
      <Link to={`/`} className="flex items-center gap-4">
        <img src="/img/react-sneakers.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-[#000000]">
            REACT SNEAKERS
          </h1>
          <p className="text-[17px] text-[#9D9D9D]">Магазин лучших кроссовок</p>
        </div>
      </Link>

      <nav className="flex items-center gap-8">
        {LINKS.map((item) => (
          <Link key={item.id} to={item.link} className="flex items-center gap-2 text-[#5C5C5C] text-[14px]">
            <img src={item.icon} alt="" />
            <p>{item.label}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
