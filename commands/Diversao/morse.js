const { MessageEmbed } = require('discord.js')

module.exports = {
name: "morse",
cooldown: 5000,

run: async (client, message, args) => {
let texto = args.slice(0).join(" ")
let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
text = args.join(" ").toUpperCase();

if(!text) {
    const embed = new MessageEmbed()
    .setColor(ss.color)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(ss.titulo)
    .setDescription('<a:z_sparkles2:771102718164205578> ``!morse`` \nConverta um texto para morse e vice-versa\n\n<:Hmmm:771055388002746469> **Como usar?** ``!morse <Texto>``')
    .addFields({ name: '📖 **Exemplo**', value: '``!morse YTJoseGames gostoso dms``', inline: false })
    .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``nenhum``', inline: false })
    .setFooter({ text: ss.footer})
    .setTimestamp()
    return message.reply({ embeds: [embed]})
}

if (texto > 300) {
    const embed2 = new MessageEmbed()
    .setTitle(`Um problema foi encontrado ${emoji.triste}`)
    .setDescription(`<a:bongoscript:771047230994907196> ${message.author} Seu texto não pode conter mais de 300 Letras!`)
    .setFooter({ text: `• July™ Commands`, iconURL: `${message.author.displayAvatarURL({dynamic: true})}`})
    .setColor('#6400b6')
    return message.reply({ embeds: [embed2]});
}

while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
}

if (text.startsWith(".") || text.startsWith("-")) {
text = text.split(" ");
let length = text.length;
for (i = 0; i < length; i++) {
text[i] = alpha[morse.indexOf(text[i])];
}
text = text.join("");
} else {
text = text.split("");
let length = text.length;
for (i = 0; i < length; i++) {
text [i] = morse[alpha.indexOf(text[i])];
}
text = text.join(" ");
}
return message.reply("```"+text+"```");
}
}