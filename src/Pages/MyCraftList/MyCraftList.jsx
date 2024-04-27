import { useContext, useEffect, useState } from "react";
import { AuthData } from "../../Context/AuthProvider";
import { TbCategory2 } from "react-icons/tb";
import { FaArrowTrendUp, FaStar } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyCraftList = () => {
  const { themeData, headerbg, user } = useContext(AuthData);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my_art_&_craft_list/${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setMyItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
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
        const url = `http://localhost:5000/all_art_and_craft/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            {
              if (data.deletedCount > 0) {
                setMyItems(myItems.filter((item) => item._id !== id));
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            }
          });
      }
    });
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
          <h3 className="font-Akshar text-3xl font-semibold">
            My Art & Craft List
          </h3>
          <p className="text-center max-w-[650px] mt-4 mx-auto">
            compiles a diverse array of artistic creations and craft projects,
            inspiring creativity and offering endless DIY possibilities.
          </p>
        </div>
      </div>
      {myItems.length !== 0 ? (
        <>
          <div className="max-w-[1300px] mx-auto mt-20 gap-12 grid grid-cols-1 lg:grid-cols-3">
            {myItems?.map((item) => (
              <div key={item?._id} className="font-Akshar">
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
                    <Link to={`/update_details/${item?._id}`}>
                      <button className="btn hover:bg-transparent hover:text-cRed bnt-sm text-2xl !p-0 bg-transparent border-none text-white">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
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
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-[200px] w-full font-Akshar flex flex-col items-center justify-center">
          <h3 className=" text-2xl text-center">
            Nothing here! <br />
            Please add your Craft and Art!
          </h3>
          <Link className="mx-auto mt-6" to={"/add_craft_item"}>
            <button className="btn bg-cRed rounded-sm text-white">
              Add Your Craft
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCraftList;
