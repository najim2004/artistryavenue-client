import Review from "../../Component/Review";
import WhyChoseUs from "../../Component/WhyChoseUs";
import CraftCategories from "./CraftCategories/CraftCategories";
import CraftItems from "./CraftItems/CraftItems";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CraftItems></CraftItems>
      <div className="">
        <h3 className="lg:text-[48px] text-3xl mb-12 font-Akshar text-center mt-12 lg:mt-[100px]">
          What Our People Saying
        </h3>
        <Review></Review>
      </div>
      <WhyChoseUs></WhyChoseUs>
      <CraftCategories></CraftCategories>
    </div>
  );
};

export default Home;
