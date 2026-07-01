import { Outlet } from "react-router-dom";
import HeaderReactSneakers from "../../components/header/HeaderReactSneakers";

export default function ReactSneakersLayout() {
  return (
    <div className="p-10.75 bg-[#F7FBFE] min-h-dvh">
      <div className="py-10.75 rounded-[20px] bg-white">
        <HeaderReactSneakers />

        <div className="px-10.75">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
