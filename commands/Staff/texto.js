const { MessageEmbed, Message } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "texto",
aliases: ["text", "txt"],
userPerms: ['ADMINISTRATOR'],
botPerms: ['ADMINISTRATOR'],
cooldown: 5000,

async run (client, message, args) {
const mensagem = args.join(" ");

if(!mensagem) {
const embed3 = new MessageEmbed()
.setColor(ss.color)
.setThumbnail(client.user.displayAvatarURL())
.setTitle(ss.titulo)
.setDescription('<a:z_sparkles2:771102718164205578> ``!texto`` \nMuda o formato do texto.\n\n<:Hmmm:771055388002746469> **Como usar?** ``!texto <Texto>``')
.addFields({ name: '📖 **Exemplo**', value: '``!texto Teste``', inline: false })
.addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!text, !txt``', inline: false })
.setFooter({ text: ss.footer})
.setTimestamp()
return message.reply({ embeds: [embed3]})
}

let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
texto = " ,ᴀ,ʙ,ᴄ,ᴅ,ᴇ,ғ,ɢ,ʜ,ɪ,ᴊ,ᴋ,ʟ,ᴍ,ɴ,ᴏ,ᴘ,ǫ,ʀ,s,ᴛ,ᴜ,ᴠ,ᴡ,x,ʏ,ᴢ,1,2,3,4,5,6,7,8,9,0".split(","),
text = args.join(" ").toUpperCase();

if(!text) {
    const embed = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Você não pode marcar here utilizando o say!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed]})
}

while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
    text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
}

if (text.startsWith(".") || text.startsWith("-")) {
    text = text.split(" ")
    let length = text.length;

    for (i = 0; i < length; i++) {
        text[i] = alpha[texto.indexOf(text[i])]
    }

    text = text.join("")
} else {
    text = text.split("")
    let length = text.length;

    for (i = 0; i < length; i++) {
        text [i] = texto[alpha.indexOf(text[i])]
    }

    text = text.join(" ")
}

return message.reply("```"+text+"```")

}
};