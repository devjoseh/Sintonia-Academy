const client = require('../..')
const ss = require('../../configs/settings.json')
const { MessageEmbed, Message } = require('discord.js')

client.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.content == `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {

        let totalSeconds = client.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        let uptime = `${days.toFixed()}d ${hours.toFixed()}h ${minutes.toFixed()}m ${seconds.toFixed()}s`;
        
        const embed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`Olá! ${message.author} Seja muito Bem-Vind@ ao Sintonia Academy! Aqui estão algumas informações que podem te ajudar: \n\n<:duvidas:899018366122078218> **Meu Prefix:** \`!\` utilize \`!help\` para ver meus comandos \n\n <:tempo:824712291563208754> **Tempo Online:** \`${uptime}\` \n <a:ping:771053015892754452> **Ping:** \`${Math.round(client.ws.ping)}ms\` `)
        .setTimestamp()
        .setColor(ss.color)
        .setFooter({ text: `${ss.footer}`})
        message.channel.send({ embeds: [embed]})
    }
})