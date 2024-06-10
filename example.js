// Import the protocol module from index (root)
const protocol = require("./");

// Create a variable
protocol("play.hypixel.net")
    .then((response) => {
        // Your logic..
        console.log(response);
    })
    .catch((error) => {
        // Your logic here
        console.error(error);
    })

