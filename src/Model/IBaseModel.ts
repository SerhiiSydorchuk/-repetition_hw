import {IPost} from "./IPost";
import {IProduct} from "./IProduct";

export interface IBaseModel {
    skip:number
    total:number
    limit:number
    posts?:IPost[]
    products?:IProduct[]
}