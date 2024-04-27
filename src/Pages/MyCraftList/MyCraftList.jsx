import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";

const MyCraftList = () => {
  const { themeData, headerbg } = useContext(AuthData);
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover h-[300px] bg-right lg:h-[400px] -mt-[83px]"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div
          className={`!bg-opacity-50  bg-${
            !themeData ? "white" : "black"
          } w-full h-full flex flex-col justify-center items-center`}
        >
          <h3 className="font-Akshar text-3xl font-semibold">
            All Art & Craft Items
          </h3>
          <p className="text-center max-w-[650px] mt-4 mx-auto">
            showcases a diverse array of creative products, from paintings to
            handmade crafts, catering to every artistic inclination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCraftList;
