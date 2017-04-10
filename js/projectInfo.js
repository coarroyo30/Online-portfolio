var projects = [
{
	"name" : "Responsive layout with Sass",
	"url" : "http://coarroyo30.github.io/responsive/",
	"github" : "http://github.com/coarroyo30/responsive",
	"description" : "This project was originally done using CSS. It was then remade using Sass to make the code more maintainable. This project also displays the different breakpoints for mobile, tablets, and desktop devices.",
	"preview" : "project-5.jpg",
	"tech" : ["html", "css", "sass", "github"]
},
{
	"name" : "Interactive video player",
	"url" : "http://coarroyo30.github.io/video/",
	"github" : "http://github.com/coarroyo30/video",
	"description" : "This project was made with html, css, Sass, and Javascript. The controls for the video were custom made. As the video plays the text beneath the video is being highlighted.",
	"preview" : "project-7.jpg",
	"tech" : ["html", "css", "sass", "js", "github"]
},
{
	"name" : "API gallery",
	"url" : "http://coarroyo30.github.io/api/",
	"github" : "http://github.com/coarroyo30/api",
	"description" : "This project was made with the Spotify API. Ajax is used to get information from the API and display it in a gallery. If an image is clicked a lightbox will appear, displaying all the information of the item that has been clicked.",
	"preview" : "project-10.jpg",
	"tech" : ["html", "css", "sass", "js", "jquery", "github"]
},
{
	"name" : "Web app dashboard",
	"url" : "http://coarroyo30.github.io/app/",
	"github" : "http://github.com/coarroyo30/app",
	"description" : "This project is a web app dashboard. It was made Javascript driven charts and graphs. It is a front end app only. ",
	"preview" : "project-9.jpg",
	"tech" : ["html", "css", "sass", "js", "github"]
},
{
	"name" : "Performance optimization",
	"url" : "http://coarroyo30.github.io/optimize/",
	"github" : "http://github.com/coarroyo30/optimize",
	"description" : "In this project the performance of the website had to be optimized. The original project had 43 network requests, and it was remade to have 26 network requests. Images were resized, and the overall website was made to load faster.",
	"preview" : "project-11.jpg",
	"tech" : ["html", "css", "sass", "js", "github"]
}
];


var tech = [
  {
    "name" : "JavaScript",
    "code" : "js",
    "type" : "language",
    "image" : "js.svg",
  },
  {
    "name" : "HTML 5",
    "code" : "html",
    "type" : "language",
    "image" : "html5.svg",
  },
  {
    "name" : "CSS 3",
    "code" : "css",
    "type" : "language",
    "image" : "css3.svg",
  },
  {
    "name" : "jQuery",
    "code" : "jquery",
    "type" : "framework",
    "image" : "jquery.svg",
  },
  {
    "name" : "Sass",
    "code" : "sass",
    "type" : "framework",
    "image" : "sass.svg",
  },
  {
    "name" : "GitHub",
    "code" : "github",
    "type" : "tool",
    "image" : "github.svg",
  }
  ];


/**
 * Preload all project images
 */
function preloadImages() {
  $(projects).each(function() {
    $('<img/>')[0].src = 'images/' + this.preview;
  });
  $(tech).each(function() {
    $('<img/>')[0].src = 'images/' + this.image;
  });
}



