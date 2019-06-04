// /* jshint esversion: 6 */
//
// // alert("Javascript is working and creating this annoying pop up!!");
// // "alert" is a test to check that the html and Javascript are connected
//
// // When I click the next button
// // Show the next page
//
// // When I click the previous button
// // Show the previous page
//
// // When I click the random button
// // Show a random page
//
// // Each page should show a different background color, circle color & content
//
// // When I press a key
// // Show the next or previous page
//
// // Step 1: Add the content for our projects
// // To create a list use square brackets []
// // To create an object use curly brackets[]
// // title: "Description"
//
// // To create a list of ojects use both [{}]
// const projects = [{
//     imageSrc: "images/aboutMe.png",
//     title: "Get to know me Landing Page",
//     description: "First project I created"
//   },
//   {
//     imageSrc: "images/munch.png",
//     title: "Munch Food Blog Landing Page",
//     description: ""
//   },
//   {
//     imageSrc: "images/yourDreamHoliday.png",
//     title: "Your Dream Holiday Landing Page",
//     description: "Landing page for a photography app with scroll effects"
//   },
//   {
//     imageSrc: "images/granular.png",
//     title: "Granular App Landing Page",
//     description: "Landing page for a photography app with scroll effects"
//   },
//   {
//     imageSrc: "images/lastStudio.png",
//     title: "Last Studio Landing Page",
//     description: "Landing page for a photography app with scroll effects"
//   },
//   {
//     imageSrc: "images/javaScriptSlider.png",
//     title: "Javascript Slider Landing Page",
//     description: "Landing page for a photography app with scroll effects"
//   },
// ];
//
// // Step 2: Pick the tags we want to use in html and save the in constants
//
// const sliderImage = document.querySelector(".slider img");
// const sliderImageAttribute = sliderImage.getAttribute("src");
// const sliderH2Tag = document.querySelector(".slider-content h2");
// const sliderPTag = document.querySelector(".slider-content p");
// const nextTag = document.querySelector(".next");
// const previousTag = document.querySelector(".previous");
//
//
// // Step 3: We need to know what page we are on in order to change it. - so we need a way to track this.
// let projectNumber = 0;
//
// // CONSTANT!
//
// // Step 4: Create an action that increases the page number
// const next = function() {
//   projectNumber = projectNumber + 1;
//   // We only have 4 projects - so we don't want to be able to increase the page number  to 5
//   // projects.length will print out the number of projects in our list. Currently this is 4. However we start counting from 0 in programming so we -1
//   if (projectNumber > projects.length - 1) {
//     // Set back to page 1
//     projectNumber = 0;
//   }
// };
//
// // Step 5: Create an action that decreases the page page number
// const previous = function() {
//   projectNumber = projectNumber - 1;
//   // If page number gets to 0, change the page number to the last page in our list
//   if (projectNumber < 0) {
//     projectNumber = projects.length - 1;
//   }
// };
//
//
//
// // Step 10: Update the content on our page from the content on the projects list
// const updatePage = function() {
//   sliderImage.setAttribute("src", projects[projectNumber].imageSrc);
//   sliderH2Tag.innerHTML = projects[projectNumber].title;
//   sliderPTag.innerHTML = projects[projectNumber].description;
// };
//
//
// // EVENT LISTENERS
//
// // Step 6: Attatch an event listener to the next button & call the next function. Now the next button should increase the page number.
// nextTag.addEventListener("click", function() {
//   next();
//   console.log(projectNumber);
//   updatePage();
// });
//
// // Step 6: Attatch an event listener to the previous button & call the next function. Now the previous button should decrease the page number.
// previousTag.addEventListener("click", function() {
//   previous();
//   console.log(projectNumber);
//   updatePage();
// });

// To make the projects fade in

document.addEventListener("scroll", function() {

  // This gets the distance of the portfolio from the top
  let portfolioDistance = $(".projects").offset().top;
  let distanceFromTop = window.scrollY;

  if (distanceFromTop > 100) {
    $(".projects").fadeIn("slow");
  }
});

// Smooth Scrolling to Anchors - credit https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          }
        });
      }
    }
  });
