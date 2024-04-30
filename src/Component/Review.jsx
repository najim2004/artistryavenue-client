import { useContext } from "react";
import { AuthData } from "../Context/AuthProvider";
import Marquee from "react-fast-marquee";

const Review = () => {
  const { reviewData } = useContext(AuthData);
  return (
    <div className="max-w-[1450px] overflow-x-hidden  mx-auto">
      <Marquee className="">
        <div className="flex ">
          {reviewData?.map((review) => (
            <div key={review._id} className="ml-6 min-h-[406px]">
              <div className="flex justify-center">
                <div className="max-w-[400px] flex flex-col items-center h-[400px] shadow-md">
                  <div className="bg-[#fae8d3] flex gap-6 justify-center items-center h-[150px] w-full">
                    <img
                      className="size-[100px] object-cover rounded-full bg-gray-200"
                      src={review?.photoUrl}
                      alt=""
                    />
                    <div className="">
                      <h3 className="text-lg font-medium mb-1">
                        {review?.name}
                      </h3>
                      <p>{review?.from}</p>
                    </div>
                  </div>
                  <div className="w-full flex-grow flex items-center px-5 justify-center">
                    <p className="italic">{review?.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
