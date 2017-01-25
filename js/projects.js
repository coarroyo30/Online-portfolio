var activeProject;
var isAutoPlay = true;



/**
 * HELPER Returns the first URL of the image representing a skill referenced by the
 * techCode attribute. If multiple items with the same code exist, it returns
 * the first one it finds, otherwise an empty string
 * @param tech: list of Objects
 * @param techCode: string
 * @return string
 */
function getTechImage(tech, techCode) {
  for (var i = 0; i < tech.length; i++) {
    if (tech[i].code === techCode) {
      return tech[i].image;
    }
  }
  return '';
}



/**
 * Renderes the .project-details element with content from the projects
 * list and replaces any existing content inside the div
 * @param project: Object
 */
function renderProjectDetails(project) {
  var html = '';
  // Generate a list of skills used as a list of html images
  var techList = '';
  for (var i = 0; i < project.tech.length; i++) {
    techList += '<li><img src="images/' + getTechImage(tech, project.tech[i])+ '" alt=""></li>';
  }

  // Assemble the HTML output to be appended to the DOM
  html += '<div class="project-preview"><img src="images/' + project.preview + '" alt=""></div>';
  html += '<h3>' + project.name + '</h3>';
  html += '<div class="project-links">';
  html += '  <a href="' + project.url + '" target="_blank" class="btn-project-view">Demo</a>';
  html += '  <a href="' + project.github + '" target="_blank" class="btn-project-github">GitHub</a>';
  html += '</div>';
  html += '<p>' + project.description + '</p>';
  html += '<ul class="skills">';
  html +=    techList;
  html += '</ul>';

  // Fade out existing content and fade in the new one
  var h = $('.project-details').height();
  $('.project-details').height(h).fadeOut(300, function() {
    $(this).html(html).fadeIn(300, function() {
      $(this).height('auto');
    });
  });
}



/**
 * HELPER function that sets the appropriate active classes
 * to project list navigation elements
 **/
 function setActiveProject(id){
   activeProject = id;
   var navElement = $('*[data-id="' + id + '"]');
   $('.project-list li').removeClass('active');
   navElement.addClass('active');
 }



/**
 * EVENT handler for round project selectors
 * Grabs the project id from the data-id attribute and renderes the project
 */
$('.project-list li').click(function(e) {
  e.preventDefault();
  isAutoPlay = false;
  var projectId = $(this).attr('data-id');
  if (projectId !== activeProject) {
    renderProjectDetails(projects[projectId]);
    // Mark current project as active and set appropriate classes
    setActiveProject(projectId);
  }
});



/**
 * INTERVAL handler for auto playback feature
 * Keeps rotating automatically through all projects every 3 seconds
 * until the first project is selected and the isAutoPlay is set to false
 */
 var autoPlay = setInterval(function() {
   if (isAutoPlay) {
     if (activeProject === projects.length - 1) {
       setActiveProject(0);
     } else {
       setActiveProject(activeProject + 1);
     }
     renderProjectDetails(projects[activeProject]);
   } else {
     clearInterval(autoPlay);
   }
 }, 10000);