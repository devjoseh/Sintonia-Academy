const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "avatar",
aliases: ["av"],
cooldown: 5000,

run: async (client, message, args) => {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
let avatar = member.displayAvatarURL({ size: 2048, dynamic: true, format: "png" })

const row = new MessageActionRow()
.addComponents(
new MessageButton()
.setStyle('LINK') 
.setLabel('Baixar') 
.setEmoji('<:download:833374351386476575>')
.setURL(`${avatar}`)
);

if(member.id === message.author.id) {
let embed = new MessageEmbed() 
.setTitle(ss.titulo)
.setImage(avatar) 
.setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
.setColor(ss.color)
message.reply({ embeds: [embed],  components: [row]})
} else {
let embed2 = new MessageEmbed() 
.setTitle(`Avatar de ${member.user.username}`) 
.setImage(avatar) 
.setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
.setColor(ss.color)
message.reply({ embeds: [embed2],  components: [row]})
}



}
}