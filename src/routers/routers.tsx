import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../page/usersPage";
import HomePage from "../page/homePage";
import PostsPage from "../page/postsPage";
import CommentsPage from "../page/commentsPage";
import PostsWithCommentsPage from "../page/postsWithCommentsPage";


export let router = createBrowserRouter([
        {
            path: '/', element: <HomePage/>, children: [
                {path: '/users', element: <UsersPage/>},
                {path: '/posts', element: <PostsPage/>},
                {path: '/comments', element: <CommentsPage/>},
                {path: '/show', element: <PostsWithCommentsPage/>}
            ]
        },

    ]

);


