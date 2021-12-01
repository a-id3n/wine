module.exports = client => {
client.on('message', message => {
	    const {prefix} = require("../json/confg.json")
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if (command === 'post') {
		if (!args.length) {
			return message.channel.send(`please provide proper args ${message.author.username}`);
		}
        message.delete();
        message.channel.send(`${args[0]}`)
        const { MessageEmbed } = require('discord.js');
        const albumEmbed = new MessageEmbed().setColor(3092790).setImage(`${args[1]}`);
        message.channel.send({ embeds: [albumEmbed] });

	}
});
}