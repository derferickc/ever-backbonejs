Installation: 
* checkout this repository
* index.html includes all CDNs, no installation necessary

To run:
* open index.html in browser

index.html
* Includes references to jQuery, UnderscoreJS, BackboneJS CDNs
* Includes reference to the main.js file with the extended view
* Includes reference to the styles.css stylesheet
* Has next and previous buttons that are linked to click events in the Backbone.View
* Has a randomize button that is linked to a click event in the Backbone.View

Carousel
* 5 static slide divs (class = “carouselSlides”) that contain 4 images and 4 sets of song information
* Clicking the carousel-next button class triggers the "next" event, where the current position of the carousel is updated by 1
* Clicking the carousel-prev button class triggers the "prev" event, where the current position of the carousel is decreased by 1

* Algorithm explanation:

    initialize:
        * Bind value of "this" to be used in multiple child functions
        * All parent slide divs within the item array are mapped to be hidden and returned as a variabe, i
        * The current slide and first slide is set to 0
        * The previous carousel button is set to be hidden using jQuery on slide 0

    render:
        * The current item array is showed using jQuery

    next:
        * The current slide array is faded out Using jQuery
        * The current slide count is increased by 1
        * The new slide number is faded in Using jQuery
        * carousel-prev button is shown (for the case that you are initially moving from slide 1 to 2)
        ** Edge case: if the current slide number reaches 5 (last slide), hide the carousel-next button via jQuery

    prev:
        * The current slide array is faded out Using jQuery
        * The current slide count is decreased by 1
        * The new slide number is faded in Using jQuery
        * carousel-next button is shown (for the case that you are moving from slide 5 to 4)
        ** Edge case: if the current slide number is equal to 0 (first slide), hide the carousel-prev button via jQuery

styles.css
* Stylesheet used to style the carousel, randomize button, and previous / next buttons

main.js
* Used primarily to handle the get API information and display it onto the view
* Also used to randomize the above information
* Also used to handle a click events from the view
* When the document is ready, create an instance of theView() object with the el defined as the id, "#carousel-container"
    * Once, theView object is created, the render function is executed

* Initialize function binds the el object array into "this"
    * All elements of this array are hidden, causing the contents of the carousel to display nothing
    * The carousel slide number is initially set to 0 (side 1)

* Initialize function also calls the iTunes API via jQuery getJSON through a for loop
    * Song information is pushed to the view by locating the class name of the target element, the attribute or text of these classes are then updated via jQuery (attr / text)
    * All fetched API information is also saved into a local variable to be used for the Randomize function

* el html element is defined as the #carousel-container
    * Three events which the View is listening for are...
        * The click of the “#randomize_button” which will fire off the “randomizeArray” function
        * The click of the ".carousel-prev" which will fire off the prev function
        * The click of the ".carousel-next" which will fire off the next function

* randomizeArray function recalls the locally saved array of information from the original iTunes API call
    * It randomizes the order of the array through the help of some built in Javascript functions
    * It pushes the details of the newly organized array into the view, in the specified order
