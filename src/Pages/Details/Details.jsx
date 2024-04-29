import { useContext, useEffect, useState } from "react";
import { AuthData } from "../../Context/AuthProvider";
import { Link, useParams } from "react-router-dom";
import headerbg from "../../assets/headerbg.png";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
const Details = () => {
  const { data, themeData, categories } = useContext(AuthData);
  const { id } = useParams();
  const [findData, setFindData] = useState({});

  useEffect(() => {
    setFindData(data?.find((item) => item._id === id));
  }, [data, id]);
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Details | {findData?.item_name ? findData?.item_name : ""}
        </title>
      </Helmet>
      <div
        className="bg-no-repeat bg-cover h-[300px] bg-right lg:h-[400px] -mt-[82px]"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div
          className={`!bg-opacity-50  bg-${
            !themeData ? "white" : "black"
          } w-full h-full`}
        >
          <div className="max-w-[1450px]  h-full flex flex-col justify-center mx-auto">
            <Slide>
              <h3 className="font-Akshar ml-6  lg:ml-0 text-start font-medium text-xl lg:text-[40px]">
                {findData?.item_name}
              </h3>

              <p className="flex ml-6 lg:ml-0 text-lg flex-wrap mt-5">
                <Link className="hover:text-cRed hover:underline" to={"/"}>
                  Home
                </Link>
                {">"}
                <Link className="hover:text-cRed hover:underline">
                  {findData?.subcategory_Name}
                </Link>
                {">"}
                {findData?.item_name}
              </p>
            </Slide>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-[100px] px-3  max-w-[1450px] mx-auto grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="hidden lg:inline-block">
          <h3 className="text-2xl font-semibold font-Akshar">Categories</h3>
          <ul className="list-disc ml-8 mt-8 *:mb-6 ">
            {categories?.map((category) => (
              <li
                key={category?._id}
                className="hover:text-cRed hover:underline"
              >
                <Link to={`/categories/${category?._id}`}>
                  {category.category_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <img
            className="h-[400px] mx-auto lg:h-[600px] bg-gray-300 object-cover object-center"
            src={findData?.image}
            alt=""
          />
          <div className="">
            <h3 className="text-3xl lg:text-4xl font-Akshar font-semibold">
              {findData?.item_name}
            </h3>
            <h3 className="flex items-center font-Akshar text-2xl lg:text-3xl font-medium mt-4 lg:mt-8">
              <BsCurrencyDollar />
              {findData?.Price}
            </h3>
            <p className="flex mt-4 lg:mt-8 font-semibold font-Akshar text-2xl lg:text-3xl items-center gap-2">
              <FaStar className="text-yellow-400" />
              {findData?.rating}
            </p>
            <p className="flex mt-4 lg:mt-8 font-Akshar text-lg lg:text-xl items-center gap-2">
              <span className="font-semibold">Category: </span>
              {findData?.subcategory_Name}
            </p>
            <p className="flex mt-4 font-Akshar text-lg lg:text-xl items-center gap-2">
              <span className="font-semibold">Posted By: </span>
              {findData?.user_name}
            </p>
            <p className="mt-4 font-Akshar text-lg lg:text-xl items-center gap-2">
              <span className="font-semibold">Short Description: </span>
              {findData?.description}
            </p>
            <p className="mt-4 font-Akshar text-lg lg:text-xl items-center gap-2">
              <span className="font-semibold">Processing Time: </span>
              {findData?.processing_time}
            </p>

            <p className="mt-4 font-Akshar text-lg lg:text-xl items-center gap-2">
              <span className="font-semibold">Customization: </span>
              {findData?.customization}
            </p>
            <p className="mt-4 font-Akshar text-lg lg:text-xl items-center gap-2">
              <span className="font-semibold">Stock Status: </span>
              {findData?.stockStatus}
            </p>
            <p className="mt-4 font-Akshar text-lg lg:text-xl items-center gap-2">
              <span className="font-semibold">Sub Total: </span>$
              {findData?.Price}
            </p>
            <div className="grid grid-cols-2 gap-5 mt-6">
              <button className="w-full h-12 btn bg-black text-white rounded-sm">
                ADD TO CART
              </button>
              <button className="w-full h-12 btn bg-cRed text-white rounded-sm">
                BUY IT NOW
              </button>
            </div>
            <div className="flex justify-around mt-6 text-xl">
              <Link className="flex hover:text-cRed items-center gap-1">
                <FaRegHeart />
                Add to wishlist
              </Link>
              <Link className="flex hover:text-cRed items-center gap-1">
                <IoShareSocialOutline /> Share
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
