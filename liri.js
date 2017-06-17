var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var twitterKeys = require('./keys.js');
console.log(twitterKeys);
var spotifyKeys = require('./keys.js');
console.log(spotifyKeys);

var request = require("request");
var omdbInput =
request("http://www.omdbapi.com/?t=john+wick&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    if (!error && response.statusCode === 200) {

        console.log("The movie's Title is: " + JSON.parse(body).Title);
        console.log("The movie's place of production is: " + JSON.parse(body).Country);
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's year is: " + JSON.parse(body).Released);
        console.log("The movie's language is: " + JSON.parse(body).Language);
        console.log("The movie's plot is: " + JSON.parse(body).Plot);
        console.log("The movie's actors are: " + JSON.parse(body).Actors);
        console.log("The movie's Rottentomatos site: " + "https://www.rottentomatoes.com/m/" + imdbInput;
    }
});

    //gotta make it so node terminal can take in these commands
//my-tweets

//spotify-this-song

//movie-this

//do-what-it-says