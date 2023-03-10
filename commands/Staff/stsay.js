const { MessageEmbed } = require('discord.js');
const ss = require('../../configs/settings.json');

module.exports = {
    name: "stsay",
    aliases: ["falarembed", "embedmsg", "staffsay", "embedsay"],
    userPerms: ['MANAGE_MESSAGES'],
    botPerms: ['MANAGE_MESSAGES'],
    cooldown: 5000,

    async run(client, message, args) {
        const mensagem = args.join(" ");
        const MAX_MESSAGE_LENGTH = 1000;

        if (args.length === 0 || !mensagem) {
            const embed = new MessageEmbed()
                .setColor(ss.color)
                .setThumbnail(client.user.displayAvatarURL())
                .setTitle(ss.titulo)
                .setDescription('<a:z_sparkles2:771102718164205578> ``!stsay`` \nEnvia uma mensagem em embed\n\n<:Hmmm:771055388002746469> **Como usar?** ``j!stsay <Conteúdo>``')
                .addFields({ name: '📖 **Exemplo**', value: '``!stsay YTJoseGames Lindo``', inline: false })
                .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!falarembed, !embedmsg, !staffsay, !embedsay``', inline: false })
                .setFooter({ text: ss.footer })
                .setTimestamp();
            return message.channel.send({ embeds: [embed] });
        }

        if (mensagem.length > MAX_MESSAGE_LENGTH) {
            const embed6 = new MessageEmbed()
                .setTitle(ss.titulo)
                .setDescription(`${message.author} Seu texto não pode ter mais de ${MAX_MESSAGE_LENGTH} letras!`)
                .setFooter({ text: ss.footer })
                .setColor(ss.color);
            return message.channel.send({ embeds: [embed6] });
        }

        message.delete().catch(O_o => {});
        const embed7 = new MessageEmbed()
            .setColor(ss.color)
            .setDescription(`${mensagem}`);
        message.channel.send({ embeds: [embed7] });
    }
};