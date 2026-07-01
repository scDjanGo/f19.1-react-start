import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


export default function EpisodesLayout() {
    const navigate = useNavigate()



    useEffect(() => {
      let id = setTimeout(() => {
        navigate("/error")
      }, 3_000)

      return () => {
        clearTimeout(id)
      }
    }, [])
  return (
    <div>
        <Outlet />
    </div>
  )
}
