const util = require('minecraft-server-util');

/**
 * 
 * @param {string} host 
 * @param {number} port 
 * @returns 
 */
function getServerInfo(host = null, port = 25565) {
    
    // Create a promise and return it
    return new Promise(async (resolve, reject) => {

        // Create a util's result variable
        const result = await util.status(host || "play.hypixel.net", 25565);

        try {

            // A basic response structure
            const response = {
                isOnline: true,
                favicon: "",
                motd: "",
                maxPlayers: 0,
                playerCount: 0,
            }

            // destruct the data from result
            const { players, motd, favicon } = result;

            response.isOnline = true;
            response.motd = motd;
            response.favicon = favicon;
            response.maxPlayers = players.max;
            response.playerCount = players.online;

            // return resolve the response
            resolve(response);

        } catch (error) {
            // Return reject the error
            reject(error)
        }
    })
}

/**
 * @exports getServerInfo
 */
module.exports = getServerInfo;