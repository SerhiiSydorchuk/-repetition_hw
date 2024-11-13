import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
           <li><Link to={''}>Home page</Link></li>
           <li><Link to={'users'}>Users page</Link></li>
           <li><Link to={'posts'}>Posts page</Link></li>
           <li><Link to={'comments'}>Comments page</Link></li>
           <li><Link to={'show'}>Posts with comments  page</Link></li>
        </ul>
    );
};

export default Menu;