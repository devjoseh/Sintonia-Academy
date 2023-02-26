const { MessageEmbed } = require('discord.js');
const settings = require('../../configs/settings.json');

const MAX_SLOWMODE_DURATION = 21600;
const MIN_SLOWMODE_DURATION = 0;

module.exports = {
  name: 'setslowmode',
  aliases: ['slowmode', 'slow', 'channelslowmode', 'channelslowmodeset', 'ssm'],
  userPerms: ['MANAGE_CHANNELS'],
  botPerms: ['MANAGE_CHANNELS'],
  cooldown: 5000,

  run: async (client, message, args) => {
    const tempo = args[0];

    if (isNaN(tempo)) {
        const embed = new MessageEmbed()
        .setTitle(settings.titulo)
        .setDescription(`${message.author}, você deve informar um número válido!`)
        .setFooter({ text: settings.footer })
        .setColor(settings.color);
        return message.reply({ embeds: [embed] });
    }

    if (tempo > MAX_SLOWMODE_DURATION) {
        const embed = new MessageEmbed()
        .setTitle(settings.titulo)
        .setDescription(`${message.author}, insira um número de 0 a ${MAX_SLOWMODE_DURATION} para setar o modo lento.`)
        .setFooter({ text: settings.footer })
        .setColor(settings.color);
        return message.reply({ embeds: [embed] });
    }

    if (tempo < MIN_SLOWMODE_DURATION) {
        const embed = new MessageEmbed()
        .setTitle(settings.titulo)
        .setDescription(`${message.author}, insira um número de 0 a ${MAX_SLOWMODE_DURATION} para setar o modo lento.`)
        .setFooter({ text: settings.footer })
        .setColor(settings.color);
        return message.reply({ embeds: [embed] });
    }

    if (!tempo) {
        const embed = new MessageEmbed()
        .setColor(settings.color)
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(settings.titulo)
        .setDescription('<a:z_sparkles2:771102718164205578> ``!setslowmode`` \nAltere o tempo do slowmode do canal atual.\n\n<:Hmmm:771055388002746469> **Como usar?** ``!setslowmode <Tempo>``')
        .addFields({ name: '📖 **Exemplo**', value: '``!setslowmode 120``', inline: false })
        .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!slowmode, !slow, !channelslowmode, !channelslowmodeset, !ssm``', inline: false })
        .setFooter({ text: settings.footer })
        .setTimestamp();
        return message.reply({ embeds: [embed] });
    }

    message.channel.setRateLimitPerUser(tempo);

    const replyMessage = `Modo lento definido para \`${tempo}\` segundos!`;
    message.reply(replyMessage);
  },
};