const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')
const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')

client.on('messageCreate', async message => {
if(message.author.bot) return
if(message.content.indexOf(config.prefix) !== 0) return

const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
const command = args.shift().toLowerCase()

if(command == 'ticket') {
if (!['434791887241740288'].includes(message.author.id)) return

const embed = new MessageEmbed()
.setTitle("Central de Atendimento " + ss.titulo)
.setDescription(`<:duvidas:899018366122078218> *** - Suporte em Geral*** \n > ▫️ Suporte relacionado ao discord e in-game relacionado a compras, dúvidas e etc. \n\n<:tempo:824712291563208754> *** - Horários de Atendimento*** \n> ▫️ Segunda a Sexta: 12:00 às 22:00 \n> ▫️ Final de Semana: 15:00 às 20:00 \n\n Não abra um ticket para tratar de assunstos que podem ser resolvidos em outros canais ou para pedir coisas dentro e fora do servidor caso abra, você será punido`)
.setFooter({ text: ss.footer})
.setColor(ss.color) 

const row = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setStyle('SECONDARY')
    .setLabel('Ticket')
    .setEmoji('<:info:824712166677676112>')
    .setCustomId('duvidas'),
)

message.channel.send({ embeds: [embed], components: [row], fetchReply: false })
}
});