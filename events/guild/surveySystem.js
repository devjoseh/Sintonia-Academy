const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')

client.on('messageCreate', async message => {
    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command == 'enquete') {
        if(![config.owner_id].includes(message.author.id)) return
        message.delete()

        const embed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`Clique no botão iniciar para iniciar a enquete.`)
        .setColor(ss.color)
        .setFooter({ text: ss.footer})

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SUCCESS')
            .setLabel('Iniciar')
            .setCustomId('iniciar')
        )

        message.channel.send({ embeds: [embed], components: [row], fetchReply: false})
    }
})

client.on('interactionCreate', async (button) => {
    let canal = client.channels.cache.get('1025534157620777021')
    let canalerro = client.channels.cache.get('1025743422176366612')
    const member = button.member

    if (!button.isButton()) return;

    if(button.customId === 'iniciar') {

        const filter = (m) => member.id === member.id

        const DM = await member.send({content: `O que você quer enviar na enquete?`});
        const collector = DM.channel.createMessageCollector({filter, max: 1, time: 30000});

        collector.on('collect', m => {
            const embed = new MessageEmbed()
            .setTitle(ss.titulo)
            .setColor(ss.color)
            .setDescription(`${m.content} \n\n<:JL_aprovado:944573271104442458> Sim | <:JL_negado:944573271121223683> Não`)
            .setFooter({ text: ss.footer})
            .setTimestamp()
            canal.send({ embeds: [embed], content: `<@&1025546324185194556>`}).then(msg => {
                msg.react('944573271104442458')
                msg.react('944573271121223683')
            })

        })

    } else {
        return
    }
})