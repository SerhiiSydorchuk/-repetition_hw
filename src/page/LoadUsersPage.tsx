import React, {useEffect} from 'react';
import {loadAllUsers} from "../services/api.service";
import {useStore} from "../store";
import User from "../components/user/user";

const LoadUsersPage = () => {
   let {userSlice:{loadUsers,allUsers,favoriteUser}} = useStore()
    useEffect(() => {
        loadAllUsers().then(value => {
            if(value) {
                loadUsers(value)
            }
        })
    }, []);
    return (
        <div>
            {allUsers.map(user => <User user={user} key={user.id}/>)}
            <hr/>
            {favoriteUser && <div>{favoriteUser.id} {favoriteUser.username}</div>}
            <hr/>
        </div>
    );
};

export default LoadUsersPage;