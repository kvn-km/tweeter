// const createTweet = require("./helpFunction-tweets");

$(document).ready(() => {
  console.log("Yo. Doc's Ready!");

  // make sure textarea is hidden at start
  $(".new_tweet").toggleClass("visible");

  // bring me back to the top of the page when clicking the logo
  $(".logo").click(function() {
    $(window).scrollTop(0);
  });

  $(".tagline").click(function() {
    if ($(".new_tweet").hasClass("visible")) {
      $(".new_tweet").animate({ "margin-top": "-9rem", "opacity": "0" });
      $(".new_tweet").toggleClass("visible");
      $("#tweet_text").blur();
    } else {
      $(".new_tweet").animate({ "margin-top": "0rem", "opacity": "100" });
      $(".new_tweet").toggleClass("visible");
      $("#tweet_text").focus();
    }
  });

  $("form").submit(function() {
    event.preventDefault();
    let tweetTextSample = $("#tweet_text").val();
    if (tweetTextSample.length > 140) { // REF: 1. Throw error if tweet is too long. 
      $("[id=errorMSG]").animate({ "margin-left": "15px", "opacity": "100" });
    } else if (tweetTextSample.length > 0 && tweetTextSample.length <= 140) {
      let theTweet = $(this).serialize();
      $.post("/tweets/", theTweet)
        .then(
          function() {
            getTweets()
              .then((tweets) => {
                $("#tweet_text").val(""); // clear the text field
                $(".counter").val("140"); // reset counter
                $("#all_tweets").empty(); // clear the current tweet container
                renderTweets(tweets, "#all_tweets"); // re-render tweets
              });
          },
          function(err) { // if errors, throw errors
            console.error("POST FAIL", error);
          }
        );
    }
  });

  // page load get tweets
  getTweets()
    .then(response => { renderTweets(response, "#all_tweets"); })
    .catch(error => { console.log("Initial GET Fail", error); });

  // REF: 1. if error was thrown, remove it when the textarea is being adjusted
  $("[id=tweet_text]").on("input", function() {
    $("[id=errorMSG]").animate({ "margin-left": "120px", "opacity": "0" });
  });

});