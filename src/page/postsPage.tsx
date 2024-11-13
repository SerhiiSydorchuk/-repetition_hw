import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector} from "../redux/store";
import {apiLoadPosts} from "../services/api.service";

import Post from "../components/Post/Post";
import {loadPosts} from "../slices/posts.slice";

const PostsPage = () => {
    let postsSliceState = useAppSelector(state => state.postsSlice);
    let dispatch = useAppDispatch();
    useEffect(() => {
        apiLoadPosts().then(value => dispatch(loadPosts(value)))
    }, []);
    return (
        <div>
            {postsSliceState.posts.map(post =><Post post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsPage;