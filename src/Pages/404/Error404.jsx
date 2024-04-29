import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="flex flex-col h-screen overflow-hidden items-center justify-center">
        <h3 className="text-[#f0baa9] text-8xl -mt-[72px] font-bold">404</h3>
        <p className="text-[50px] font-semibold font-Akshar text-center">
          The Page You're Looking For Can't Found
        </p>
        <Link to={"/"}>
          <button className="btn rounded-sm bg-cRed text-white font-semibold px-10 mt-6">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
