import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllArtItems from "../Pages/AllArtItems/AllArtItems";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyCraftList from "../Pages/MyCraftList/MyCraftList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all_art_&_craft_items",
        element: <AllArtItems></AllArtItems>,
      },
      {
        path: "/add_craft_item",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/my_art_&_craft_list",
        element: <MyCraftList></MyCraftList>,
      },
    ],
  },
]);

export default router;
