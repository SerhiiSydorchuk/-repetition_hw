import React, {FC} from 'react';
import {IPost} from "../../models/IPost";


type PostProps = {
    post: IPost;
}
const Post:FC<PostProps> = ({post}) => {
    return (
        <div>
               <h4>Post ID - {post.id}  User ID - {post.userId}</h4>
               <h6>{post.title}</h6>
        </div>
    );
};

export default Post;