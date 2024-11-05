import React from 'react';
import {Link} from "react-router-dom";

const MenuResources = () => {
    return (
        <ul>
            <li><Link to={'posts'}>Posts</Link></li>
            <li><Link to={'products'}>Products</Link></li>
        </ul>
    );
};

export default MenuResources;