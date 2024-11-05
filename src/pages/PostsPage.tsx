import React, {useEffect, useState} from 'react';
import {IPost} from "../Model/IPost";
import {loadAuthPosts, refresh} from "../services/api.service";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        loadAuthPosts()
            .then(value => {
                if(value){
                    setPosts(value)}
            })
            .catch( reason => {
                refresh().then()
            })
    }, []);
    return (
        <div>
            {posts.map(post=><div>{post.id}</div>)}
        </div>
    );
};

export default PostsPage;