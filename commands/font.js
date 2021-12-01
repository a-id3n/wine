module.exports = client => {
    client.on('message', message => {

        const {prefix} = require("../json/confg.json")
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === `font`) {

            if (args[0]) {
            var fontargs = message.content.split("+");
            
            message.reply(`https://img.dafont.com/preview.php?text=${fontargs[0]}&ttf=steelfish6&ext=1&size=51&psize=m&y=59`)
            }

            if (!args[0]) {
                message.reply('**error:** specify arguments')
            }
        }
    })
}