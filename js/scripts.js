$(document).ready(function() {

  // Preload Images
  //preloadImages();

  // Smooth scrolling to local anchors
  $(function() {
    $('.main-nav a').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          var speed = 1500 / $('body').height() * target.offset().top;
          $('html, body').animate({
            scrollTop: target.offset().top
          }, speed);
          return false;
        }
    });
  });

  // Main animation sequence on page load
  setTimeout(function() {
    animateHeader();
  }, 3000);

  // Render the first project
  setActiveProject(0);
  renderProjectDetails(projects[activeProject]);

 
});