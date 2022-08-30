exports.run = (client, message, args) => {
			var dice;
			var number = args[0];
			if (number<=0)
			{
				number = 6;
			}
			if (isNaN(number) == true)
			{
				number = 6;
			}
			dice = Math.floor(Math.random() * number) + 1;
			const diceembed = new Discord.MessageEmbed()
			  .setTitle(`Dice`)
			  .setDescription(`You rolled a ${dice}`)
			  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
			  .setTimestamp()
			message.channel.send({embeds: [diceembed]});
}