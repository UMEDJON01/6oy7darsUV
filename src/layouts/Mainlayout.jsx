import { Outlet } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

function Mainlayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar1 />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Mainlayout;
