// Import the protocol module from index (root)
import protocol from "./";

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

