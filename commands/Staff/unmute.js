const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "unmute",
aliases: ["desmutar"],
userPerms: ['MANAGE_MESSAGES'],
botPerms: ['MANAGE_MESSAGES'],
cooldown: 5000,

run: async (client, message, args) => {   
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let role = message.guild.roles.cache.find(role => role.name === "🔇・Mutado");
let author = message.author

if(!args[0]) {
    const embed = new MessageEmbed()
    .setColor(ss.color)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(ss.titulo)
    .setDescription('<a:z_sparkles2:771102718164205578> ``!unmute`` \nRemova o mute de alguém\n\n<:Hmmm:771055388002746469> **Como usar?** ``!unmute <Usúario>``')
    .addFields({ name: '📖 **Exemplo**', value: '``!unmute YTJoseGames``', inline: false })
    .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!desmutar``', inline: false })
    .setFooter({ text: ss.footer})
    .setTimestamp()
    return message.reply({ embeds: [embed]})
}

if(!role) {
    const embed1 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Ninguém foi mutado neste servidor!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed1]});
}

if (!member)  {
    const embed3 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Este membro não foi encontrado`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed3]})
}

member.roles.remove(role, {reason: `Unmute`})
const embed5 = new MessageEmbed()
.setColor(ss.color)
.setFooter({ text: ss.footer})
.addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario desmutado:`, value: `<:r_setaroxa:993927029990899823> Nick: \`${member.user.tag}\``, inline: false })
.addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario desmutado:`, value: `<:r_setaroxa:993927029990899823> ID: \`${member.id}\``, inline: false })
.addFields({ name: `<:BadgeDiscordStaff:843967910933954631> Desmutado Por:`, value: `<:r_setaroxa:771053504742948904> Staff: \`${author.tag}\``, inline: false })
.addFields({ name: `<:BadgeDiscordStaff:843967910933954631> Desmutado Por:`, value: `<:r_setaroxa:771053504742948904> ID: \`${author.id}\``, inline: false })
.addFields({ name: `<:busca:824712167009419311> Data:`, value: `<:r_setaroxa:993927029990899823> \`${message.createdAt.toLocaleString()}\``, inline: false})
.setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
message.channel.send({ embeds: [embed5]})

}
}