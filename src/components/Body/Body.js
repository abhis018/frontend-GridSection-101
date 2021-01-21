import React from 'react';
import './Body.css';

const Body = () => {
    return (
        <div className="body">
            <div className="header">
                <h3>Join our community</h3>
                <h4><span>30-day, hassle-free money back guarantee</span></h4>
                <p className="b">
                    Gain access to our full library of tutorials along with expert code reviews. 
                    Perfect for any developers who are serious about honing their skills.
                </p>
            </div>
            <div className="footer">
                <div className="foot1">
                    <h3>Monthly Subscription</h3>
                    <h4><h1>&#36; 29</h1>  per month</h4>
                    <p>Full access for less than &#36;1 a day</p>
                    <button className="grow">Sign up</button>
                </div>
                <div className="foot2">
                    <h3>Why Us</h3>
                    <p className=" fw1">
                        Tutorials by industry experts<br/>
                        Peer &amp; expert code review<br/>
                        Coding exercises<br/>
                        Access to our GitHub repos<br/>
                        Community forum<br/>
                        Flashcard decks<br/>
                        New videos every week
                    </p>
                </div>
            </div>
        </div> 
    )
}

export default Body;