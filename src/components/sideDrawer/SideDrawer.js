import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
   let drawerClasses = ['side-drawer'];
   if(props.show) {
       drawerClasses = ['side-drawer open'];
   }
   return( <nav className={drawerClasses}>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/Registration">Register</a></li>
            <li><a href="/logout">Log Out</a></li>
        </ul>
    </nav>);
};

export default sideDrawer;