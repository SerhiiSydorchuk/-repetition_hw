import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AuthResourcesLayout from "../layouts/AuthResourcesLayout";
import ErrorsLayout from "../layouts/ErrorsLayout";
import PostsPage from "../pages/PostsPage";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([
    {path:'/' , element: <MainLayout/> , errorElement:<ErrorsLayout/>,  children:[
            {path:'' , element:<HomePage/>},
            {path:'login', element:<LoginPage/>},
            {path:'auth/resources', element:<AuthResourcesLayout/>},
            {path:'auth/resources/posts' , element:<PostsPage/>},
            {path:'auth/resources/products' , element:<ProductsPage/>},

        ]}
])