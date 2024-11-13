import {IComment} from "../models/IComment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type commentsSliceType = {
    comments:IComment[],
    comment:IComment|null
}
let commentsInitState:commentsSliceType = {
    comments:[],
    comment: null,

}

export let commentsSlice = createSlice({
    name:'commentsSlice',
    initialState:commentsInitState,
    reducers:{
        loadComments:(state,action:PayloadAction<IComment[]>)=>{state.comments=action.payload},
        loadComment:(state,action:PayloadAction<IComment>)=>{state.comment=action.payload}
    }
})

export let {loadComments,loadComment}= commentsSlice.actions