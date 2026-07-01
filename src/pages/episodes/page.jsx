import { Link } from "react-router-dom";

let pages = [1, 2, 3, 4, 5];

export default function EpisodesPage() {
  return (
    <div>
      {pages.map((item) => (
        <Link to={`${item}`} key={item} className="border border-black p-3 ">
          {item}
        </Link>
      ))}
    </div>
  );
}
