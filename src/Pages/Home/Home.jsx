import CraftCategories from "./CraftCategories/CraftCategories";
import CraftItems from "./CraftItems/CraftItems";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CraftItems></CraftItems>
      <CraftCategories></CraftCategories>
    </div>
  );
};

export default Home;
