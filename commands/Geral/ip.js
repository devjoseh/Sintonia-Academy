const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
    name: 'ip',
    aliases: ['conexão', 'conexao', 'conectar'],
    cooldown: 5000,

run: async (client, message, args) => {

const embed = new MessageEmbed()
.setTitle(ss.titulo)
.setColor(ss.color)
.setFooter({ text: ss.footer })
.setDescription(`**IP de conexão:** \`${ss.ip}\` \n\nFavorite o servidor para ter ele sempre salvo!`)
message.reply({ embeds: [embed]})

}
}