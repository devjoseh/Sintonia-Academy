const {MessageEmbed} = require('discord.js')
const ss = require('../../configs/settings.json')
 
module.exports = {
name: "juntar",
cooldown: 5000,

run: async (client, message, args) => {
const mensagens = args.join(" ");

if(!mensagens) {
    const embed = new MessageEmbed()
    .setColor(ss.color)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(ss.titulo)
    .setDescription('<a:z_sparkles2:771102718164205578> ``!juntar`` \nJunte o nome de duas pessoas\n\n<:Hmmm:771055388002746469> **Como usar?** ``!juntar <Player 1> <Player 2>``')
    .addFields({ name: '📖 **Exemplo**', value: '``j!juntar YTJoseGames July``', inline: false })
    .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``nenhum``', inline: false })
    .setFooter({ text: ss.footer})
    .setTimestamp()
    return message.reply({ embeds: [embed]})
}

if (!args[1]) {
    const embed2 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Você precisa mencionar outra pessoa!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed2]});
}

if (args[0] || args[1]) {
var FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
var SecondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])
 
if (!FirstUser) {
    const embed3 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Não consegui encontrar alguém chamado **${args[0]}!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed3]});
}
              
if (!SecondUser) {
    const embed4 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author}  Não consegui encontrar alguém chamado **${args[1]}**!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed4]});
}
 
if (FirstUser || SecondUser) {
const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
const SecondUserName = SecondUser.map(user => { return user.user.username })
 
message.reply(`${FirstUser.user.username} **+** ${SecondUserName} **=** **${FirstUserSliced}${SecondUserSliced}** `)
}
}
}
}

