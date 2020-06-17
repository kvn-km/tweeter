/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  console.log("Yo. Doc's Ready!");

  $(".logo").on("click", function() {
    $(window).scrollTop(0);
  });


  function createTweet(tweet) {
    let dateCreatedAt = tweet.created_at;
    let dateRightNow = Date.now();
    let dateCreatedAgo = dateRightNow - dateCreatedAt;
    function dateConverter3000(date) {
      let seconds = (date / 1000).toFixed(1);
      let minutes = (date / (1000 * 60)).toFixed(1);
      let hours = (date / (1000 * 60 * 60)).toFixed(1);
      let days = (date / (1000 * 60 * 60 * 24)).toFixed(1);
      let weeks = (date / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
      let months = (date / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
      let years = (date / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
      if (seconds < 60) {
        if (seconds === 1.0) {
          return `1 second ago`;
        } else {
          return `${seconds} seconds ago`;
        }
      } else if (minutes < 60) {
        if (minutes === 1.0) {
          return `1 minute ago`;
        } else {
          return `${minutes} minutes ago`;
        }
      } else if (hours < 24) {
        if (hours === 1.0) {
          return `1 hour ago`;
        } else {
          return `${hours} hours ago`;
        }
      } else if (days < 7) {
        if (days === 1.0) {
          return `1 day ago`;
        } else {
          return `${days} days ago`;
        }
      } else if (weeks < 5) {
        if (weeks === 1.0) {
          return `1 week ago`;
        } else {
          return `${weeks} weeks ago`;
        }
      } else if (months < 12) {
        if (months === 1.0) {
          return `1 month ago`;
        } else {
          return `${months} months ago`;
        }
      } else {
        if (years === 1.0) {
          return `1 year ago`;
        } else {
          return `${years} years ago`;
        }
      }
    }

    // create elements
    let $tweet_container = $("<article>");
    let $tweet_profileContainer = $("<header>");
    let $tweet_profilePic = $("<span>");
    let $tweet_profileIMG = $("<img>");
    let $tweet_profileName = $("<h3>");
    let $tweet_profileSocialName = $("<span>");
    let $tweet_profileUsername = $("<h4>");
    let $tweet_tweet = $("<p>");
    let $tweet_divider = $("<hr>");
    let $tweet_infoContainer = $("<footer>");
    let $tweet_datePosted = $("<span>");
    let $tweet_socialIcons = $("<span>");
    let $tweet_iconFlag = $("<i>");
    let $tweet_iconRetweet = $("<i>");
    let $tweet_iconHeart = $("<i>");
    // class and id assignment
    $tweet_container.addClass("a_tweet");
    $tweet_profilePic.addClass("profile_pic");
    $tweet_profileSocialName.addClass("profile_name");
    $tweet_datePosted.addClass("date_posted");
    $tweet_socialIcons.addClass("social_icons");
    $tweet_iconFlag.addClass("icons fas fa-flag");
    $tweet_iconRetweet.addClass("icons fas fa-reply");
    $tweet_iconHeart.addClass("icons fas fa-heart");
    // additional attributes where necessary
    $tweet_profileIMG.attr({ "src": tweet.user.avatars, "width": "50", "height": "50" });
    // add content to the elements
    $tweet_profileName.text(tweet.user.name);
    $tweet_profileUsername.text(tweet.user.handle);
    $tweet_tweet.text(tweet.content.text);
    $tweet_datePosted.text(dateConverter3000(dateCreatedAgo));
    //build the elements
    $tweet_container
      .append($tweet_profileContainer
        .append($tweet_profilePic
          .append($tweet_profileIMG)
          .append($tweet_profileName)
        )
        .append($tweet_profileSocialName
          .append($tweet_profileUsername)
        )
      )
      .append($tweet_tweet)
      .append($tweet_divider)
      .append($tweet_infoContainer
        .append($tweet_datePosted)
        .append($tweet_socialIcons
          .append($tweet_iconFlag)
          .append($tweet_iconRetweet)
          .append($tweet_iconHeart)
        )
      );
    return $tweet_container;
  }

  const renderTweets = (tweetsDB, targetElement) => {
    for (const tweet of tweetsDB) {
      $(targetElement).prepend(createTweet(tweet));
    };
  };

  function getTweets() {
    return $.get("/tweets");
  }

  $("form").submit(function() {
    event.preventDefault();
    let theTweet = $(this).serialize();
    $.post("/tweets/", theTweet)
      .then(
        function() {
          getTweets()
            .then((tweets) => {
              $("#tweet_text").val("");
              $("#all_tweets").empty();
              renderTweets(tweets, "#all_tweets");
            });
        },
        function(err) {
          console.error("POST FAIL", error);
        }
      );
  });

  getTweets()
    .then(response => { renderTweets(response, "#all_tweets"); })
    .fail(error => { console.log("Initial GET Fail", error); });









});