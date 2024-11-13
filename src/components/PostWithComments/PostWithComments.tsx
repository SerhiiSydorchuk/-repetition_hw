import React, {FC} from 'react';
import {IPostWithComments} from "../../models/IPostWithComments";
import AllComments from "../AllComments/AllComments";
type ItemProps = {
    item:IPostWithComments
}
const PostWithComments:FC<ItemProps> = ({item}) => {
    return (
        <div>
            <h4>Post ID- {item.id} {item.title}</h4>
            <ul>
                {item.comments.map(comment=><AllComments key={comment.id} comment={comment}/>)}
            </ul>
        </div>
    );
};

export default PostWithComments;