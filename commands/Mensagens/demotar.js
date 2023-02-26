const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "demotar",

run: async (client, message, args) => {
if (!['434791887241740288'].includes(message.author.id)) return

let canal = client.channels.cache.get('1025531316508295198');

if(!args[0]) return message.reply(`Informe quem foi demotado`)
if(!args[0]) return message.reply(`Informe o cargo que a pessoa está atualmente`)

const embed = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`**📖 - STAFF LOG** \n\n**${args[0]}** Foi demotado à **${args[1]}**`)
.setFooter({ text: ss.footer })
.setColor(ss.color)
let msg = await canal.send({ embeds: [embed]})
msg.react('<:sino:811658335073992705>')

}
}