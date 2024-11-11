import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import LoadUsersPage from "../page/LoadUsersPage";
import ShowUsers from "../page/ShowUsers";
import LoadPostsPage from "../page/LoadPostsPage";
import LoadCommentsPage from "../page/LoadCommentsPage";



 export let router = createBrowserRouter([
    {path:'/', element: <App/> , children:[
            {path:'users', element:<LoadUsersPage/>},
            {path:'posts', element:<LoadPostsPage/>},
            {path:"comments", element:<LoadCommentsPage/>},
            {path:'show' , element : <ShowUsers/>}
        ]}

])