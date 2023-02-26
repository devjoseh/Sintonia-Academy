const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')
const ticketConfig = require('../../configs/config.js')
const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
const sourcebin = require('sourcebin_js');

client.on("interactionCreate", async (button) => {
    const member = button.member

    if(button.isButton() && button.customId === 'deletarDuvida' && button.channel.name.includes('fechado')) {
        const canal = button.channel
        const ticketOwner = button.guild.members.cache.get(canal.topic)
        const canalTranscript = client.channels.cache.get(ticketConfig.ticketsTranscripts)

        const rowCloseFalse = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle("DANGER")
            .setEmoji("🗑️")
            .setDisabled(true)
            .setCustomId("deletarDuvida")
        );

        button.message.edit({ components: [rowCloseFalse]})
    
        let msg = await canal.send({ content: 'Salvando mensagens...'})
    
        canal.messages.fetch().then(async (messages) => {
            const content = messages.reverse().map(m => `${new Date(m.createdAt).toLocaleString('pt-BR')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n')
    
            let transcript = await sourcebin.create([{ name: `${canal.name}`, content: content, languageId: 'text'}], {
                title: `Transcript ticket: ${canal.name}`,
                description: ' ',
            })
    
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setStyle('LINK')
                .setEmoji('<:download:833374351386476575>')
                .setURL(`${transcript.url}`)
            )
    
            const embed = new MessageEmbed()
            .setTitle(ss.titulo)
            .setColor(ss.color)
            .setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL()}`})
            .addFields(
                { name: "Canal", value: `${button.channel.name}`},
                { name: "Ticket Aberto por:", value: `<@!${ticketOwner.id}>`},
                { name: "Transcript", value: `[Abrir Transcript](${transcript.url})`}
            )
    
            await canalTranscript.send({ embeds: [embed], components: [row]})
        })
    
        await msg.edit({ content: `Transcript salvo em: <#${canalTranscript.id}>`})
        await canal.send({ content: `O ticket será deletado em 5 segundos.`})
    
        setTimeout(() => {
            canal.delete()
        }, 5000);
    }


})