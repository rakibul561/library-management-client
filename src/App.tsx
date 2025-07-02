import { Outlet } from "react-router"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

function App() {


  return (
     <div> 
      <Navbar/>
       <Outlet/>
      
       <Footer/>
     </div>
  )
}

export default App
