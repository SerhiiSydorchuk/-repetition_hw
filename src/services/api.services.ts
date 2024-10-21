import axios from "axios";
import {IResponsePostsModel} from "../models/IResponsePostsModel";
import {IPost} from "../models/IPosts";

let axiosInstance = axios.create({
    baseURL : 'https://dummyjson.com',
    headers:{"Content-Type": "application/json"}
});


export const apiServices   = {
    posts: {

      getAll : async (page:number):Promise<{ data: IResponsePostsModel & {posts: IPost[]} , flag: boolean}>  => {
          let limit = 30
          let skip = (page - 1) * limit
          let { data   }  = await axiosInstance.get<IResponsePostsModel & { posts: IPost[]} >('/posts', {params:{skip:skip , limit : limit }})
          let flag = +data.posts.length<limit ;
          console.log(flag);
          return { data ,  flag}
      }
    }
}