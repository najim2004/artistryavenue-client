import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { FaArrowTrendUp } from "react-icons/fa6";
import slider1 from "../../../assets/slider1.png";

import slider2 from "../../../assets/sider2.png";
import slider3 from "../../../assets/slider3.png";
import slider4 from "../../../assets/slider4.png";
import slider5 from "../../../assets/slider5.png";
import { useContext } from "react";
import { AuthData } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

const Slider = () => {
  const { themeData } = useContext(AuthData);
  return (
    <div className="h-screen overflow-x-hidden -mt-[82px] !z-0">
      <Swiper
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper relative group"
      >
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover relative  bg-center lg:bg-right  h-screen"
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundColor: `${!themeData ? "#FFF7E8" : "#1d232a"}`,
            }}
          >
            <div className="inset-0 absolute bg-white lg:bg-opacity-0 bg-opacity-50">
              <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
                <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                  Landscape Painting
                  <br />
                  Art Collections
                </h3>
                <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                  Capture scenic beauty with our landscape paintings, perfect
                  for adding a touch of nature indoors.
                </p>
                <Link
                  className="mt-[60px]"
                  to="/categories/662df6c33115c8ff17fddfa0"
                >
                  <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold w-[200px]">
                    Landscape Painting <FaArrowTrendUp />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover  bg-center lg:bg-right  h-screen"
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundColor: `${!themeData ? "#FFEFED" : "#1d232a"}`,
            }}
          >
            <div className="inset-0 absolute bg-white lg:bg-opacity-0 bg-opacity-50">
              <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full  flex-col mx-auto">
                <div className="App"></div>
                <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                  Oil Painting
                  <br />
                  Art Collections
                </h3>
                <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                  Experience the richness and depth of oil paintings, showcasing
                  timeless elegance in every stroke.
                </p>
                <Link
                  className="mt-[60px]"
                  to="/categories/662df7d63115c8ff17fddfa3"
                >
                  <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold w-[200px]">
                    Explore Oil Painting <FaArrowTrendUp />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover  bg-center lg:bg-right  h-screen"
            style={{
              backgroundImage: `url(${slider3})`,
              backgroundColor: `${!themeData ? "#E6F0F8" : "#1d232a"}`,
            }}
          >
            <div className="inset-0 absolute bg-white lg:bg-opacity-0 bg-opacity-50">
              <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
                <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                  Watercolour Painting
                  <br />
                  Art Collections
                </h3>
                <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                  Explore vibrant watercolour artworks, bringing life and color
                  to your walls effortlessly.
                </p>

                <Link
                  className="mt-[60px]"
                  to="/categories/662df7a13115c8ff17fddfa2"
                >
                  <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold w-[270px]">
                    Explore Watercolour Painting <FaArrowTrendUp />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover  bg-center lg:bg-right  h-screen"
            style={{
              backgroundImage: `url(${slider4})`,
              backgroundColor: `${!themeData ? "#F6F6F6" : "#1d232a"}`,
            }}
          >
            <div className="inset-0 absolute bg-white lg:bg-opacity-0 bg-opacity-50">
              <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
                <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                  Watercolour Painting
                  <br />
                  Art Collections
                </h3>
                <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                  Explore vibrant watercolour artworks, bringing life and color
                  to your walls effortlessly.
                </p>

                <Link
                  className="mt-[60px]"
                  to="/categories/662df7a13115c8ff17fddfa2"
                >
                  <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold w-[270px]">
                    Explore Watercolour Painting <FaArrowTrendUp />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover  bg-center lg:bg-right  h-screen"
            style={{
              backgroundImage: `url(${slider5})`,
              backgroundColor: `${!themeData ? "#FBF8F9" : "#1d232a"}`,
            }}
          >
            <div className="inset-0 absolute bg-white lg:bg-opacity-0 bg-opacity-50">
              <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
                <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                  Charcoal Sketching
                  <br />
                  Art Collections
                </h3>
                <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                  Discover expressive charcoal sketches, adding drama and
                  intrigue to your art collection.
                </p>
                <Link
                  className="mt-[60px]"
                  to="/categories/662df81d3115c8ff17fddfa4"
                >
                  <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white font-semibold w-[270px]">
                    Explore Charcoal Sketching <FaArrowTrendUp />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="absolute h-full top-0 z-40 group-hover:flex hidden items-center justify-between lg:p-6 left-0">
          <button className="btn bg-transparent border-none hover:bg-transparent text-5xl text-cRed shadow-none !p-0 prev-btn">
            <LuChevronLeftCircle />
          </button>
        </div>
        <div className="absolute h-full top-0 z-40 group-hover:flex hidden items-center justify-between lg:p-6 right-0">
          <button className="btn bg-transparent border-none hover:bg-transparent text-5xl text-cRed shadow-none !p-0 next-btn">
            <LuChevronRightCircle />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
