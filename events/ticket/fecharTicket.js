const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')
const {MessageEmbed, MessageButton, MessageActionRow, Message} = require('discord.js')

client.on("interactionCreate", async (button) => {
    const member = button.member

    if(button.isButton() && button.customId === 'fecharDuvida' && button.channel.name.includes('ticket')) {
        const canal = button.channel
        const ticketOwner = button.guild.members.cache.get(canal.topic)

        const row1 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('DANGER')
            .setEmoji('🔒')
            .setDisabled(true)
            .setCustomId('fecharDuvida')
        )

        await button.message.edit({ components: [row1]})

        const rowDeleteFalse = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('DANGER')
            .setEmoji('🗑️')
            .setDisabled(true)
            .setCustomId('deletarDuvida')
        )
        
        const rowDeleteTrue = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('DANGER')
            .setEmoji('🗑️')
            .setDisabled(false)
            .setCustomId('deletarDuvida')
        )

        const embed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setColor(ss.color)
        .setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL()}`})
        .setDescription(`Ticket fechado por: **<@${button.user.id}>**\n\n**Clique em \`🗑️\` para deletar o ticket.**`)
        button.channel.send({ embeds: [embed], components: [rowDeleteFalse]}).then(botao => {
            setTimeout(() => {
                button.channel.edit({ name: `fechado-${member.user.username}`.toLowerCase()})
                botao.edit({ components: [rowDeleteTrue]})
            }, 2000);
        })

        button.channel.permissionOverwrites.edit(ticketOwner, {
            VIEW_CHANNEL: false
        })
    }
})