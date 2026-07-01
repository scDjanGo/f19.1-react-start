import { Link } from "react-router-dom";

export default function ReactSneakersProfile() {
  return (
    <div className="min-h-[50dvh] flex flex-col items-center justify-center">
      <p className="text-[70px]">🥲</p>
      <div className="flex items-center flex-col gap-2.75 py-10 max-w-72.5">
        <p className="text-center text-[29px] font-semibold text-[#000000]">
          У вас нет заказов
        </p>
        <p className="text-center text-[16px] font-normal ">Вы нищеброд?  Оформите хотя бы один заказ.</p>
      </div>
      <Link to={`/react-sneakers`} className="flex items-center justify-center rounded-[18px]  p-4.25 bg-[#9DD458]">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7144 7L1.00007 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13L1 7L7 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>


        <p className="text-[19px] font-normal text-white">     Вернуться назад</p>
      </Link>
    </div>
  );
}
