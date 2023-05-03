import { createBrowserRouter } from "react-router-dom";
import Main from "./components/layouts/Main";
import Login from "./components/pages/Login";
import Banner from "./components/Banner/Banner";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Banner></Banner>
        },
        {
            path: 'login',
            element: <Login></Login>
        }
      ]
    }
  ])
export default router;