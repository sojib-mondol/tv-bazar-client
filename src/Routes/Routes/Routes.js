import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Crt from "../../Pages/Home/ProductCategories/Crt/Crt";
import Led from "../../Pages/Home/ProductCategories/Led/Led";
import ProductCategories from "../../Pages/Home/ProductCategories/ProductCategories";
import Smart from "../../Pages/Home/ProductCategories/Smart/Smart";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories',
                element: <ProductCategories></ProductCategories>
            },
            {
                path: '/crt',
                element: <Crt></Crt>
            },
            {
                path: '/led',
                element: <Led></Led>
            },
            {
                path: '/smart',
                element: <Smart></Smart>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;