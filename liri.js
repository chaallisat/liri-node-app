require("dotenv").config();
const keys = required("./keys.js");

const spotify = new spotify(keys.spotify);