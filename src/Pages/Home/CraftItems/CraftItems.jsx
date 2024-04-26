import { FaArrowTrendUp } from "react-icons/fa6";

const CraftItems = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-[100px]">
      <h3 className="text-3xl font-Akshar font-semibold text-center mb-12">
        Let's see Our Paintings
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-12">
        <div className="">
          <div className="w-full h-[450px] border-[3px] border-black p-4 rounded-sm">
            <img className="w-full h-full bg-gray-200" src="" alt="" />
          </div>
          <div className="px-6">
            <h3 className="text-2xl font-Akshar font-semibold mt-3">
              Painting name here
            </h3>
            <h3 className="mb-3">category</h3>
            <div className="flex justify-between">
              <p>*5</p>
              <p>$500</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>Name</p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold">
                View Details <FaArrowTrendUp />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-[450px] border-[3px] border-black p-4 rounded-sm">
            <img className="w-full h-full bg-gray-200" src="" alt="" />
          </div>
          <div className="px-6">
            <h3 className="text-2xl font-Akshar font-semibold mt-3">
              Painting name here
            </h3>
            <h3 className="mb-3">category</h3>
            <div className="flex justify-between">
              <p>*5</p>
              <p>$500</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>Name</p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold">
                View Details <FaArrowTrendUp />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-[450px] border-[3px] border-black p-4 rounded-sm">
            <img className="w-full h-full bg-gray-200" src="" alt="" />
          </div>
          <div className="px-6">
            <h3 className="text-2xl font-Akshar font-semibold mt-3">
              Painting name here
            </h3>
            <h3 className="mb-3">category</h3>
            <div className="flex justify-between">
              <p>*5</p>
              <p>$500</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>Name</p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold">
                View Details <FaArrowTrendUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
