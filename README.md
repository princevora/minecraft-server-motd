# minecraft-server-motd
MSM Shows minecraft server MOTD and server infos

# Commands
```js
npm i 
```

or 

```js
npm install 
```

# Before you start your project you will need to compile the typescript 
```js
npm run build
```

# After the successfull build Run the following command
```js
npm run start
```

# Usage 
```js
// Import the protocol module from index (root)
import protocol from "./";

// Create a variable
const host = "play.hypixel.net";
const port = 25565;

protocol(host, port)
    .then((response) => {
        // Your logic..
        console.log(response);

        /**
         * 
         * Response will be generated something like below
         * 
         * {
            isOnline: true,
            favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAtt....,
            motd: {
                raw: '§f                §aHypixel Network §c[1.8-1.20]§f\n' +
                '     §5§lNEW PTL GAME: §d§lSHEEP WARS §7| §b§lSB 0.20.2',
                html: '<span><span style="color: #FFFFFF;">                </span><span style="color: #55FF55;">Hypixel Network </span><span style="color: #FF5555;">[1.8-1.20]</span><span style="color: #FFFFFF;">\n' +
                '     </span><span style="color: #AA00AA; font-weight: bold;">NEW PTL GAME: </span><span style="color: #FF55FF; font-weight: bold;">SHEEP WARS </span><span style="color: #AAAAAA;">| </span><span style="color: #55FFFF; font-weight: bold;">SB 0.20.2</span></span>'
            },
            maxPlayers: 200000,
            playerCount: 30191
            }
         * 
        */
    })
    .catch((error) => {
        // Your logic here
        console.error(error);
    })
```