import {create} from "zustand/react";
import {IUser} from "./model/IUser";
import {IPost} from "./model/IPost";
import {IComment} from "./model/IComment";
type StoreType = {
    userSlice:{
        allUsers: IUser[];
        loadUsers:(users:IUser[])=>void
        getFavoriteUser: (user: IUser) => void
        favoriteUser:IUser | null
    },
    postSlice:{
        allPosts:IPost[],
        loadPosts: (posts:IPost[])=>void
    },
    commentSlice:{
        allComments:IComment[],
        loadComments:(comments:IComment[])=>void
    }


}
export let useStore= create<StoreType>()((set)=>{
    return{

         userSlice:{
             allUsers:[],
             loadUsers:(users)=>{
                 return set((state)=>{
                     return {
                         ...state,userSlice:{
                             ...state.userSlice,
                             allUsers:users
                         }
                     }
                 })
             },
             favoriteUser:null,
             getFavoriteUser:(user)=>{
                 return set((state)=>{
                     return {...state, userSlice:{
                         ...state.userSlice,
                             favoriteUser:user
                         }}
                 })
             }
         },
        postSlice : {
             allPosts:[],
            loadPosts:(posts) =>{
                 return set((state)=>{
                     return {
                         ...state,postSlice:{
                             ...state.postSlice,
                             allPosts:posts
                         }
                     }
                 })
             }

        },
        commentSlice:{
             allComments:[],
            loadComments:(comments)=>{
                 return set((state)=>{
                     return {
                         ...state,commentSlice:{
                             ...state.commentSlice,
                             allComments:comments

                         }
                     }
                 })
            }
        }

    }
})