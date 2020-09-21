# FOSS-Discord-Bot
Repository for open-source discord bot.

## Dependencies
This bot is designed for Discord. The latest version of the discord client can be download from: https://discord.com/download
This bot runs using the Discord.js library. As a result, it requries node.js as a dependency. The latest version can be found and installed at: https://nodejs.org/en/download/

## Token
In order to use the bot, you must first obtain a token from: https://discord.com/developers/applications
You must create a new app (can be named anything), then in the bot tab on the left sidebar, create a bot.
The token can be found on the bot page. Paste this token into the first line of the main.js file, replacing the placeholder string. **(ANYONE WITH THIS TOKEN WILL HAVE ACCESS TO YOUR BOT. TREAT IT LIKE A PASSWORD. DO NOT SHARE THIS TOKEN WITH ANYONE).**

## Inviting the bot to your server
Before the bot can be used on your server, it must first be invited. Before creating an invite link, you must obtain the client id for your bot. This can be found in your discord application's general information page:https://discord.com/developers/applications. After you copy the client id, you may use this webpage to set up permissions for the bot and to create an invite link: https://discordapi.com/permissions.html

## Running the bot
To start the bot, navigate a terminal into the bot's directory and type ```node .```. Once running, the terminal window should display "Bot is online!" and the bot should appear online on the discord server. 

## Modifying the bot
By default, the prefix for the bot is "-". This can be changed to any string in the main.js file. It is recommended to use a special character as a prefix (example: !,~,-, $, etc.) This is how the bot differentiates commands and regular conversation among users. Any command meant for the bot must begin with the prefix, or it will be ignored. All bot modules belong in the "modules" folder. An example "ping" module is provided.It can be tested with the "-ping" command.
