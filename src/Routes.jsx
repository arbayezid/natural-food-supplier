import { createBrowserRouter } from "react-router-dom";
import Main from "./components/layouts/Main";
import Login from "./components/pages/Login";
import Banner from "./components/Banner/Banner";
import ChefList from "./components/ChefList/ChefList";
import ChefDetails from "./components/ChefDetails/ChefDetails";
import LoginLayout from "./components/layouts/LoginLayout";
import SingleChefDetails from "./components/SingleChef/SingleChefDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Register from "./components/pages/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Banner></Banner>

      },
      {
        path: 'cheflist',
        element: <ChefList></ChefList>,
        loader: () => fetch('http://localhost:5000/cheflist')
      },
      {
        path:'cheflist/:id',
        element: <SingleChefDetails></SingleChefDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/cheflist/${params.id}`)
      }
    ]
  }
])
export default router;