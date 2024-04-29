import { Helmet } from "react-helmet-async";
import Review from "../../Component/Review";
import WhyChoseUs from "../../Component/WhyChoseUs";
import CraftCategories from "./CraftCategories/CraftCategories";
import CraftItems from "./CraftItems/CraftItems";
import Slider from "./Slider/Slider";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Artistry Avenue | Home</title>
      </Helmet>
      <Slider></Slider>
      <CraftItems></CraftItems>
      <CraftCategories></CraftCategories>
      <div className="overflow-x-hidden">
        <Fade>
          <h3 className="lg:text-[48px] text-3xl mb-12 font-Akshar text-center mt-12 lg:mt-[100px]">
            What Our People Saying
          </h3>
        </Fade>
        <Fade delay={200}>
          <Review></Review>
        </Fade>
      </div>
      <WhyChoseUs></WhyChoseUs>
    </div>
  );
};

export default Home;
