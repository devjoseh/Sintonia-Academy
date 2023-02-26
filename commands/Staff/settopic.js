const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
  name: "settopic",
  aliases: ["setartopico", "settopic", "mudartopico", "topicoset", "topicset", "stopic"],
  userPerms: ['MANAGE_CHANNELS'],
  botPerms: ['MANAGE_CHANNELS'],
  cooldown: 5000,

  run: async (client, message, args) => {
    const mensagem = args.join(" ")

    if (mensagem.length > 899) {
      const embed4 = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`${message.author} Sua mensagem não pode conter mais de 900 Letras`)
        .setFooter({ text: ss.footer })
        .setColor('#2F3136')
      return message.reply({ embeds: [embed4] });
    }

    if (!mensagem) {
      const embed3 = new MessageEmbed()
        .setColor(ss.color)
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(ss.titulo)
        .setDescription('<a:z_sparkles2:771102718164205578> ``!settopic`` \nAlterar a mensagem de tópico do canal da mensagem\n\n<:Hmmm:771055388002746469> **Como usar?** ``!settopic <Mensagem>``')
        .addFields({ name: '📖 **Exemplo**', value: '``!settopic Q isso meu fio calma``', inline: false })
        .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!setartopico, !settopic, !mudartopico, !topicoset, !topicset, !stopic``', inline: false })
        .setFooter({ text: ss.footer })
        .setTimestamp()
      return message.reply({ embeds: [embed3] })
    }

    try {
      await message.channel.setTopic(mensagem)
      message.reply(`<a:sim:822614654617649243> Tópico do canal alterado com sucesso`)
    } catch (error) {
      console.log(error)
      const embed5 = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`${message.author} O bot não tem permissão para alterar o tópico do canal`)
        .setFooter({ text: ss.footer })
        .setColor(ss.color)
      return message.reply({ embeds: [embed5] })
    }
  }
}