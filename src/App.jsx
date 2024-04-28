import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
