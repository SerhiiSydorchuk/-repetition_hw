
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../models/IPost";

type PostsSliceType = {
    posts:IPost[]
    post:IPost | null
}

const postsInitState:PostsSliceType = {
    posts:[],
    post:null
}

export let postsSlice = createSlice({
    name:'postSlice',
    initialState:postsInitState,
    reducers:{
        loadPosts: (state, action: PayloadAction<IPost[]>) => {state.posts=action.payload},
        loadPost:(state,action:PayloadAction<IPost>)=>{state.post=action.payload}
    }
})

export let {loadPosts,loadPost}= postsSlice.actions