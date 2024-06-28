import React, { useContext, useEffect, useState } from "react";
import { AuthData } from "../../Context/AuthProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { TbCategory2 } from "react-icons/tb";

const ITEMS_PER_PAGE = 6; // Items per page

const AllArtItems = () => {
  const { data, headerbg, themeData, admin, user, reRender, setReRender } =
    useContext(AuthData);
  const [currentPage, setCurrentPage] = useState(0); // Current page state
  const [sortedItems, setSortedItems] = useState([]);
  const [deleteItem, setDelete] = useState(false);

  useEffect(() => {
    setSortedItems(data);
  }, [data]);

  useEffect(() => {
    const find = admin?.find((adminUser) => adminUser?.email === user?.email);
    setDelete(Boolean(find));
  }, [admin, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://artistryavenue-sever.vercel.app/all_art_and_craft/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setReRender(!reRender);
              setSortedItems(sortedItems.filter((item) => item._id !== id));
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageItems = sortedItems.slice(offset, offset + ITEMS_PER_PAGE);

  const pageCount = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-[calc(100vh-72px)]">
      <Helmet>
        <title>All Art & Craft</title>
      </Helmet>
      <div
        className="bg-no-repeat bg-cover h-[300px] bg-right lg:h-[400px] -mt-[83px]"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div
          className={`!bg-opacity-50 bg-${
            themeData ? "black" : "white"
          } w-full h-full flex flex-col justify-center items-center`}
        >
          <Fade triggerOnce>
            <h3 className="font-Akshar text-3xl font-semibold">
              All Art & Craft Items
            </h3>
          </Fade>
          <Zoom triggerOnce>
            <p className="text-center max-w-[650px] mt-4 mx-auto">
              Showcasing a diverse array of creative products, from paintings to
              handmade crafts, catering to every artistic inclination.
            </p>
          </Zoom>
        </div>
      </div>

      <div className="max-w-[1300px] mx-3 font-Akshar overflow-scroll lg:overflow-hidden md:overflow-hidden md:mx-auto lg:mx-auto">
        <div className="grid grid-cols-1 mt-6 lg:mt-10 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-12">
          {currentPageItems.map((item) => (
            <div key={item?._id} className="font-Akshar">
              <div className="w-full relative h-[450px] border-[3px] border-black p-4 rounded-sm">
                <img
                  className="w-full h-full bg-gray-200 object-cover"
                  src={item?.image}
                  alt={item?.item_name}
                />
                <p className="absolute top-5 right-0 text-white bg-opacity-80 bg-cRed p-2">
                  {item?.stockStatus}
                </p>
                {deleteItem && (
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="absolute bottom-5 right-5 text-white hover:bg-transparent bg-black hover:text-cRed text-3xl p-0 bg-opacity-50 rounded-lg border-none"
                  >
                    <MdDeleteForever />
                  </button>
                )}
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
                    <button className="btn outline-none hover:bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold flex items-center gap-2">
                      View Details <FaArrowTrendUp />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <nav
            className="inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() =>
                handlePageClick({ selected: Math.max(currentPage - 1, 0) })
              }
              className={`relative inline-flex items-center px-2 py-2 text-sm font-medium rounded-l-md ${
                currentPage === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick({ selected: index })}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                  currentPage === index
                    ? "z-10 bg-cRed text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                handlePageClick({
                  selected: Math.min(currentPage + 1, pageCount - 1),
                })
              }
              className={`relative inline-flex items-center px-2 py-2 text-sm font-medium rounded-r-md ${
                currentPage === pageCount - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
              disabled={currentPage === pageCount - 1}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllArtItems;

{
  /* <Fade>
          <table className="w-full text-start mt-12">
            <thead
              className={`text-center *:border-[1px] *:border-black h-10  !bg-opacity-50  bg-${
                !themeData ? "[#fae8d3]" : ""
              } `}
            >
              <th> Art or Craft Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th className="hidden lg:flex md:flex h-10 items-center justify-center !border-l-0 !border-r-0 w-full">
                Stock Status
              </th>
              <th>Details Button</th>
              {deleteItem && <th>Delete</th>}
            </thead>

            <tbody className="">
              {sorItems?.map((item) => (
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
                  <td className="hidden lg:flex md:flex !border-t-0  items-center justify-center !border-l-0 !border-r-0 w-full h-[80px]">
                    {item?.stockStatus}
                  </td>
                  <td className="lg:w-[150px]">
                    <Link to={`/details/${item?._id}`}>
                      <button className="btn rounded-sm btn-sm h-10 bg-cRed text-white font-Akshar">
                        View Details
                        <FaArrowTrendUp />
                      </button>
                    </Link>
                  </td>
                  {deleteItem && (
                    <td className="w-16">
                      <button
                        onClick={() => handleDelete(item?._id)}
                        className="tn hover:bg-transparent text-black hover:text-cRed bnt-sm text-3xl !p-0 bg-transparent border-none"
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>{" "}
        </Fade> */
}
