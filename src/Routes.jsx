import { createBrowserRouter } from "react-router-dom";
import Main from "./components/layouts/Main";
import Login from "./components/pages/Login";
import Banner from "./components/Banner/Banner";
import ChefList from "./components/ChefList/ChefList";
import LoginLayout from "./components/layouts/LoginLayout";
import SingleChefDetails from "./components/SingleChef/SingleChefDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Register from "./components/pages/Register";
import PrivateRoute from "./PrivateRoute";
import ChefLayout from "./components/layouts/ChefLayout";
import Blog from "./components/pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      
      {
        path: '/',
        element: <Banner></Banner>
      },
      
    ]
  },
  {
    
      path: 'blog',
      element: <LoginLayout></LoginLayout>,
      children: [
         {
          path: '/blog',
          element: <Blog></Blog>
         }
      ]
    
  },
  {
    path: 'login',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      
    ]
  },
  {
    path: 'register',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: 'cheflist',
    element: <ChefLayout></ChefLayout>,
    children: [
      {
        path: '/cheflist',
        element: <ChefList></ChefList>,
        loader:  () => fetch('https://assignment-10-server-arbayezid.vercel.app/cheflist'),
      },
      {
        path: '/cheflist/:id',
        element: <PrivateRoute><SingleChefDetails></SingleChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-arbayezid.vercel.app/cheflist/${params.id}`)
      }
    ]
  }
])
export default router;