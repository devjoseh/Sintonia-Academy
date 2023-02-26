const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "clear",
aliases: ["clear", "clean", "limpar"],
userPerms: ['MANAGE_MESSAGES'],
botPerms: ['MANAGE_MESSAGES'],
cooldown: 5000,

async run (client, message, args) {
const mensagens = args.join(" ");

if(!mensagens) {
    const embed3 = new MessageEmbed()
    .setColor(ss.color)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(ss.titulo)
    .setDescription('<a:z_sparkles2:771102718164205578> ``!clear`` \nLimpa uma quantia de mensagens de um canal.\n\n<:Hmmm:771055388002746469> **Como usar?** ``!clear <Quantia>``')
    .addFields({ name: '📖 **Exemplo**', value: '``!clear 10``', inline: false })
    .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!clear, !limpar, !clean``', inline: false })
    .setFooter({ text: ss.footer})
    .setTimestamp()
    return message.reply({ embeds: [embed3]})
}

if(isNaN(mensagens)) {
    const embed4 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Você deve informar um número válido!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed4]});
}

if(mensagens > 100) {
    const embed5 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Eu só consigo limpar de 1 até 100 mensagens passadas!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed5]});
}

if(mensagens < 1) {
    const embed6 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Eu só consigo limpar de 1 até 100 mensagens passadas!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed6]});
}

await message.channel.messages.fetch({limit: mensagens}).then(messages => {
    message.channel.bulkDelete(messages, true)})
    .catch(error => {
    return message.channel.send(`Não foi possivel apagar algumas mensagens pois elas foram enviadas a mais de 14 Dias! (2 Semanas)`)
})

message.channel.send(`Chat limpo por ${message.author}!`).then(m => {
setTimeout(() => {
m.delete()
}, 5000)
})
}
}