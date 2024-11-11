import React, {useEffect} from 'react';
import {loadAllPosts} from "../services/api.service";
import {useStore} from "../store";


const LoadPostsPage = () => {
let {postSlice:{loadPosts, allPosts}} = useStore()
    useEffect(() => {
        loadAllPosts().then(value => {
            if(value){
                loadPosts(value)
            }
        })
    }, []);


    return (
        <div>
            {allPosts.map(post=><div>{post.id} - {post.title}</div>)}
        </div>
    );
};

export default LoadPostsPage;