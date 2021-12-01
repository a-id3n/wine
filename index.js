const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const config = require("./json/confg.json")


client.on('ready', () => {
    console.log(`ready!`)

    ping(client);
    post(client);
    kick(client);
    font(client);
    ban(client);
})

client.on('ready', () => {
    client.user.setActivity("Dreams", { type: "WATCHING"})
})

const ping = require('./commands/ping');
const post = require('./commands/post');
const kick = require('./commands/kick');
const font = require('./commands/font');
const ban = require('./commands/ban');

client.login(config.token)