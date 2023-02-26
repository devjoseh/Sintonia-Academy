const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "reload",

run: async (client, message, args) => {

if (!['434791887241740288'].includes(message.author.id)) return


if (!args[0]) {
const embed1 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`Informe o nome da categoria do comando que você deseja reiniciar!`)
.setColor(ss.color)
.setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
return message.reply({ embeds: [embed1]})
}

if (!args[1]) {
const embed2 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`Informe o nome do comando que você deseja reiniciar!`)
.setColor(ss.color)
.setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
return message.reply({ embeds: [embed2]})
}

let category = args[0].toLowerCase()
let command = args[1].toLowerCase()

try {
delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
client.commands.delete(command);

const pull = require(`../../commands/${category}/${command}.js`)
client.commands.set(command, pull)

const embed3 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`<a:aCheck:771439204378738749> O Comando **${command}** foi Recarregado com sucesso`)
.setColor(ss.color)
.setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
message.reply({ embeds: [embed3]})

} catch (error) {
return message.reply(`Não foi possivel dar reload neste comando, erro: \n\n \`\`\`${error}\`\`\``)
}

}
}