import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
    <p>Banner</p>
    <p>navbar</p>
    <main className="min-h-screen">
      <Outlet />
    </main>
    <p>Footer</p>
    <p>CardSidebar</p>
</>
  )
}

export default AppLayout