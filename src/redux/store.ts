
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "../slices/user.slice";
import {postsSlice} from "../slices/posts.slice";
import {commentsSlice} from "../slices/comments.slice";




export let store =configureStore({
    reducer:{
      userSlice:userSlice.reducer,
        postsSlice:postsSlice.reducer,
        commentsSlice:commentsSlice.reducer

    }
})



export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

