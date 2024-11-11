


import axios from "axios";
import {IUser} from "../model/IUser";
import {ILoadModel} from "../model/ILoadModel";
import {IPost} from "../model/IPost";
import {IComment} from "../model/IComment";

let axiosInstance = axios.create({
    baseURL : 'https://dummyjson.com'

});

export const loadAllUsers= async ():Promise<IUser[]| undefined> => {

    let {data} = await axiosInstance.get<ILoadModel>('/users')
    return  data.users
}

export const loadAllPosts= async ():Promise<IPost[]| undefined> => {
    let {data:{posts}} = await axiosInstance.get<ILoadModel>('/posts')
    return posts
}


export const loadAllComments =async ():Promise<IComment[]|undefined>=>{
    let {data:{comments}} = await axiosInstance.get<ILoadModel>('/comments')
    return comments
}