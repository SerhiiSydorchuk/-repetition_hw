 import axios from "axios";
 import {IUserLogin} from "../Model/IUserLogin";
 import {IUserWithToken} from "../Model/IUserWithToken";
 import {IBaseModel} from "../Model/IBaseModel";
 import {IPost} from "../Model/IPost";
 import {retrieveLocalStorage} from "../helpers/helper";
 import {IRefresh} from "../Model/IRefresh";
 import {IProduct} from "../Model/IProduct";

 let axiosInstance = axios.create({
     baseURL : 'https://dummyjson.com/auth',
     headers:{}
 });


 axiosInstance.interceptors.request.use(request => {
     console.log(request);
     if (request.method?.toUpperCase() === 'GET') {
         const token = retrieveLocalStorage<IUserWithToken>('user').accessToken
         request.headers.Authorization = "Bearer " + token
     }
     return request
 });


 
 export const loginService = async (dataForm: IUserLogin): Promise<IUserWithToken> => {
     const {data: userWithTokens} = await axiosInstance.post<IUserWithToken>('/login', dataForm)
     localStorage.setItem('user', JSON.stringify(userWithTokens))
     return userWithTokens
 };

 export const loadAuthPosts = async (): Promise<IPost[] | undefined> => {
     const {data} = await axiosInstance.get<IBaseModel>('/posts');
     return data.posts
 };
 export const refresh = async ()=>{
     console.log(refresh);
     const IUserWithNewToken = retrieveLocalStorage<IUserWithToken>('user');
    const {data:{refreshToken,accessToken}}= await axiosInstance.post<IRefresh>('/refresh', {
         refreshToken: IUserWithNewToken.refreshToken,
         expiresInMins: 1
     })
     IUserWithNewToken.refreshToken = refreshToken;
     IUserWithNewToken.accessToken = accessToken;
     localStorage.setItem('user', JSON.stringify(IUserWithNewToken));
 }
 export const loadAuthProducts= async (): Promise<IProduct[] | undefined> => {
     const {data} = await axiosInstance.get<IBaseModel>('/products');
     return data.products
 };