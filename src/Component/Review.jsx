import { useContext } from "react";
import { AuthData } from "../Context/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Review = () => {
  const { reviewData } = useContext(AuthData);
  return (
    <div className="max-w-[1450px] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is smaller than sm breakpoint

          640: {
            slidesPerView: 1,
          },
          // when window width is between sm and md breakpoint
          768: {
            slidesPerView: 2,
          },
          // when window width is between md and lg breakpoint
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper min-h-[402px]"
      >
        {reviewData?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex justify-center">
              <div className="max-w-[400px] flex flex-col items-center h-[400px] shadow-md">
                <div className="bg-[#fae8d3] flex gap-6 justify-center items-center h-[150px] w-full">
                  <img
                    className="size-[100px] rounded-full bg-gray-200"
                    src={review?.photoUrl}
                    alt=""
                  />
                  <div className="">
                    <h3 className="text-lg font-medium mb-1">{review?.name}</h3>
                    <p>{review?.from}</p>
                  </div>
                </div>
                <div className="w-full flex-grow flex items-center px-5 justify-center">
                  <p className="italic">{review?.review}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
