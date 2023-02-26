const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "nickname",
aliases: ["nick", "changenick", "mudarnick", "alterarnick"],
userPerms: ['MANAGE_NICKNAMES'],
botPerms: ['MANAGE_NICKNAMES'],
cooldown: 5000,

run: async (client, message, args) => {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let novonick = args.slice(1).join(" ");

if(!novonick) {
const embed3 = new MessageEmbed()
.setColor(ss.color)
.setThumbnail(client.user.displayAvatarURL())
.setTitle(ss.titulo)
.setDescription('<a:z_sparkles2:771102718164205578> ``!nickname`` \nAltera o nickname de alguém do servidor.\n\n<:Hmmm:771055388002746469> **Como usar?** ``!nickname <User> <Nick novo>``')
.addFields({ name: '📖 **Exemplo**', value: '``!nickname @YTJoseGames YTJoseGames_Gostoso``', inline: false })
.addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!nick, !changenick, !mudarnick, !alterarnick``', inline: false })
.setFooter({ text: ss.footer})
.setTimestamp()
return message.reply({ embeds: [embed3]})
}

if (!member) {
const embed1 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} Mencione um usuário para alterar o nickname!`)
.setFooter({ text: ss.footer})
.setColor(ss.color)
return message.reply({ embeds: [embed1]});
}

if (!novonick) {
const embed2 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} Informe para qual nick você deseja alterar o nome do usuário!`)
.setFooter({ text: ss.footer})
.setColor(ss.color)
return message.reply({ embeds: [embed2]});
}

if(member.id == message.author.id) {
const embed3 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} Você não pode alterar seu próprio nickname!`)
.setFooter({ text: ss.footer})
.setColor(ss.color)
return message.reply({ embeds: [embed3]});
}

if(novonick > 31) {
const embed4 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} O Nick do usuário não pode ter mais de 32 Letras!`)
.setFooter({ text: ss.footer})
.setColor(ss.color)
return message.reply({ embeds: [embed4]});
}

if(novonick < 3) {
const embed5 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} O Nick do usuário deve ter pelo menos 3 Letras!`)
.setFooter({ text: ss.footer})
.setColor(ss.color)
return message.reply({ embeds: [embed5]});
}

message.reply(`O Nick de **${member}** Foi Alterado para **${novonick}**`)
member.setNickname(novonick)
.catch(error => {
return message.reply(`Não foi possivel alterar o nick deste usuário, erro: \n\n \`\`\`${error}\`\`\``)
})

}
}

