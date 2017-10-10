Installation: 
* checkout this repository
* index.html includes all CDNs, no installation necessary

To run:
* open index.html in browser

index.html
* Includes references to jQuery, UnderscoreJS, BackboneJS CDNs
* Includes reference to the main.js file with the extended view
* Includes reference to the styles.css stylesheet
* Has script tags with the carousel algorithm and functions for next() and previou() slides
* Has a randomize button that is linked to an event in the Backbone.View

Carousel
* 5 static slide divs (class = “carouselSlides”) that contain 4 images and 4 sets of song information
* Pressing the next button calls the function “next()” via an onClick method in the script tags
* Pressing the next button calls the function “prev()” via an onClick method in the script tags

* Algorithm explanation:
    * Store all the slides in array variable, “slides”, by using jQuery command, “document.getElementsByClassName("carouselSlides"
    * Start the index of the carousel at 1 (first slide)
    * Set all slides divs to display as none by looping through the length of the “slides” array
    * Display the current slide by displaying it as a block element within the slides array
        * Unless stated by the edge cases to do otherwise, show the previous and next arrows
    * Edge cases:
        * If the index of the slide is on 1, disable the previous button by hiding it (jQuery)
        * If the index of the slide is on the length of slides variable, disable the next button by hiding it (jQuery)
    * next() function increases the slideIndex by 1, updating which slide to display, and which to hide
    * prev() function decreases the slideIndex by 1, updating which slide to display, and which to hide

styles.css
* Stylesheet used to style the carousel, randomize button, and previous / next buttons

main.js
* Used primarily to handle the get API information and display it onto the view
* Also used to randomize the above information
* Also used to handle a click event from the view
* When the document is ready, create an instance of theView() object

* Initialize function calls the iTunes API via jQuery getJSON through a for loop
    * Song information is pushed to the view by locating the class name of the target element, the attribute or text of these classes are then updated via jQuery (attr / text)
    * All fetched API information is also saved into a local variable to be used for the Randomize function

* el html element is defined as the slideshow-container
    * An event within the el is defined as the click of the “#randomize_button” which will fire off the “randomizeArray” function

* randomizeArray function recalls the locally saved array of information from the original iTunes API call
    * It randomizes the order of the array through the help of some built in Javascript functions
    * It pushes the details of the newly organized array into the view, in the specified order
