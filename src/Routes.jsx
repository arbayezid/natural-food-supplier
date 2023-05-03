import { createBrowserRouter } from "react-router-dom";
import Main from "./components/layouts/Main";
import Login from "./components/pages/Login";
import Banner from "./components/Banner/Banner";
import ChefList from "./components/ChefList/ChefList";
import ChefDetails from "./components/ChefDetails/ChefDetails";
import LoginLayout from "./components/layouts/LoginLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/',
        element: <Banner></Banner>

      },
      {
        path: 'cheflist',
        element: <ChefList></ChefList>
      }
    ]
  },
  {
    path: '/cheflist',
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <ChefList></ChefList>
      }
    ]


  }
])
export default router;