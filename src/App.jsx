import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { AuthData } from "./Context/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const { dataLoading } = useContext(AuthData);
  const [late, setLate] = useState(false);
  useEffect(() => {
    if (dataLoading) {
      setTimeout(() => setLate(true), 8000);
    } else {
      setLate(false);
    }
  }, [dataLoading]);
  return (
    <>
      <Navbar></Navbar>
      {dataLoading ? (
        <div className=" h-[calc(100vh-85px)] overflow-x-hidden flex-col absolute z-50 w-full bg-white bg-opacity-60 backdrop-blur-[5px] grid place-items-center">
          <div className="text-center">
            <span className="loading size-[80px] text-cRed loading-infinity loading-lg"></span>
            <h3 className="font-Akshar text-3xl">
              Fetching Data
              <Typewriter loop words={["..."]} />
            </h3>
            {late && (
              <p className="font-Akshar text-cRed mt-2">
                If too late check your internet or reload please!
              </p>
            )}
          </div>
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
