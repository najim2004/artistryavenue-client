import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Error404 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col h-[calc(100vh-72px)] items-center justify-center">
        <h3 className="text-[#f0baa9] text-8xl -mt-[72px] font-bold">404</h3>
        <p className="text-[50px] font-semibold font-Akshar text-center">
          The Page You're Looking For Can't Found
        </p>
        <Link to={"/"}>
          <button className="btn rounded-sm bg-cRed text-white font-semibold px-10 mt-6">BACK TO HOME</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error404;
