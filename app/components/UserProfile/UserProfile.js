import React from 'react';
import './UserProfile.scss';

export default class UserProfile extends React.Component {

    // What does this component hold? What does it need to keep track of?    
    state = {
        // FILL THIS IN
    }
    
    constructor(props) {
        super(props);
    }

    // This function takes in the text of a new tweet and adds it
    // to the list of tweets
    addTweet = (tweetText) => {
        // FILL THIS IN
    }

    // This function takes in the index of a tweet that was
    // 'liked' by the end user. It then updates that tweet.
    likeTweet = (index) => {
        // FILL THIS IN
    }
    
    // This function takes in the index of a tweet that was
    // 'unliked' by the end user. It then updates that tweet.
    unlikeTweet = (index) => {
        // FILL THIS IN
    }

    // This function calculates the number of tweets this user has 
    // 'liked' and returns it.
    calculateLikeCount = () => {
        // FILL THIS IN
    }

    render() {
        return (
            <div id="user-profile-component">
                Twitter exercise {/* Remove this once you've checked that it shows after running the project for the first time. */}
                <div id="tweet-box" className="row">
                </div>
                <div id="main" className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        )
    }
}
