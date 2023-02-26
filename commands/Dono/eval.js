const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "eval",

run: async (client, message, args) => {
if (!['434791887241740288'].includes(message.author.id)) return

let code = args.join (' ')

if(!code) {
    return message.reply(`Insira um código para ser executado.`)
}

await message.reply('Executando código...').then(async m => {
    try {
        let antes = Date.now()
        let resultado = eval(code)

        if(resultado instanceof Promise) {
            m.edit('Uma promise encontrada, estou esperando ela ser resolvida!')
            await resultado
        }

        if (typeof resultado !== 'string') resultado = require('util').inspect(resultado)
        let fim = (Date.now() - antes)

        const embed = new MessageEmbed()
        .setTitle('Codigo Correto')
        .setTimestamp()
        .setDescription(`\`\`\`${resultado.slice(0, 2000)} \`\`\``)
        .setColor(ss.color)
        m.edit({ embeds: [embed]})
    } catch (error) {
        const embed2 = new MessageEmbed()
        .setTitle('Codigo Errado')
        .setTimestamp()
        .setDescription(`\`\`\`${error.stack.slice(0, 2000)}\`\`\``)
        .setColor(ss.color)
        m.edit({ embeds: [embed2]})
    }
})

}
}