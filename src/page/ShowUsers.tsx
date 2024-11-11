import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../store";
import User from "../components/user/user";
import {IUserWithPosts} from "../model/IUserWithPosts";
import UserWithPosts from "../components/UserWithPosts/UserWithPosts";



const ShowUsers = () => {
    const [userPostsState, setUserPostsState] = useState<IUserWithPosts[]>([])

    let {userSlice:{allUsers},postSlice:{allPosts}} = useStore()
    const postsOfUser = useMemo(() => {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => user.id === post.userId)}
        });
    }, [allUsers, allPosts]);
    useEffect(() => {
        setUserPostsState(postsOfUser)
    }, [postsOfUser]);
    return (
        <div>
             <UserWithPosts items={userPostsState}/>


        </div>
    );
};

export default ShowUsers;