const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

// Valores fixos
const MAX_MESSAGES = 100
const MIN_MESSAGES = 1

module.exports = {
  name: "clear",
  aliases: ["clear", "clean", "limpar"],
  userPerms: ['MANAGE_MESSAGES'],
  botPerms: ['MANAGE_MESSAGES'],
  cooldown: 5000,

  async run(client, message, args) {
    const mensagens = args.join(" ");

    if (!mensagens) {
      const embed3 = new MessageEmbed()
        .setColor(ss.color)
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(ss.titulo)
        .setDescription('<:z_sparkles2:771102718164205578> ``!clear`` \nLimpa uma quantia de mensagens de um canal.\n\n<:Hmmm:771055388002746469> **Como usar?** ``!clear <Quantia>``')
        .addFields({ name: '📖 **Exemplo**', value: '``!clear 10``', inline: false })
        .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!clear, !limpar, !clean``', inline: false })
        .setFooter({ text: ss.footer })
        .setTimestamp()
      return message.reply({ embeds: [embed3] })
    }

    try {
      const numMensagens = parseInt(mensagens)

      if (isNaN(numMensagens)) {
        throw new Error('Você deve informar um número válido!')
      }

      if (numMensagens > MAX_MESSAGES) {
        throw new Error(`Eu só consigo limpar de ${MIN_MESSAGES} até ${MAX_MESSAGES} mensagens passadas!`)
      }

      if (numMensagens < MIN_MESSAGES) {
        throw new Error(`Eu só consigo limpar de ${MIN_MESSAGES} até ${MAX_MESSAGES} mensagens passadas!`)
      }

      await message.channel.messages.fetch({ limit: numMensagens })
        .then(messages => {
          message.channel.bulkDelete(messages, true)
          message.channel.send(`Chat limpo por ${message.author}!`).then(m => {
            setTimeout(() => {
              m.delete()
            }, 5000)
          })
        })
        .catch(error => {
          message.channel.send(`Não foi possível apagar algumas mensagens pois elas foram enviadas a mais de 14 Dias! (2 Semanas)`)
        })
        
    } catch (error) {
      const embedError = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`${message.author} ${error.message}`)
        .setFooter({ text: ss.footer })
        .setColor(ss.color)
      return message.reply({ embeds: [embedError] });
    }
  }
}