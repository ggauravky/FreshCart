import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"

const AppLayout = () => {
  return (
    <>
    <Banner />
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer/>
    <p>CardSidebar</p>
</>
  )
}

export default AppLayout