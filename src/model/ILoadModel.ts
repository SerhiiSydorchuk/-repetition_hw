import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type ILoadModel = {
    total:number,
    skip:number,
    limit:number,
    users?:IUser[],
    posts?:IPost[],
    comments?:IComment[]
}