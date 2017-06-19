var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var twitterKeys = require('./keys.js');
// console.log(twitterKeys);
var spotifyKeys = require('./keys.js');
 //console.log(spotifyKeys);
var nodeArgs = process.argv;
var request = require("request");


//calls last 20 tweets
// function lastTweets() {
//
// }

//does whatever the random.txt file says
function runRandomTxt() {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);


    });
}
//grabs Artist(s), The song's name , A preview link of the song from Spotify, The album that the song is from
function getSong() {
    var userinput= "";
    for (var i = 3; i < nodeArgs.length; i++) {
        userinput = userinput + " " + nodeArgs[i];
    }

    var spotify = new Spotify(
        spotifyKeys.spotifyKeys

);

    spotify.search({ type: 'track', query: userinput,limit: 1 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks);
    });
}

//gets data on movies from node prompt
function getMovie() {
    //sets user input to empty string
 var userinput= "";
    // starting from index 3 of node args loops through args and adds them to the userinput variable
    for (var i = 3; i < nodeArgs.length; i++) {
        userinput = userinput + "" + nodeArgs[i];
    }
//makes request to omdbapi
request("http://www.omdbapi.com/?t=" + userinput + "=&plot=short&apikey=40e9cece", function(error, response, body) {
    if (!error && response.statusCode === 200) {

        console.log("The movie's Title is: " + JSON.parse(body).Title);
        console.log("The movie's place of production is: " + JSON.parse(body).Country);
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's year is: " + JSON.parse(body).Released);
        console.log("The movie's language is: " + JSON.parse(body).Language);
        console.log("The movie's plot is: " + JSON.parse(body).Plot);
        console.log("The movie's actors are: " + JSON.parse(body).Actors);
        console.log("The movie's Rottentomatos site: " + "https://www.rottentomatoes.com/m/" + userinput);
                                                }
            })}
// this for loop makes it so we can launch the functions based on  index 2 of the node
// command line. and if none of the values match a function it prompts the user to enter a correct value.
for (var i = 2; i < nodeArgs.length; i++) {
    if (nodeArgs[2||3] === "movie-this") {
        getMovie();
    }
    else if (nodeArgs[2||3] = "spotify-this-song") {
        getSong();
    }
    // else if (nodeArgs[2] = "my-tweets") {
    //     lastTweets
    // }
    else if (nodeArgs[2] = "do-what-it-says") {
       runRandomTxt();
    }
     else {
    console.log("Please type: movie-this, spotify-this-song, my-tweets, or do-what-it-says");
    }
}