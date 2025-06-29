import logo from "@/assets/logo.png"
import { Link } from "react-router"
import { ModeToggle } from "../mode-loggler"

export const Navbar = () => {
  return (
    <>
        <nav className="max-w-6xl mx-auto h-16 flex items-center gap-3 px-5 justify-between">
            <div className=" flex items-center">
                <img src={logo} alt="logo" className="w-[52px]"/>
                <div className=" items-center text-2xl">
                    <span className="font-bold text-2xl ml-2">Task</span>Master
                </div>
            </div>
            <div className="flex items-center">
              <Link to={"/tasks"} className=" mr-6 text-lg">Tasks</Link>
              <Link to={"/users"} className=" text-lg">Users</Link>
            </div>
            <ModeToggle/>
        </nav>
    </>
  )
}
