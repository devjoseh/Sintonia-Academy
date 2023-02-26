const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')

client.on('messageCreate', async message => {
    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command == 'status') {
        if(![config.owner_id].includes(message.author.id)) return
        message.delete()

        const embed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`Clique no botão que deseja para enviar as mensagens no canal de status. Tome **cuidado!** Ao clicar no botão as mensagens anteriores são apagadas`)
        .setColor(ss.color)
        .setFooter({ text: ss.footer})

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SUCCESS')
            .setLabel('Online')
            .setCustomId('online'),
            new MessageButton()
            .setStyle('DANGER')
            .setLabel('Manutenção')
            .setCustomId('manutencao'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Offline')
            .setCustomId('offline')
        )

        message.channel.send({ embeds: [embed], components: [row], fetchReply: false})
    }
})

client.on('interactionCreate', async (button) => {
    let canal = client.channels.cache.get('1025533684830437397')
    let canalerro = client.channels.cache.get('1025743422176366612')
    const member = button.member

    const msgonline = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`O Servidor encontra-se atualmente: **Online <a:online:993577949670412428>** \n\n IP: **${ss.ip}**`)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})

    const msgoffline = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`O Servidor encontra-se atualmente: **Offline <a:offline:993578004527718402>** \n\n IP: **${ss.ip}**`)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})

    const msgmanutencao = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`O Servidor encontra-se atualmente: **Em Manutenção <a:offline:993578004527718402>** \n\n IP: **${ss.ip}**`)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})

    function limparMensagens() {
        canal.messages.fetch({ limit: 100}).then(mensagens => {
            canal.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de status. \n\n\`\`\`${error}\`\`\``)
            })
        })
    }

    if (!button.isButton()) return;

    //await button.deferUpdate();

    if(button.customId === 'online') {

        limparMensagens()

        setTimeout(() => {
            canal.send({ embeds: [msgonline]})
        }, 1000);
    } else {
        if(button.customId === 'manutencao') {

            limparMensagens()

            setTimeout(() => {
                canal.send({ embeds: [msgmanutencao]})
            }, 1000);
        } else {
            if(button.customId === 'offline') {

                limparMensagens()

                setTimeout(() => {
                    canal.send({ embeds: [msgoffline]})
                }, 1000);
            } else {
                return;
            }
        }
    }
})