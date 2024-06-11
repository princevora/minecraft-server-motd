// Import the protocol module from index (root)
import protocol from "./dist/index.js";

// Create a variable
protocol("play.hypixel.net", 25565
)
    .then((response) => {
        // Your logic..
        console.log(response);
    })
    .catch((error) => {
        // Your logic here
        console.error(error);
    })

