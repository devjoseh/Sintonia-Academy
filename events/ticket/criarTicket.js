const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')
const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
const ticketConfig = require('../../configs/config.js')

client.on('interactionCreate', async (button) => {
    
    const member = button.member
    let mensagens = client.channels.cache.get('1025534051345518662')

    const embedErro = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})
    .setDescription(`Você já possui um ticket aberto, feche-o para poder abrir outro!`)
    
    await button.deferUpdate();

    if(button.customId === 'duvidas') {
        
        let ticketc = `ticket-${member.user.username}`.toLowerCase();

        let cargosSuporte = ticketConfig.ticketsSupportRoles.map(x => {
            return {
                id: x,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'MANAGE_MESSAGES']
            }
        });

        if(button.guild.channels.cache.find(c => c.topic == member.user.id && c.name.includes("ticket"))) return mensagens.send({ embeds: [embedErro], content: `${member}`}).then(m => {
            setTimeout(() => {
                m.delete()
            }, 5000);
        })

        const canalTicket = await member.guild.channels.create(ticketc, {
            parent: ticketConfig.ticketsOpenCategory,
            type: 'text',
            topic: `${member.id}`,
            permissionOverwrites: [
                {
                    id: member.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY']
                },
                {
                    id: button.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                ...cargosSuporte
            ],
        })

        const ticketEmbed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setColor(ss.color)
        .setFooter({ text: ss.footer})
        .setDescription(`Seja bem-vindo(a) ao seu **TICKET**! Envie qual é a sua dúvida e iremos responder em breve. \n\n**Clique em \`🔒\` para fechar o ticket!**`)

        const ticketMenu = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('fecharDuvida')
            .setLabel('Fechar')
            .setStyle('DANGER')
            .setEmoji('🔒'),
            new MessageButton()
            .setCustomId('addTicket')
            .setLabel('Adicionar')
            .setStyle('SECONDARY')
            .setEmoji('<:JL_aprovado:944573271104442458>'),
            new MessageButton()
            .setCustomId('removeTicket')
            .setLabel('Remover')
            .setStyle('SECONDARY')
            .setEmoji('<:JL_negado:944573271121223683>')
        )

        await canalTicket.send({ embeds: [ticketEmbed], content: `||<@${member.id}> ${ticketConfig.ticketsSupportRoles.map((m) => `<@&${m}>`).join(", ")}||`, components: [ticketMenu]})

    }

    
})