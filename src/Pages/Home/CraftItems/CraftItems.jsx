import { FaArrowTrendUp } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { useContext } from "react";
import { AuthData } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";
const CraftItems = () => {
  const { data } = useContext(AuthData);
  return (
    <div className="max-w-[1300px] px-3 lg:px-0 font-Akshar mx-auto mt-[100px]">
      <h3 className="text-3xl font-Akshar font-semibold text-center mb-3">
        Let's see Our Paintings
      </h3>
      <p className="text-center max-w-[600px] mx-auto mb-12">
        offers a captivating gallery of diverse artworks, each telling its own
        unique story through vibrant colors and captivating imagery.
      </p>
      <div className="flex justify-end mb-4">
        <Link
          className="hover:text-cRed hover:underline mr-5"
          to={"/all_art_&_craft_items"}
        >
          See All Art & Craft Items
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-12">
        {data?.map((item) => (
          <div key={item?._id} className="">
            <div className="w-full relative h-[450px] border-[3px] border-black p-4 rounded-sm">
              <img
                className="w-full h-full bg-gray-200"
                src={item?.image}
                alt=""
              />
              <p className="absolute top-5 right-0 text-white bg-opacity-80 bg-cRed p-2">{item?.stockStatus}</p>
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

export default CraftItems;
