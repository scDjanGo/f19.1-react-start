
import { Outlet, useNavigate } from "react-router-dom"
import HeaderMain from "../components/header/HeaderMain"

export default function Homelayout() {
  const pathname = useNavigate()




  return (
    <div>
        <HeaderMain />
        <Outlet />
    </div>
  )
}
