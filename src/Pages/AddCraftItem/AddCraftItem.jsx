import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";

const AddCraftItem = () => {
  const { themeData } = useContext(AuthData);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      item_name: form.item_name.value,
      subcategory_Name: form.subcategory_Name.value,
      description: form.description.value,
      image: form.image.value,
      processing_time: form.processing_time.value,
      Price: form.Price.value,
      rating: form.rating.value,
      customization: form.customization.value,
      stockStatus: form.stockStatus.value,
    };
    console.log(formData);
  };
  return (
    <div
      className="max-w-[1050px] mx-3 font-Akshar border-[1px] border-[#fae8d3] p-10 rounded-[8px] lg:mx-auto"
      style={{ backgroundColor: `${themeData ? "" : "#fae8d3"}` }}
    >
      <div className="">
        <h1 className="text-2xl font-bold text-center mb-5">
          Add Your Craft Item
        </h1>
        <hr className="mb-5 border-t-[1px] border-cRed w-full" />

        <form
          onSubmit={handleAddCraft}
          className="grid grid-rows-1 lg:grid-cols-2 gap-6"
        >
          <div className="">
            <label className="text-xl mb-4 font-semibold">Your Name</label>
            <br />
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="text"
              name="user_name"
              placeholder="Enter your name"
            />
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">Your Email</label>
            <br />
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="email"
              name="user_email"
              placeholder="Enter email name"
            />
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">
              Craft or Painting Name
            </label>
            <br />
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="text"
              name="item_name"
              placeholder="Enter craft or painting name"
            />
          </div>

          <div className="">
            <label className="text-xl mb-4 font-semibold">
              Craft Category Name
            </label>
            <br />
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="text"
              name="subcategory_Name"
              placeholder="Enter your craft category name"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="text-xl mb-4 font-semibold">
              Short description
            </label>
            <br />
            <textarea
              placeholder="Short description"
              className="h-[150px] w-full p-[11px] mt-4 bg-white rounded-[5px]"
              name="description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">Image Url</label>
            <br />
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="text"
              name="image"
              placeholder="Enter image URL"
            />
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">
              Processing time
            </label>
            <br />
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="text"
              name="processing_time"
              placeholder="Processing time"
            />
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">Price</label>
            <br />
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="text"
              name="Price"
              placeholder="Enter Craft price"
            />
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">Rating</label>
            <br />
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="text"
              name="rating"
              placeholder="Enter Craft rating"
            />
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">Customization</label>
            <br />
            <select
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              name="customization"
              id=""
            >
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </div>
          <div className="">
            <label className="text-xl mb-4 font-semibold">Stock Status</label>
            <br />
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="text"
              name="stockStatus"
              placeholder="Enter Stock Status"
            />
          </div>

          <input
            className="h-12 lg:col-span-2 btn btn-sm !font-normal font-rancho text-2xl text-white bg-cRed w-full  rounded-[5px]"
            type="submit"
            name=""
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
