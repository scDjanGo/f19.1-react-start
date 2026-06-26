
import { Outlet } from "react-router-dom"
import HeaderMain from "../components/header/HeaderMain"

export default function Homelayout() {
  return (
    <div>
        <HeaderMain />
        <Outlet />
    </div>
  )
}
