import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";
import { Fade } from "react-awesome-reveal";
const AddCraftItem = () => {
  const { themeData, user, sweetAlert, setReRender, reRender } =
    useContext(AuthData);

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
    fetch("https://artistryavenue-sever.vercel.app/all_art_and_craft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        sweetAlert("Successfully Added", "success", false, false, 1500);
        setReRender(!reRender);
        console.log(data);
        form.reset();
      });
  };
  return (
    <div className="min-h-[calc(100vh-72px)]">
      <div
        className="max-w-[1050px] lg:mt-10 mx-3 font-Akshar p-3 lg:p-10 rounded-[8px] lg:mx-auto"
        style={{ backgroundColor: `${themeData ? "#606060c4" : "#fae8d3"}` }}
      >
        <div className="">
          <Fade>
            <h1 className="text-2xl font-bold text-center mb-5">
              Add Your Craft Item
            </h1>
          </Fade>
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
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
              <label className="text-xl mb-4 font-semibold">Image Url</label>
              <br />
              <input
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                type="text"
                name="image"
                placeholder="Enter image URL"
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
              <label className="text-xl mb-4 font-semibold">
                Craft Category Name
              </label>
              <br />

              <select
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                name="subcategory_Name"
                id=""
              >
                <option selected disabled>
                  Category Name
                </option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </div>
            <div className="">
              <label className="text-xl mb-4 font-semibold">
                Customization
              </label>
              <br />
              <select
                className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
                name="customization"
                id=""
              >
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
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
    </div>
  );
};

export default AddCraftItem;
