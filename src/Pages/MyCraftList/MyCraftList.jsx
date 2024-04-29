import { useContext, useEffect, useState } from "react";
import { AuthData } from "../../Context/AuthProvider";
import { TbCategory2 } from "react-icons/tb";
import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Fade, Zoom } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
const MyCraftList = () => {
  const { themeData, headerbg, user, reRender, myItems, dataLoading } =
    useContext(AuthData);

  const [sorItems, setSortItems] = useState([]);
  useEffect(() => {
    setSortItems(myItems);
  }, [myItems, user]);

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
            console.log(data);
            if (data.deletedCount > 0) {
              setSortItems(myItems.filter((item) => item._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  const compare = (a, b) => {
    if (a.customization === "YES" && b.customization !== "YES") {
      return -1; // a comes before b
    } else if (a.customization !== "YES" && b.customization === "YES") {
      return 1; // b comes before a
    } else {
      return 0; // no change in order
    }
  };
  const compare2 = (a, b) => {
    if (a.customization === "NO" && b.customization !== "NO") {
      return -1; // a comes before b
    } else if (a.customization !== "NO" && b.customization === "NO") {
      return 1; // b comes before a
    } else {
      return 0; // no change in order
    }
  };

  const yes = () => {
    setSortItems([...myItems].sort(compare));
  };
  const no = () => {
    setSortItems([...myItems].sort(compare2));
  };

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
          {" "}
          <Fade>
            <h3 className="font-Akshar text-3xl font-semibold">
              My Art & Craft List
            </h3>
          </Fade>
          <Zoom>
            <p className="text-center max-w-[650px] mt-4 mx-auto">
              compiles a diverse array of artistic creations and craft projects,
              inspiring creativity and offering endless DIY possibilities.
            </p>
          </Zoom>
        </div>
      </div>
      <div className="max-w-[1300px] min-h-[calc(100vh-500px)] mx-auto ">
        <div className="flex justify-end mt-10">
          <details className="dropdown ">
            <summary className="m-1 btn text-white rounded-sm bg-cRed">
              Sort By Customization
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={yes}>
                <a>YES</a>
              </li>
              <li onClick={no}>
                <a>NO</a>
              </li>
            </ul>
          </details>
        </div>
        <>
          <div className="mt-20 gap-12 grid grid-cols-1 lg:grid-cols-3">
            {sorItems?.map((item) => (
              <div key={item?._id} className="font-Akshar">
                <Fade>
                  <div className="w-full relative h-[450px] border-[3px] border-black p-4 rounded-sm">
                    <img
                      className="w-full h-full bg-gray-200"
                      src={item?.image}
                      alt=""
                    />
                    <p className="absolute top-5 right-0 text-white bg-opacity-80 bg-cRed p-2">
                      {item?.stockStatus}
                    </p>
                    <div className="bg-black bg-opacity-70 h-12 w-full absolute bottom-0 left-0 flex justify-around">
                      <Link
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Edit this post"
                        data-tooltip-place="top"
                        to={`/update_details/${item?._id}`}
                      >
                        <button className="btn hover:bg-transparent hover:text-cRed bnt-sm text-2xl !p-0 bg-transparent border-none text-white">
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Delete this post"
                        data-tooltip-place="top"
                        onClick={() => handleDelete(item?._id)}
                        className="btn hover:bg-transparent hover:text-cRed bnt-sm text-3xl !p-0 bg-transparent border-none text-white"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                  <div className="px-6">
                    <h3 className="text-2xl font-Akshar font-semibold mt-3">
                      {item?.item_name}
                    </h3>
                    <h3 className="mb-3 flex items-center gap-2 ">
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
                      <p>
                        <span className="font-semibold">Customization:</span>{" "}
                        {item?.customization}
                      </p>
                      <Link to={`/details/${item?._id}`}>
                        <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold">
                          View Details <FaArrowTrendUp />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </>
        {/* {sorItems.length === 0 && (
          <div className="min-h-[calc(100vh-500px)] w-full font-Akshar flex flex-col items-center justify-center">
            <h3 className="mt-[72px] text-2xl text-center">
              Nothing here! <br />
              Please add your Craft and Art!
            </h3>
            <Link className="mx-auto mt-6" to={"/add_craft_item"}>
              <button className="btn bg-cRed rounded-sm text-white">
                Add Your Craft
              </button>
            </Link>
          </div>
        )} */}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default MyCraftList;
