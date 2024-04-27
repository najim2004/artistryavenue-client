import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllArtItems from "../Pages/AllArtItems/AllArtItems";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyCraftList from "../Pages/MyCraftList/MyCraftList";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import CraftUpdate from "../Pages/CraftUpdate/CraftUpdate";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../Pages/404/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>,
          </PrivateRoute>
        ),
      },
      {
        path: "/my_art_&_craft_list",
        element: (
          <PrivateRoute>
            <MyCraftList></MyCraftList>,
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>,
          </PrivateRoute>
        ),
      },
      {
        path: "/update_details/:id",
        element: (
          <PrivateRoute>
            <CraftUpdate></CraftUpdate>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
