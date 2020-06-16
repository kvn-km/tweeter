$(document).ready(function() {
  // NOTE: $.each(arr, (index, arrObj) => {}) is a jQuery style loop
  console.log("hello there");

  let totalChars = 140;
  let charLength = 0;


  // Character counter
  $("#tweet-text").on("input", function() {
    charLength = $(this).val().length; // element.target, instead of 'this', can be used
    let counter = $("output.counter");
    counter.html(totalChars - charLength);
    if (charLength <= 140) {
      counter.replaceWith(`<output name="counter" class="counter" for="tweet-text">${totalChars - charLength}</output>`);
    } else {
      counter.replaceWith(`<output name="counter" class="counter" for="tweet-text" style="color:#ce4590">${totalChars - charLength}</output>`);
    }
  });

  // Create Tweets




});