import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
type CommentProps={
    comment:IComment
}
const AllComments:FC<CommentProps> = ({comment}) => {
    return (

            <li>
                {comment.id} Post ID {comment.postId} {comment.body}
            </li>

    );
};

export default AllComments;