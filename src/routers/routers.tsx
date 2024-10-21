import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";

export const router = createBrowserRouter([
    {path:'/' , element:<MainLayout/> , children:
    [
        {index:true , element:<HomePage/>},
        {path:'posts' , element:<PostsPage/>}
    ]
    }
])