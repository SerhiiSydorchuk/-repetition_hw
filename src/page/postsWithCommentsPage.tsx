import React, {useEffect, useMemo, useState} from 'react';
import {useAppSelector} from "../redux/store";
import {IPostWithComments} from "../models/IPostWithComments";
import PostWithComments from "../components/PostWithComments/PostWithComments";

const PostsWithCommentsPage = () => {
    let postsSliceState = useAppSelector(state => state.postsSlice)
    let commentsSliceState = useAppSelector(state => state.commentsSlice)
    const [postState, setPostState] = useState<IPostWithComments[]>([])
    let postWithComments = useMemo(() => {
        return postsSliceState.posts.map(post => {
            return {...post, comments: commentsSliceState.comments.filter(comment => post.id === comment.postId)}
        })
    },[postsSliceState,commentsSliceState]);
    useEffect(() => {
        setPostState(postWithComments)
    }, [postWithComments]);
    return (
        <div>
            {postState.map(item=><PostWithComments item={item} key={item.id}/>)}
        </div>
    );
};

export default PostsWithCommentsPage;