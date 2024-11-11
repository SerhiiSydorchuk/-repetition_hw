import React, {FC} from 'react';
import {IUser} from "../../model/IUser";
import {useStore} from "../../store";
interface IProps {
    user:IUser
}
const User:FC<IProps> = ({user}) => {
    let {userSlice:{getFavoriteUser}} =  useStore()
    return (
        <div>
            {user.id} {user.firstName}
            <button onClick={()=>getFavoriteUser(user)}>get as Favorite</button>

        </div>)

};

export default User;