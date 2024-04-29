import { useContext } from "react";
import { AuthData } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const CraftCategories = () => {
  const { categories } = useContext(AuthData);
  return (
    <div className="overflow-x-hidden">
      <Fade>
        <h3 className="text-3xl lg:text-[48px] pt-3 font-Akshar mt-12 lg:mt-[100px] text-center">
          Select Your Categories
        </h3>
      </Fade>
      <Fade delay={300}>
        <div className="max-w-[1150px] p-3 lg:p-0 mx-auto mt-8 lg:mt-12 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories?.map((category) => (
            <div
              key={category?._id}
              className="relative border-[3px] border-cRed lg:p-2 overflow-hidden rounded-3xl group h-[250px] w-full"
            >
              <img
                className="h-full rounded-3xl group-hover:scale-125 duration-1000 group-hover:rotate-2 w-full bg-gray-50"
                src={category?.image}
                alt=""
              />
              <div className="absolute inset-0 group gap-4 flex flex-col justify-center items-center font-Akshar text-3xl bg-black bg-opacity-60  lg:group-hover:translate-y-[0] lg:transition lg:duration-500 lg:translate-y-[250px] rounded-sm">
                <h3 className="text-white font-semibold">
                  {category?.category_name}
                </h3>
                <p className="text-base text-center max-w-[500px] text-white">
                  {category?.description}
                </p>
                <Link to={`/categories/${category?._id}`}>
                  <button className="text-lg btn btn-sm h-10 px-3 bg-cRed text-white rounded-sm border-none">
                    View All Post
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default CraftCategories;
