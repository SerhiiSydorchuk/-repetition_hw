import React from 'react';
import Menu from "../components/Menu/MEnu";
import {Outlet} from "react-router-dom";

const homePage = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );

};

export default homePage;