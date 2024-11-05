import React from 'react';
import MenuResources from "../components/MenuResources/MenuResources";
import {Outlet} from "react-router-dom";

const AuthResourcesLayout = () => {


    return (
        <div>
             <MenuResources/>
            <Outlet/>
        </div>
    );
};
export default AuthResourcesLayout;