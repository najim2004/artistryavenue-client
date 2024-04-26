import CraftCategories from "./CraftCategories/CraftCategories";
import CraftItems from "./CraftItems/CraftItems";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="mt-[100px] grid grid-cols-4">
        <CraftCategories></CraftCategories>
        <div className="col-span-3">
          <CraftItems></CraftItems>
        </div>
      </div>
    </div>
  );
};

export default Home;
