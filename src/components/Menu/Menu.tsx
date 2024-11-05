import React from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css'
const Menu = () => {
    return (
        <div>
              <ul className={styles.menu}>
                  <li><Link to={'/'}>Home Page</Link> </li>
                  <li><Link to={'/login'}>Login Page</Link> </li>
                  <li><Link to={'/auth/resources'}>Resources</Link> </li>
              </ul>
            <hr />
        </div>
    );
};

export default Menu;