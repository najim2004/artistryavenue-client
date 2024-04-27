import React from "react";

const Review = () => {
  return (
    <div className="max-w-[1450px] mx-auto">
      <div className="w-[400px] flex flex-col h-[400px] shadow-md">
        <div className="bg-[#fae8d3] flex gap-6 justify-center items-center h-[150px] w-full">
          <img
            className="size-[100px] rounded-full bg-gray-200"
            src=""
            alt=""
          />
          <div className="">
            <h3 className="text-lg font-medium mb-1">this is name</h3>
            <p>this is from</p>
          </div>
        </div>
        <div className="w-full flex-grow flex items-center px-5 justify-center">
        <p className="italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem iusto blanditiis, corrupti error illo quidem temporibus
          quibusdam itaque animi, culpa fugiat magni labore in libero voluptatum
          minus obcaecati consectetur id.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
