module.exports = client => {
    client.on('message', message => {
        if (message.content === `,ping`) {
            message.reply("pong")
        }
    })
}