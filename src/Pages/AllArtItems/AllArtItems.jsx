import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllArtItems = () => {
  const { data, headerbg, themeData } = useContext(AuthData);

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover h-[300px] bg-right lg:h-[400px] -mt-[83px]"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div
          className={`!bg-opacity-50  bg-${
            !themeData ? "white" : "black"
          } w-full h-full flex flex-col justify-center items-center`}
        >
          <h3 className="font-Akshar text-3xl font-semibold">
            All Art & Craft Items
          </h3>
          <p className="text-center max-w-[650px] mt-4 mx-auto">showcases a diverse array of creative products, from paintings to handmade crafts, catering to every artistic inclination.</p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto gap-6 mt-10 lg:gap-12 grid grid-cols-1 lg:grid-cols-3">
        {data?.map((item) => (
          <div key={item?._id} className="">
            <div className="w-full h-[450px] border-[3px] border-black p-4 rounded-sm">
              <img
                className="w-full h-full bg-gray-200"
                src={item?.image}
                alt=""
              />
            </div>
            <div className="px-6">
              <h3 className="text-2xl font-Akshar font-semibold mt-3">
                {item?.item_name}
              </h3>
              <h3 className="mb-3 flex items-center gap-2">
                <TbCategory2 />
                {item?.subcategory_Name}
              </h3>
              <div className="flex text-lg font-medium justify-between">
                <p className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  {item?.rating}
                </p>
                <p className="flex items-center">
                  <BsCurrencyDollar />
                  {item?.Price}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p>{item?.user_name}</p>
                <Link to={`/details/${item?._id}`}>
                  <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold">
                    View Details <FaArrowTrendUp />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtItems;
