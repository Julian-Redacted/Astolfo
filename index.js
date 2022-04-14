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

client.on("messageCreate", (message) => {
    if (message.content == "mod abuse"){
        message.reply("https://cdn.discordapp.com/attachments/747099007486263297/945370139833028658/stfu_low_rank.mp4")
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