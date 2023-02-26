const { MessageEmbed } = require('discord.js');
const client = require('../..');
const ss = require('../../configs/settings.json');

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const { id } = client.user;
  const isMentioned = message.content === `<@!${id}>` || message.content === `<@${id}>`;
  if (!isMentioned) return;

  const totalSeconds = client.uptime / 1000;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const uptime = `${days.toFixed()}d ${hours.toFixed()}h ${minutes.toFixed()}m ${seconds.toFixed()}s`;

  const embed = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`Olá! ${message.author} Seja muito Bem-Vind@ ao Sintonia Academy! Aqui estão algumas informações que podem te ajudar: \n\n<:duvidas:899018366122078218> **Meu Prefix:** \`!\` utilize \`!help\` para ver meus comandos\n\n<:tempo:824712291563208754> **Tempo Online:** \`${uptime}\`\n\n<a:ping:771053015892754452> **Ping:** \`${Math.round(client.ws.ping)}ms\``)
    .setTimestamp()
    .setColor(ss.color)
    .setFooter({ text: ss.footer});
  message.channel.send({ embeds: [embed] });
});