const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "promover",

run: async (client, message, args) => {
if (!['434791887241740288'].includes(message.author.id)) return

let canal = client.channels.cache.get('1025531316508295198');

if(!args[0]) return message.reply(`Informe o usuário promovido`)
if(!args[0]) return message.reply(`Informe o cargo da promoção`)

const embed = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`**📖 - STAFF LOG** \n\n**${args[0]}** Foi Promovid@ à **${args[1]}**`)
.setFooter({ text: ss.footer })
.setColor(ss.color)
let msg = await canal.send({ embeds: [embed]})
msg.react('<:sino:811658335073992705>')

}
}