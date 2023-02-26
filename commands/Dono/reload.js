const { MessageEmbed } = require('discord.js');
const ss = require('../../configs/settings.json');

module.exports = {
  name: "reload",

  run: async (client, message, args) => {
    const usersId = ['434791887241740288', '852657010273288193'];

    if(!usersId.includes(message.author.id)) return

    if (!args[0]) {
      const categoryEmbed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription("Informe o nome da categoria do comando que você deseja reiniciar!")
        .setColor(ss.color)
        .setFooter({ text: ss.footer, iconURL: client.user.displayAvatarURL({dynamic: true}) });
      return message.channel.send({ embeds: [categoryEmbed] });
    }

    if (!args[1]) {
      const commandEmbed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription("Informe o nome do comando que você deseja reiniciar!")
        .setColor(ss.color)
        .setFooter({ text: ss.footer, iconURL: client.user.displayAvatarURL({dynamic: true}) });
      return message.channel.send({ embeds: [commandEmbed] });
    }

    const category = args[0].toLowerCase();
    const command = args[1].toLowerCase();

    try {
      delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
      client.commands.delete(command);

      const pull = require(`../../commands/${category}/${command}.js`);
      client.commands.set(command, pull);

      const successEmbed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`O Comando ${command} foi Recarregado com sucesso`)
        .setColor(ss.color)
        .setFooter({ text: ss.footer, iconURL: client.user.displayAvatarURL({dynamic: true}) });
      message.channel.send({ embeds: [successEmbed] });
    } catch (error) {
      return message.channel.send(`Não foi possivel dar reload neste comando, erro: \n\n \`\`\`${error}\`\`\``);
    }
  }
}