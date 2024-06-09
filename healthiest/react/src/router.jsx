import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/login/Login";
import Signup from "./views/Signup";
import Recipe from "./views/Recipe";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard/Dashboard";
import RecipeList from "./views/RecipeList";
import Profile from "./views/Profile";

const router = createBrowserRouter([

    {
        path:'/',
        element:<DefaultLayout />,
        children: [

            {
                path:'/',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/recipe/:id',
                element: <Recipe />
            },
            {
                path: '/recipe',
                element: <RecipeList />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    },
    {
        path:'/',
        element:<GuestLayout />,
        children: [
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Signup />
            }
        ]
    },

    {
        path:'*',
        element:<NotFound />
    }
])

export default router;