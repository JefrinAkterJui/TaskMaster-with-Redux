// import { Button } from "./components/ui/button"

import { Outlet } from "react-router"
import { Navbar } from "./components/layout/Navbar"


function App() {

  return (
    <>
      
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
