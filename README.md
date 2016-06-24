# hello-twitter-exercise

## Background

This repository contains starter code and instructions for a lab exercise involving React.

## Objective

You are to make a stripped down Twitter user profile page. Through completing this exercise, you will learn the basic concepts of React including creating components, handling state, and passing properties. 

## Setup

1. [Install](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) React's developer tools Chrome extension if you haven't already. 
2. Clone this repoistory: ``git clone https://github.com/dopeboy/hello-twitter-exercise.git``
2. Download the necessary Node packages: ``npm install``
3. Launch a local instance: ``node server.js``.
4. Open `http://0.0.0.0:3000/` in Chrome. If you do not see "Twitter exercise" in the upper left hand corner, flag down an instructor.

## Requirements

You are to make a single Twitter profile page. Your page must implement the following requirements:

1. The user shall be able to write a tweet, submit it, and have it show on their own feed.
2. The user shall be able to 'like' their own tweet.
3. The user shall be able to 'unlike' their own tweet.
4. The page shall show a count of the number of tweets the user has written. This count should increment each time the user submits a new tweet.
5. The page shall show a count of the number of likes the user has done. This count should increment and decrement as the user likes and unlikes their tweets respectively. 

A sample of what the page should look like and do is below:

![img](http://i.imgur.com/ydeszHc.gif)

## Instructions

1. Take out a sheet of paper and start sketching out the components. Think about the parent-child relationships each component should have. Think about which component should own the important state elements like the list of tweets. Once you're done, flag down an instructor before you proceed.
2. Open `app/components/UserProfile/UserProfile.js`. This will be your top level component. Read through the existing code and comments.
3. Going left to right, start implementing the components one at a time. 

## Stretch goals

1. Enforce the 160 character limitation. 
2. Your page starts with an empty list of tweets. That's boring. Use [Myjson](http://myjson.com/) to create a simple endpoint that has some sample tweet data. Then use jQuery to perform an AJAX GET on that endpoint when your page loads. You may need to do some research to find out where this call goes in your `UserProfile` component. 
