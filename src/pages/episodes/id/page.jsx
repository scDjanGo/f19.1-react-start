import { Outlet, useParams } from "react-router-dom";


export default function EpisodesCurrentPage() {
    const {id} = useParams()


    console.log(id);
    
  return (
    <div>
        EpisodesCurrentPage
    </div>
  )
}
