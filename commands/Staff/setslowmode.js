const {MessageEmbed} = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "setslowmode",
aliases: ["slowmode", "slow", "channelslowmode", "channelslowmodeset", "ssm"],
userPerms: ['MANAGE_CHANNELS'],
botPerms: ['MANAGE_CHANNELS'],
cooldown: 5000,

run: async (client, message, args) => {
let tempo = args[0];

if(!args[0]) {
const embed3 = new MessageEmbed()
.setColor(ss.color)
.setThumbnail(client.user.displayAvatarURL())
.setTitle(ss.titulo)
.setDescription('<a:z_sparkles2:771102718164205578> ``!setslowmode`` \nAltere o tempo do slowmode do canal atual.\n\n<:Hmmm:771055388002746469> **Como usar?** ``!setslowmode <Tempo>``')
.addFields({ name: '📖 **Exemplo**', value: '``!setslowmode 120``', inline: false })
.addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!slowmode, !slow, !channelslowmode, !channelslowmodeset, !ssm``', inline: false })
.setFooter({ text: ss.footer})
.setTimestamp()
return message.reply({ embeds: [embed3]})
}

if (tempo > 21600) {
const embed4 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} Insira um número de 0 a 21600 para setar o modo lento`)
.setFooter({ text: ss.footer})
.setColor(ss.color)
return message.reply({ embeds: [embed4]});
}

if(isNaN(args[0])) {
const embed5 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} Você deve informar um número válido!`)
.setFooter({ text: ss.footer})
.setColor(ss.color)
return message.reply({ embeds: [embed5]});
}

message.channel.setRateLimitPerUser(args[0])
message.reply(`Modo lento definido para \`${args[0]}\` segundos!`)
}
}