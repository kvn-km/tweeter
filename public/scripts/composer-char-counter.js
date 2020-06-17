$(document).ready(function() {
  console.log("hello console!");

  $(".logo").on("click", function() {
    $(window).scrollTop(0);
  });





  // Character counter
  let maxChars = 140;
  let charLength = 0;
  $("#tweet-text").on("input", function() {
    charLength = $(this).val().length;
    let parentSection = $(this).closest("section");
    let counter = parentSection.find(".counter");
    if (charLength <= 140) {
      counter.css({ "color": "#545149" });
      counter.val(maxChars - charLength);
    } else {
      counter.css({ "color": "#ce4590" });
      counter.val(maxChars - charLength);
    }
  });


});