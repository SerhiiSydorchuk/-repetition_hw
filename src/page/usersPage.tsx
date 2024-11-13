import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {apiLoadUsers} from "../services/api.service";
import User from "../components/User/user";
import {loadUsers} from "../slices/user.slice";

const UsersPage = () => {
    let userSliceState = useAppSelector(state => state.userSlice);
    let dispatch =useAppDispatch()
    useEffect(() => {
         apiLoadUsers().then(value => dispatch(loadUsers(value) ))
    }, []);
    return (
        <div>
            {userSliceState.users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;