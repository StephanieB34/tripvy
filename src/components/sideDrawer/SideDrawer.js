import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/Registration">Register</a></li>
            <li><a href="/logout">Log Out</a></li>
        </ul>
    </nav>
);

export default sideDrawer;