var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var twitterKeys = require('./keys.js');
// console.log(twitterKeys);
var spotifyKeys = require('./keys.js');
// console.log(spotifyKeys);
var nodeArgs = process.argv;
var request = require("request");


function getMovie() {


//var omdbInput = process.argv[2];
request("http://www.omdbapi.com/?t=john+wick&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    if (!error && response.statusCode === 200) {

        console.log("The movie's Title is: " + JSON.parse(body).Title);
        console.log("The movie's place of production is: " + JSON.parse(body).Country);
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's year is: " + JSON.parse(body).Released);
        console.log("The movie's language is: " + JSON.parse(body).Language);
        console.log("The movie's plot is: " + JSON.parse(body).Plot);
        console.log("The movie's actors are: " + JSON.parse(body).Actors);
        //console.log("The movie's Rottentomatos site: " + "https://www.rottentomatoes.com/m/" + imdbInput)
                                                }
            })}
for (var i = 2; i < nodeArgs.length; i++) {
    if (nodeArgs[2] === "movie-this") {
        getMovie();
    }
    // else if (nodeArgs[2] = "spotify-this-song") {
    //     //spotifyfunction
    // }
    // else if (nodeArgs[2] = "my-tweets") {
    //     //twitterfunction
    // }
    // else if (nodeArgs[2] = "do-what-it-says") {
    //     //readrandom.txt function
    // }
     else {
    console.log("Please type: movie-this, spotify-this-song, my-tweets, or do-what-it-says");
    }
}




    //gotta make it so node terminal can take in these commands
//my-tweets

//spotify-this-song

//movie-this

//do-what-it-says