import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import  './navbar.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
        <div class="top">
			<a href="#" class="menu_icon"><i class="material-icons"></i></a>
		</div>
	
	    <nav class="menu">
		    <a href="#" class="item_menu">home</a>
		    <a href="#" class="item_menu">about</a>
		    <a href="#" class="item_menu">products</a>
		    <a href="#" class="item_menu">services</a>
		    <a href="#" class="item_menu">contact</a>
	    </nav>
        </div>
        );
    }
    
    const mapStateToProps = state => ({
        loggedIn: state.auth.currentUser !== null
    });
    
    export default connect(mapStateToProps)(navbar);
    