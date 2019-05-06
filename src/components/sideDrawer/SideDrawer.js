import React from 'react';
import { Link } from "react-router-dom";

import './SideDrawer.css';

const sideDrawer = props => {
   let drawerClasses = ['side-drawer'];
   if(props.show) {
       drawerClasses = ['side-drawer open'];
   }
   return( <nav className={drawerClasses}>
        
            <Link className="links" to="/login">Login</Link>
            <Link className="links" to="/Registration">Register</Link>
            <Link className="links" to="/logout">Log Out</Link>
            <Link className="links" to="/dashboard">Dashboard</Link>
            <Link className="links" to="/create">Add a Trip</Link>
        
    </nav>);
};

export default sideDrawer;