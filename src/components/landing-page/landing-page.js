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
            <header>Tripvy</header>
            <h1>Planning for your trip shouldn't be stressful</h1>
        </div>
    
        <section class="about-section">
            <div class="text-container">
                <h2>About</h2>
                <p>
                    Tripvy is a tool that allows users to 
                    plan in advance what they need for their
                    trip. Whether it’s clothes, toiletries, beauty
                    products, or work portfolios, Tripvy 
                    has you covered.
                </p>
            </div>
        </section>
        
        <section class="photo-section">
            <h3>Tripvy</h3>
            <div class="text-block">
                <p>Plan</p>
                <div class="landing-img" id="landing-img-1"></div>
            </div>
            <div class="text-block">s
                <p>Pack</p>
                <div class="landing-img" id="landing-img-2"></div>
            </div>
            <div class="text-block">
                <p>Enjoy</p>
                <div class="landing-img" id="landing-img-3"></div>
            </div>
        </section>
    
        <section class="why-section">
            <div class="text-container-2">
            <h4>Why use Tripvy?</h4>
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
