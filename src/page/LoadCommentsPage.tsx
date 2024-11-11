import React, {useEffect} from 'react';
import {useStore} from "../store";
import {loadAllComments} from "../services/api.service";

const LoadCommentsPage = () => {
    let {commentSlice:{loadComments,allComments}} = useStore()
    useEffect(() => {
        loadAllComments().then(value => {
            if(value)
            {
                loadComments(value)
            }
        })
    }, []);
    return (
        <div>
            {allComments.map(comment=> <div>{comment.id}- {comment.body}</div>)}
        </div>
    );
};

export default LoadCommentsPage;