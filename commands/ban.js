module.exports = client => {
    client.on('message', message => {

        const {prefix} = require("../json/confg.json")
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();


        if (command === `ban`) {

        const userid = args[0];

        if (userid) {
            if (args[0]) {
            const useridTarget = message.guild.members.cache.get(userid);

            if (!useridTarget) {
                return;
            }

            useridTarget.ban();
            message.reply(`**banned:** <@${userid}>`)
            }
        } else {
            message.reply(`**error:** could not ban member`)
        }

        }

    })
}
