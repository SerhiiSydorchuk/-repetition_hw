import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
type CommentProps={
    comment: IComment;
}
const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            <h4>Comment ID - {comment.id}  Post ID - {comment.postId}</h4>
            <h6>{comment.body}</h6>
        </div>
    );
};

export default Comment;