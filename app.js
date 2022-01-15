const discord = require('discord.js');
const bot = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES,
        discord.Intents.FLAGS.GUILD_MEMBERS,
        discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})



bot.on('ready', function () {
    console.log("Je suis connecté !")
  })


  bot.on('guildMemberAdd', guildMember => {
    guildMember.guild.channels.cache.get('id de votre salon').send(`**bienvenue, <@${guildMember.user.id}>!**`);
});



bot.login('token')