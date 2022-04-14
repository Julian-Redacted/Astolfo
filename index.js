const Discord = require("discord.js");
const generateImage = require("./generateImage");
require("dotenv").config()


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

// Login message
client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hello"){
        message.reply("Sup faggot")
    }
})

const welcomeChannelId = "964238218130251856"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)