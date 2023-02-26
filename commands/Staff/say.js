const { MessageEmbed } = require('discord.js');
const ss = require('../../configs/settings.json');

module.exports = {
  name: "say",
  aliases: ["falar"],
  userPerms: ['MANAGE_MESSAGES'],
  botPerms: ['MANAGE_MESSAGES'],
  cooldown: 5000,

  async run(client, message, args) {
    const mensagem = args.join(" ");

    if (!mensagem) {
      const embed3 = new MessageEmbed()
        .setColor(ss.color)
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(ss.titulo)
        .setDescription(`<a:z_sparkles2:771102718164205578> \`!say\`\nEnvia uma mensagem normal.\n\n<:Hmmm:771055388002746469> **Como usar?** \`!say <Conteúdo>\``)
        .addFields({ name: '📖 **Exemplo**', value: '`!say YTJoseGames Lindo`', inline: false })
        .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '`!falar`', inline: false })
        .setFooter({ text: ss.footer })
        .setTimestamp();

      return message.reply({ embeds: [embed3] });
    }

    if (mensagem.length > 1000) {
      const embed6 = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`${message.author} Seu texto não pode ter mais de 1.000 Letras!`)
        .setFooter({ text: ss.footer })
        .setColor(ss.color);

      return message.reply({ embeds: [embed6] });
    }

    try {
      await message.delete();
      await message.channel.send(mensagem);
    } catch (error) {
      console.error(error);
      return message.reply(`Ocorreu um erro ao enviar a mensagem. \n\n\`\`\`${error}\`\`\``);
    }
  },
};