import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const { themeData } = useContext(AuthData);
  const menu = (
    <>
      <li>
        <Link className="hover:text-cRed hover:underline" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-cRed hover:underline"
          to={"/all_art_&_craft_items"}
        >
          All Art & craft Items
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-cRed hover:underline"
          to={"/my_art_&_craft_list"}
        >
          My Art&Craft List
        </Link>
      </li>
      <li>
        <Link className="hover:text-cRed hover:underline" to={"/contact_us"}>
          Contact us
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#fae8d3] mt-12 lg:mt-[100px]">
      <div
        className={`!bg-opacity-80  bg-${
          !themeData ? "" : "black"
        } h-full w-full min-h-[400px]`}
      >
        <div className="max-w-[1450px] px-3 0 min-h-[400px] mx-auto">
          <div className="grid grid-cols-1 min-h-[300px] lg:grid-cols-3 gap-4">
            <div className="flex items-center mt-10 lg:mt- lg:justify-start justify-center">
              <img className="w-[300px]" src={logo} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-Akshar text-[44px] text-center">
                Quick Links
              </h3>
              <ul className="flex text-xl font-Akshar flex-wrap gap-4 mt-4 px-10 justify-center">
                {menu}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:items-end gap-4">
              <h3 className="font-Akshar text-2xl">
                123 Main Street, Springfield, Illinois, 62701
              </h3>
              <h3 className="font-Akshar text-2xl">Mail:admin@example.com</h3>
              <h3 className="font-Akshar text-2xl">Phone:000-123456789</h3>
            </div>
          </div>
          <div className="w-full mt-5 lg:mt-0 text-3xl flex justify-center gap-5">
            <a target="_blank" href="facebook.com/najim2004">
              <FaFacebook />
            </a>
            <a target="_blank" href="#">
              <FaInstagram className="cursor-pointer" />
            </a>
            <a target="_blank" href="#">
              <FaTwitter className="cursor-pointer" />
            </a>
          </div>
          <p className="text-center mt-6">
            All Right Reserved © 2024 By{" "}
            <a
              target="_blank"
              className="text-cRed"
              href="facebook.com/najim2004"
            >
              Najim
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
