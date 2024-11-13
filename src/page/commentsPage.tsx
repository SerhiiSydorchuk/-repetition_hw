import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {apiLoadComments} from "../services/api.service";
import {loadComments} from "../slices/comments.slice";
import Comment from "../components/Comment/Comment";

const CommentsPage = () => {
    let commentsSliceState = useAppSelector(state => state.commentsSlice);
    let dispatch = useAppDispatch();
    useEffect(() => {
        apiLoadComments().then(value => dispatch(loadComments(value)));

    }, []);
    return (
        <div>
            {commentsSliceState.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;