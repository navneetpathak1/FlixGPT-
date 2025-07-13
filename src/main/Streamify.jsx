import {createBrowserRouter, RouterProvider} from "react-router-dom"

import FrontPage from "../Components/FrontPage"
import Header from "../Components/Header"
import Login from "../Components/Login"
import Browser from "../Components/Browser"

const Streamify = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage />
    },
    {
      path: "/login",
      element: < Login />
    },
    {
      path: "/browser",
      element: < Browser />
    },

  ])
  return (
    <div>
      < RouterProvider router={appRouter} />
    </div>
  )
}


export default Streamify;
