const { MessageEmbed, Util } = require('discord.js')
const ss = require('../../configs/settings.json')
const { parse } = require("twemoji-parser")

module.exports = {
name: "addemoji",
aliases: ["adicionaremoji"],
userPerms: ['MANAGE_EMOJIS_AND_STICKERS'],
botPerms: ['MANAGE_EMOJIS_AND_STICKERS'],
cooldown: 5000,

async run (client, message, args) {
const emoji = args[0]
let customEmoji = Util.parseEmoji(emoji)

if(!args[0]) {
    const embed = new MessageEmbed()
    .setColor(ss.color)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(ss.titulo)
    .setDescription('<a:z_sparkles2:771102718164205578> ``!addemoji`` \nAdiciona um emoji no servidor\n\n<:Hmmm:771055388002746469> **Como usar?** ``!addemoji <Emoji>``')
    .addFields({ name: '📖 **Exemplo**', value: '``!addemoji :gostosodms:``', inline: false })
    .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!adicionaremoji``', inline: false })
    .setFooter({ text: ss.footer})
    .setTimestamp()
    return message.reply({ embeds: [embed]})
}

if(customEmoji.id) {
    const link = `https://cdn.discordapp.com/emojis/${customEmoji.id}.${customEmoji.animated ? "gif": "png"}`
    const name = args.slice(1).join(" ");

    message.guild.emojis.create(`${link}`, `${name || `${customEmoji.name}`}`)

    const embed = new MessageEmbed()
    .setTitle(`Emoji Adicionado com sucesso <a:aCheck:771439204378738749>`)
    .setColor(ss.color)
    .setThumbnail(link)
    .setDescription(`<:r_setaroxa:771053504742948904> **__Nome:__** ${name || `${customEmoji.name}`}`)
    return message.reply({ embeds: [embed]}) 
} else {
    let emojiErrado = parse(emoji, {assetType: "png"});

    if(!emojiErrado[0]) {
        const embed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`${message.author} Apenas emojis customizados podem ser adicionados no servidor`)
        .setFooter({ text: ss.footer })
        .setColor(ss.color)
        return message.reply({ embeds: [embed]}).catch(error => {
            message.reply(`Não foi possivel adicionar o emoji, erro: \n\n\`\`\`${error}\`\`\` `)
        })
    }
}



}
}