  // Initial array of movies
  var movies = ["Harry Potter and the Sorcerer's Stone", 
                "Harry Potter and the Prisoner of Azkaban", 
                "Harry Potter and the Goblet of Fire", 
                "Harry Potter and the Order of the Phoenix",
                "Harry Potter and the Half-Blood Prince",
                "Harry Potter and the Deathly Hallows – Part 1",
                "Harry Potter and the Deathly Hallows – Part 2"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {

$("#movies-view").empty();
$("#movies-photo").empty();

var movie = $(this).attr("data-name");
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

// Creating an AJAX call for the specific movie button being clicked
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {

console.log(response);

// Creating an element to have the rating displayed
var pOne = $("<p>").text(response.Ratings[1].Source + ": ");
var rating = $("<span>").text(response.Ratings[1].Value);
$(pOne).append(rating); 


// Creating an element to hold the release year
var pTwo = $("<p>").text("Released: ");
var released = $("<span>").text(response.Released);
$(pTwo).append(released); 

// Creating an element to hold the release year
var pSix = $("<p>").text("Director: ");
var diretor = $("<span>").text(response.Director);
$(pSix).append(diretor); 

// Creating an element to hold the plot
var pThree = $("<p>").text("Plot: ");
var plot =  $("<span>").text(response.Plot);
$(pThree).append(plot);   

// Creating an element to hold the Actors  
var qFour = $("<p>").text("Actors: ");
var actor = $("<span>").text(response.Actors);  
$(qFour).append(actor);  


var qFive = $("<p>").text("Awards: ")
var awards = $("<span>").text(response.Awards);
$(qFive).append(awards);  


// Retrieving the URL for the image
var imgURL = response.Poster;

// Creating an element to hold the image
var image = $("<img>").attr({"src": imgURL,
                            "height": "430px",
                            "width": "320px" });
$("#movies-photo").append(image);

// Putting the entire movie above the previous movies
//$("#movies-view").prepend(movieDiv);
$("#movies-view").append(pOne, pTwo, pSix, pThree, qFour, qFive);
});

}

// Function for displaying movie data
function renderButtons() {

// Deleting the movies prior to adding new movies
// (this is necessary otherwise you will have repeat buttons)
$("#buttons-view").empty();

// Looping through the array of movies
for (var i = 0; i < movies.length; i++) {

// Then dynamicaly generating buttons for each movie in the array
// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
var a = $("<button>");
// Adding a class of movie-btn to our button
a.addClass("btn-warning");
// Adding a data-attribute
a.attr("data-name", movies[i]);
// Providing the initial button text
a.text(movies[i]);
// Adding the button to the buttons-view div
$("#buttons-view").append(a);
}
}

// This function handles events where a movie button is clicked
$("#add-movie").on("click", function(event) {
event.preventDefault();
renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".btn-warning", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
