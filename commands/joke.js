const axios = require("axios");
exports.run = async (client, message, args) => {
				var say;
						await axios.get("https://v2.jokeapi.dev/joke/Any").then((response) => { 
							if (response.data.type == "twopart")
							{
								say = response.data.setup + "\n" + response.data.delivery;
							}
							else
							{
								say = response.data.joke;
							}
						});
				var foot;
				
				if (message.mentions.users.first() == message.author.id) 
				{
					say = "You can't send a joke to yourself."; 
					foot = message.member.displayName;
				}
				else if (message.mentions.members.first())
				{
					foot = `For ${message.mentions.users.first().username}, From ${message.member.displayName}`;
				}
				else
				{
					foot = message.member.displayName;
				}
				const jokeembed = new Discord.MessageEmbed()
				  .setTitle(`Joke`)
				  .setDescription(`${say}`)
				  .setFooter(foot,  message.author.displayAvatarURL({ dynamic: true }))
				  .setTimestamp()
				message.channel.send({embeds: [jokeembed]});
			
}