/**
 * Animates the Main Header
 * Recursevely animates the h1 element one character at a time
 * Fades in the remaining page elements in sequence
 */
function animateHeader() {
  var start = 0;
  var element = $('.main-heading');

  // Wraps each character in span blocks
  var plainText = element.text();
  var blockText = '';
  for (var i = 0; i < plainText.length; i++) {
    blockText += '<span>' + plainText[i] + '</span>';
  }
  element.html(blockText);

  // Helper function for generating a random number
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Recursevely shows each character of the main heading
  // with a random delay between each character
  function recursiveAnimate(el, start) {
    if (start < el.children().length) {
      el.children().eq(start).addClass('visible');
      setTimeout(function(){
        recursiveAnimate(el, start + 1);
      }, randomInt(30, 250));

    // On completion, call function to animate the remainign elements
    } else {
      setTimeout(function() {
        $('.main-intro').fadeIn(1000);
      }, 500);
      setTimeout(function() {
        $('.main-nav').fadeIn(1000);
      }, 1500);
      setTimeout(function() {
        $('.main-content').fadeIn(1000);
        $('.main-footer').fadeIn(1000);
      }, 2500);

    }
  }
  recursiveAnimate(element, start);
}