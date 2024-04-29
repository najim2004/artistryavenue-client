import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthData } from "./Context/AuthProvider";

function App() {
  const { dataLoading } = useContext(AuthData);
  return (
    <>
      <Navbar></Navbar>
      {dataLoading ? (
        <div className=" h-[calc(100vh-72px)] absolute z-50 w-screen bg-white bg-opacity-60 backdrop-blur-[5px] grid place-items-center">
          <span className="loading size-[80px] text-cRed loading-infinity loading-lg"></span>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
