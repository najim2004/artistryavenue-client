import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
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

const Slider = () => {
  const { themeData } = useContext(AuthData);
  return (
    <div className="h-screen -mt-[82px] !z-0">
      <Swiper
        navigation={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover  bg-center lg:bg-right  h-screen"
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundColor: `${!themeData ? "#FFF7E8" : "#1d232a"}`,
            }}
          >
            <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
              <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                Landscape Painting
                <br />
                Art Collections
              </h3>
              <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                Commodo ullamcorper a lacus vestibulum sed arcu non odio
                euismod. Suspendisse interdum consectetur libero id faucibus.
                Non diam phasellus vestibulum lorem sed.
              </p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white mt-[60px] font-semibold w-[280px]">
                Landscape Painting Painting <FaArrowTrendUp />
              </button>
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
            <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full  flex-col mx-auto">
              <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                Oil Painting
                <br />
                Art Collections
              </h3>
              <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                Aenean et tortor at risus viverra. Velit laoreet id donec
                ultrices. Malesuada fames ac turpis egestas maecenas pharetra
                convallis posuere.
              </p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white mt-[60px] font-semibold w-[200px]">
                Explore Oil Painting <FaArrowTrendUp />
              </button>
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
            <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
              <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                Watercolour Painting
                <br />
                Art Collections
              </h3>
              <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                Facilisis leo vel fringilla est ullamcorper eget nulla. Mattis
                vulputate enim nulla aliquet porttitor lacus luctus.
              </p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white mt-[60px] font-semibold w-[270px]">
                Explore Watercolour Painting <FaArrowTrendUp />
              </button>
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
            <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
              <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                Watercolour Painting
                <br />
                Art Collections
              </h3>
              <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                Imperdiet dui accumsan sit amet nulla facilisi morbi tempus
                iaculis. Nulla pellentesque dignissim enim sit amet venenatis
                urna cursus eget. Nibh cras pulvinar mattis nunc.
              </p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white mt-[60px] font-semibold w-[270px]">
                Explore Watercolour Painting <FaArrowTrendUp />
              </button>
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
            <div className="max-w-[1450px] items-center lg:items-start lg:pl-16  flex justify-center h-full flex-col mx-auto">
              <h3 className="font-Akshar text-[46px] text-center lg:text-start  leading-[60px] font-bold">
                Charcoal Sketching
                <br />
                Art Collections
              </h3>
              <p className="mt-[50px] max-w-[400px] leading-8 text-center lg:text-start ">
                Felis bibendum ut tristique et egestas. Molestie ac feugiat sed
                lectus. Eleifend mi in nulla posuere sollicitudin aliquam.
                Turpis egestas integer eget aliquet nibh.
              </p>
              <button className="btn outline-none hover:!bg-transparent hover:border-[2px] hover:text-cRed hover:border-cRed bg-cRed rounded-[5px] text-white mt-[60px] font-semibold w-[270px]">
                Explore Charcoal Sketching <FaArrowTrendUp />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
