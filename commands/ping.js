exports.run = async (client, message, args) => {
const m = await message.channel.send("Fetching Ping... Wait please...");
			m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.`);
}