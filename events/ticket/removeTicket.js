const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')
const {MessageEmbed, MessageButton, MessageActionRow, Message} = require('discord.js')

client.on("interactionCreate", async (button) => {
    const member = button.member

    if(button.isButton() && button.customId === 'removeTicket' && button.channel.name.includes('ticket')) {
        const canal = button.channel
        const ticketOwner = button.guild.members.cache.get(canal.topic)

        if(!member.permissions.has("MANAGE_MESSAGES")) {
            return button.channel.send(`${member} Apenas staffs podem remover pessoas deste ticket.`).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 7000);
            })
        }

        const rowAddFalse = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('DANGER')
            .setEmoji('🔒')
            .setDisabled(true)
            .setCustomId('fecharDuvida'),
            new MessageButton()
            .setCustomId('addTicket')
            .setLabel('Adicionar')
            .setStyle('SECONDARY')
            .setDisabled(true)
            .setEmoji('<:JL_aprovado:944573271104442458>'),
            new MessageButton()
            .setCustomId('removeTicket')
            .setLabel('Remover')
            .setStyle('SECONDARY')
            .setDisabled(true)
            .setEmoji('<:JL_negado:944573271121223683>')
        )
        
        const rowAddtrue = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('DANGER')
            .setEmoji('🔒')
            .setDisabled(false)
            .setCustomId('fecharDuvida'),
            new MessageButton()
            .setCustomId('addTicket')
            .setLabel('Adicionar')
            .setStyle('SECONDARY')
            .setDisabled(false)
            .setEmoji('<:JL_aprovado:944573271104442458>'),
            new MessageButton()
            .setCustomId('removeTicket')
            .setLabel('Remover')
            .setStyle('SECONDARY')
            .setDisabled(false)
            .setEmoji('<:JL_negado:944573271121223683>')
        )

        button.channel.send(`${member} Informe o ID ou Mencione alguém para estar sendo removido(a) deste ticket. \n\n**Digite \`Cancelar\` para cancelar esta ação.**`).then(m => {
            setTimeout(() => {
                m.delete()
            }, 15000);
        })

        button.message.edit({ components: [rowAddFalse] })

        const filter = (m) => m.author.id === member.id;

        const collector = button.channel.createMessageCollector({
          filter,
          max: 1,
          time: 1000 * 60,
        });
        
        collector.on('collect', (message) => {
        if (message.content.toLowerCase() === 'cancelar') {
            collector.stop();
            return button.channel.send('Você cancelou a ação de remover alguém do ticket.').then(m => {
                setTimeout(() => {
                    m.delete()
                }, 7000);
            })
        }

        let memberMsg = message.mentions.members.first() || message.guild.members.cache.get(message.content)
        
        if(!memberMsg) {
            return button.channel.send(`**Você deve informar um ID Válido ou mencionar uma pessoa que esteja no servidor.**`).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 10000);
            })
        }

        button.channel.permissionOverwrites.edit(memberMsg, {
            ATTACH_FILES: false,
            READ_MESSAGE_HISTORY: false,
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        })

        button.channel.send(`**${member}** Removeu **<@${memberMsg.id}>** deste ticket.`)
        });  

        collector.on('end', () => {
            button.message.edit({ components: [rowAddtrue] })
        });
    }
})