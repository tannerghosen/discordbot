# Discord Bot
By Tanner Ghosen<br>
<br><br>
<b>Requirements:</b>
<br>Node.js
<br>Following Node.js Libraries:
<br>* discord.js
<br>* Enmap (https://enmap.evie.dev/install) and dependencies
<br>* Axios (https://www.npmjs.com/package/axios)
<br><br>
<b>Config</b>
(config.json)<br>
<blockquote>{
	"token": "",
}
</blockquote>
token = bot's token for logging in

# Summary:
## What is this program?
Skeleton, as my Discord Bot was named, was a bot for the communications platform Discord, which consists of small servers that people
can create for free on the platform. Skeleton was your basic chatbot, and was created using JavaScript, Node.js, Discord's own discord.js,
Enmap by eslachance et. al, Axios by Axios. It offered features a standard chatbot would have, such as a coin flip, dice, 8ball, 
rock paper scissors, joke and insult, alongside a help command, a configuration command and a ping command to see if the bot was lagging behind.

## How does it accomplish this? (Code Explanation)
Skeleton was created using JavaScript and Node.js. Enmap was used to store the prefix the server it was in wanted to use for its commands.
Axios was used for the joke and insult command, as those ones use a 3rd-party API instead of storing it in a file, and it uses GET 
to get the API from the sites, and output the response it got. Commands could be added in at later times, as long as they were dropped into the
commands folder, as there is code in bot.js to read the folder and if it finds any .js files, it requires it and adds it to the command list.