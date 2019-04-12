import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import  './create-page.css';

export function createPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/createPage" />;
    }

    return (
        <div>
        <header> 
        <h1>Tripvy</h1>
        </header>
            <div className="create-page">
      
            <form id="list">
                <p>Where are you going?</p><br/>
                <input type="text" name="location" id="location"/>
                <br/>
                <br/>
                <p>What do you need?</p><br/>
                <input type="text" name="item" id="item"/>
                <br/>
                <input type="text" name="item" id="item"/>
                <br/>
                <input type="text" name="item" id="item"/>
                <br/>
                <button id="add">Add Field</button>
            </form>
            </div>
            <div class="footer">
                <p>Stephanie Beres</p>
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(createPage);
