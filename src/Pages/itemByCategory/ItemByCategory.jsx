import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthData } from "../../Context/AuthProvider";
import { TbCategory2 } from "react-icons/tb";
import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

const ItemByCategory = () => {
  const { id } = useParams();
  const { data, categories, themeData, headerbg } = useContext(AuthData);
  const [allPost, setAllPost] = useState([]);
  const category = categories.find((item) => item._id === id);
  const categoryName = category?.category_name;
  useEffect(() => {
    setAllPost(data.filter((item) => item.subcategory_Name === categoryName));
  }, [data]);

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
          <h3 className="font-Akshar text-3xl font-semibold">{categoryName}</h3>
          <p className="text-center max-w-[650px] mt-4 mx-auto">
            {category?.description}
          </p>
        </div>
      </div>
      <div className="max-w-[1300px] min-h-[calc(100vh-500px)] mt-12 lg:mt-20 px-3 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-16 mg-8">
        {allPost.map((item) => (
          <div key={item?._id} className="">
            <div className="w-full relative h-[450px] border-[3px] border-black p-4 rounded-sm">
              <img
                className="w-full h-full bg-gray-200"
                src={item?.image}
                alt=""
              />
              <p className="absolute top-5 right-0 text-white bg-opacity-80 bg-cRed p-2">
                {item?.stockStatus}
              </p>
              <p className="absolute left-0 w-full bottom-0 text-center text-white bg-opacity-80 bg-black p-2">
                Processing Time {item?.processing_time}
              </p>
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

export default ItemByCategory;
