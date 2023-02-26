const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
    name: 'ping',
    aliases: ['ms', 'latencia'],
    cooldown: 5000,

run: async (client, message, args) => {

const embed = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`<a:ping:771053015892754452> **Aguarde...**`)
.setColor(ss.color)
message.reply({ embeds: [embed]}).then(msg => {
        setTimeout(() => {
            const embed = new MessageEmbed()
            .setTitle(ss.titulo)
            .setDescription(`⚡ Latência da API: \`${Math.round(client.ws.ping)}ms\` \n\n🕗 Latência: \`${msg.createdTimestamp - message.createdTimestamp}ms\``)
            .setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
            .setColor(ss.color)
            .setTimestamp()
            msg.edit({ embeds: [embed]})
        }, 3000);
    })
}
}