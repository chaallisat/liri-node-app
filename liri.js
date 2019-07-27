require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const fs = require("fs");
// const OMDB = ("http://www.omdbapi.com") 
// const bandsTown = ("http://www.artists.bandsintown.com/bandsintown-api")

//const spotify = new Spotify(keys.spotify);

//concert-this = process.argv[2]
//artist name = process.argv[3]
//search bands in town api and show
//Name of place
//Location
//Event Date (MM/DD/YYYY)


const music = function () {
    this.concert = function(band) {
        const URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp"
        axios.get(URL).then(function(response) {
            // const jason = response.data;
console.log(response);

            //name of venue
            //location
            //event date (MM/DD/YYYY)
        });
    };
    this.spot = function(song) {
        const URL = `https://api.spotify.com/v1/search?q= ${song}`;

        keys.spotify.id;
        keys.spotify.secret;

        axios.get(URL).then(function(response) {
            const jason = response.data;

            const show = [
                "Name: " + jason.name,
                "Song: " + jason.song,
                "Preview Link: " + jason.link
            ].join("\n\n");
            //Artist
            //Song name
            //Spotify preview link
            //
            console.log(show);
            
        });
    };
    this.movie = function(show) {
        const URL = "something"

        axios.get(URL).then(function(response) {
            const jason = response.data;

            //Movie title
            //Year
            //IMDB rating
            //Rotten Tomatoes rating
            //Country
            //Language
            //Plot
            //Actors
            // if (!name) name = "Mr. Nobody"
        });
    };
    this.simon = function(says) {
        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                return console.log(error);
            }
            const dataArr = data.split(", ");

            const Xterm = dataArr[0];
            const Xname = dataArr[1];
        })
    }
};


const term = process.argv[2];
const name = process.argv.slice(3).join(" ");

if (term === "concert-this") {
    console.log(`Concert for ${name}`);
    // music.concert(term);
}
if (term === "spotify-this-song") {
    console.log(`Spotify search for ${name}`);
    music.spot(term);

}
if (term === "movie-this") {
    console.log(`Movie search for ${name}`);
}
if (term === "do-what-it-says") {
    console.log(`It says ${name}`);
}


