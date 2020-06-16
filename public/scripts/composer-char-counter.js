$(document).ready(function() {
  console.log("hello there");


  // $(document).on("keypress", "#tweet-text", () => {
  //   console.log("keypressss");
  // });

  // all keys, including modifyers
  // $(document).on("keydown", "#tweet-text", () => {
  //   console.log("keeyydonwwnnwn");
  // });

  // $(document).on("keyup", "#tweet-text", () => {
  //   console.log("keyuppppp");
  // });

  // when element loses focues
  // $(document).on("blur", "#tweet-text", () => {
  //   console.log("bblluurrrrrr");
  // });

  // when input area has changed, registered upon blur
  // $(document).on("change", "#tweet-text", () => {
  //   console.log("cchhaannggee");
  // });

  // $(document).on("keypress", "#tweet-text", function() {
  //   console.log(this);
  //   console.log(this["id"]);
  //   console.log($("textarea#tweet-text").val().length);
  // });

  let totalChars = 140;
  let charLength = 0;

  $(document).on("input", "#tweet-text", function() {
    charLength = $("textarea#tweet-text").val().length;
    $("output.counter").html(totalChars - charLength);
    if (charLength <= 140) {
      $("output.counter").replaceWith(`<output name="counter" class="counter" for="tweet-text">${totalChars - charLength}</output>`);
    } else {
      $("output.counter").replaceWith(`<output name="counter" class="counter" for="tweet-text" style="color:red">${totalChars - charLength}</output>`);
    }
  });

  // element.target, instead of 'this', can be used
  //  $.each(arr, (index, arrObj) => {}) is a jQuery style loop

});