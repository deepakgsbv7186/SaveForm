import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Layout() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
