import React from 'react';
/*import {connect} from 'react-redux';*/
/*import {Link} from 'react-router-dom';*/

import  './navbar.css';

import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
//Renders navigation bar
const navbar = props => (
        <nav className="navbar-menu">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div></div>
            <div className="navbar-items">
               
            </div>

        </nav>
    
);

export default navbar;