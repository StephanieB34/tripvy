import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import  './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div id="landing-page">
        <div id="landing-page-intro">
            <h1 className= "landing-header">Tripvy</h1>
            <h2 className="landing-header-2">Planning for your trip shouldn't be stressful</h2>
        </div>
    
        <section className="about-section">
            <div className="text-container">
                <h3>About</h3>
                <p>
                    Tripvy is a tool that allows users to 
                    plan in advance what they need for their
                    trip. Whether it’s clothes, toiletries, beauty
                    products, or work portfolios, Tripvy 
                    has you covered.
                </p>
            </div>
        </section>
        
        <section className="photo-section">
            <h4>Tripvy</h4>
            <div className="text-block">
                <p>Plan</p>
                <div className="landing-img" id="landing-img-1"></div>
            </div>
            <div className="text-block">
                <p>Pack</p>
                <div className="landing-img" id="landing-img-2"></div>
            </div>
            <div className="text-block">
                <p>Enjoy</p>
                <div className="landing-img" id="landing-img-3"></div>
            </div>
        </section>
    
        <section className="why-section">
            <div className="text-container-2">
            <h5>Why use Tripvy?</h5>
                <p>
                    There is nothing worse than getting to your new destination 
                    and realizing you have forgotten your most important items, 
                    or even worse, realizing you have forgotten important work 
                    related items. Tripvy prevents these disasters from happening. 
                    Try it now!
                </p>
            </div>
        </section>
    </div>
     
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
