import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { Fade, Zoom } from "react-awesome-reveal";

import { Link } from "react-router-dom";

const AllArtItems = () => {
  const { data, headerbg, themeData } = useContext(AuthData);

  return (
    <div className="min-h-[calc(100vh-72px)]">
      <div
        className="bg-no-repeat bg-cover h-[300px] bg-right lg:h-[400px] -mt-[83px]"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div
          className={`!bg-opacity-50  bg-${
            !themeData ? "white" : "black"
          } w-full h-full flex flex-col justify-center items-center`}
        >
          <Fade>
            <h3 className="font-Akshar text-3xl font-semibold">
              All Art & Craft Items
            </h3>
          </Fade>
          <Zoom>
            <p className="text-center max-w-[650px] mt-4 mx-auto">
              showcases a diverse array of creative products, from paintings to
              handmade crafts, catering to every artistic inclination.
            </p>
          </Zoom>
        </div>
      </div>

      <div className="max-w-[1300px] px-3 font-Akshar  mx-auto">
        <Fade>
          <table className="w-full text-start mt-12">
            <thead
              className={`text-center *:border-[1px] *:border-black !bg-opacity-50  bg-${
                !themeData ? "[#fae8d3]" : ""
              } `}
            >
              <th> Art or Craft Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock Status</th>
              <th>Details Button</th>
            </thead>

            <tbody className="">
              {data?.map((item) => (
                <tr
                  className="h-20 text-lg lg:text-xl *:border-[1px] *:border-black text-center w-full"
                  key={item?._id}
                >
                  <td className="text-start pl-4">{item?.item_name}</td>
                  <td>
                    <p className="flex items-center justify-center gap-2">
                      <BsCurrencyDollar />
                      {item?.Price}
                    </p>
                  </td>
                  <td className="">
                    <p className="flex items-center gap-2 justify-center">
                      <FaStar className="text-yellow-500" />
                      {item?.rating}
                    </p>
                  </td>
                  <td>{item?.stockStatus}</td>
                  <td>
                    <Link to={`/details/${item?._id}`}>
                      <button className="btn rounded-sm btn-sm h-10 bg-cRed text-white font-Akshar">
                        View Details
                        <FaArrowTrendUp />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>{" "}
        </Fade>
        {/* {data?.map((item) => (
          <div key={item?._id} className="font-Akshar">
            <div className="w-full relative  h-[450px] border-[3px] border-black p-4 rounded-sm">
              <img
                className="w-full h-full bg-gray-200"
                src={item?.image}
                alt=""
              />
              <p className="absolute top-5 right-0 text-white bg-opacity-80 bg-cRed p-2">
                {item?.stockStatus}
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
        ))} */}
      </div>
    </div>
  );
};

export default AllArtItems;
