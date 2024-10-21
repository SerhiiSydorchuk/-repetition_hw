import React, {useEffect, useState} from 'react';
import PaginationComponents from "../pagination/PaginationComponents";
import {useSearchParams} from "react-router-dom";
import {apiServices} from "../services/api.services";
import {IPost} from "../models/IPosts";

const PostsPage = () => {
    const [query, setQuery ]= useSearchParams({page:'1'})
    const [posts, setPosts] = useState<IPost[]>([])
    const [flag, setFlag] = useState<boolean>(false);
    useEffect(() => {
        const page = query.get('page')
        if(page) {
          apiServices.posts.getAll(+page).then(value => {
                  setPosts(value.data.posts)
                  setFlag(value.flag)
              // let lastId = +value.posts[value.posts.length-1].id
              // if(lastId>=value.total){
              //     setFlag(true);
              // }else {
              //     setFlag(false);
              // }


              }
          )
        }
        }, [query]);
    return (
        <div>
            {posts.map(post=> <div key={post.id}> {post.id} - {post.body}</div>)}
             <PaginationComponents  flag={flag}/>
        </div>
    );
};

export default PostsPage;