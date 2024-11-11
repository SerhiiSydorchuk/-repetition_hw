import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
           <li><Link to={''}>Home Page</Link></li>
           <li><Link to={'/users'}>Load Users</Link></li>
           <li><Link to={'/posts'}>Load Posts</Link></li>
           <li><Link to={'/comments'}>Load Comments</Link></li>
           <li><Link to={'/show'}> Show Load </Link></li>
        </ul>
    );
};

export default Menu;