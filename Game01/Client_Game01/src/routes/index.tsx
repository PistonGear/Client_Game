import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import HomePage from "../pages/home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
    }
    ])

export default Router;