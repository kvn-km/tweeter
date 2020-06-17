/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



function createTweetElement() {

  const tArticle = $("<article>");
  const tHeader = $("<header>");
  const tSpan = $("<span>");



}

// const $tweet = $(`<article class="tweet">Hello world</article>`);
const $tweet = createTweetElement(tweetData);

// Test / driver code
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};
console.log($tweet); // to see what it looks like

$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



// remember:

// $("form").serialize();
// or some sort of syntax like that, will take a form data and make it into string for data transfer, andthen will parse to json auto.