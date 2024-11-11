import React, {FC} from 'react';
import {IUserWithPosts} from "../../model/IUserWithPosts";
interface IProps {
    items:IUserWithPosts[]
}
const UserWithPosts:FC<IProps> = ({items}) => {
    return (
        <div>
            {items.map(item=><div key={item.id}>
                <h4>{item.id} {item.firstName}</h4>
                <ul>
                    {item.posts.map(post=><li key={post.id}>{post.userId} {post.body}</li>)}
                </ul>

            </div>)}
        </div>
    );
};

export default UserWithPosts;