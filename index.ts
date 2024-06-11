import util from "minecraft-server-util";

interface MOTD {
    raw: string;
    clean: string;
    html: string;
}

interface ServerInfo {
    isOnline: boolean;
    favicon: string | null;
    motd: MOTD;
    maxPlayers: number;
    playerCount: number;
}

/**
 * 
 * @param {string} host 
 * @param {number} port 
 * @returns {Promise<ServerInfo>}
 */
async function getServerInfo(host: string = "play.hypixel.net", port: number = 25565): Promise<ServerInfo> {
    try {
        const result = await util.status(host, port);

        // Destructure the data from result
        const { players, motd, favicon } = result;

        // Create the response structure
        const response: ServerInfo = {
            isOnline: true,
            favicon: favicon,
            motd: motd,
            maxPlayers: players.max,
            playerCount: players.online,
        };

        // Return the resolved response
        return response;

    } catch (error) {
        // Return rejected error
        throw error;
    }
}

export default getServerInfo;
