const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')

client.on('messageCreate', async message => {
    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command == 'cargo') {
        if(![config.owner_id].includes(message.author.id)) return
        message.delete()

        const embed = new MessageEmbed()
        .setTitle(`💼 Gerenciamento de Cargos 💼`)
        .setDescription(`Selecione o cargo que deseja ter no servidor! \nCaso você selecione um cargo que você já tenha ele será removido e vice-versa \n\n🎗 **Gênero** \n> 👨 <a:seta56:833372754505629758> Homem \n> 👩 <a:seta56:833372754505629758> Mulher \n\n🔔 **Notificações** \n> ✨ <a:seta56:833372754505629758> Atualizações \n> 📢 <a:seta56:833372754505629758> Anuncios \n> 🔎 <a:seta56:833372754505629758> Enquetes \n> 🎁 <a:seta56:833372754505629758> Sorteios \n> 👒 <a:seta56:833372754505629758> Status`)
        .setColor(ss.color)
        .setFooter({ text: ss.footer})

        const row1 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setCustomId('homem')
            .setEmoji('👨'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setCustomId('mulher')
            .setEmoji('👩'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setCustomId('atualizacoes')
            .setEmoji('✨'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setCustomId('anuncios')
            .setEmoji('📢'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setCustomId('enquetes')
            .setEmoji('🔎'),
        )

        const row2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setCustomId('sorteios')
            .setEmoji('🎁'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setCustomId('status')
            .setEmoji('👒'),
        )
        
        message.channel.send({ embeds: [embed], components: [row1, row2], fetchReply: false})

    }
})

client.on('interactionCreate', async (button) => {
    const member = button.member
    let server = client.guilds.cache.get(config.guild_id)
    const canalerro = client.channels.cache.get('1025743422176366612')

    let homemTem = member.roles.cache.some(role => role.name === '🧑・Homem')
    let homemCargo = server.roles.cache.get("1074839401592533042")

    let mulherTem = member.roles.cache.some(role => role.name === '👩・Mulher')
    let mulherCargo = server.roles.cache.get("1074839404377555064")

    let atuTem = member.roles.cache.some(role => role.name === '🔔・Atualizacoes')
    let atuCargo = server.roles.cache.get("1025546008958087238")

    let anuTem = member.roles.cache.some(role => role.name === '🔔・Anuncios')
    let anuCargo = server.roles.cache.get("1025546316710944788")

    let enqTem = member.roles.cache.some(role => role.name === '🔔・Enquetes')
    let enqCargo = server.roles.cache.get("1025546324185194556")

    let sortTem = member.roles.cache.some(role => role.name === '🔔・Sorteios')
    let sortCargo = server.roles.cache.get("1025546470977437787")

    let statTem = member.roles.cache.some(role => role.name === '🔔・Status')
    let statCargo = server.roles.cache.get("1025546599872610426")

    if (!button.isButton()) return;

    if(button.customId === 'homem') {
        if(!homemTem) {
            member.roles.add(homemCargo)
        } else {
            if(homemTem) {
                member.roles.remove(homemCargo)
            } else {
                canalerro.send(`Não foi possivel verificar se ${member}/${member.id} possui o cargo Homem`)
            }
        }
    } 

    if(button.customId === 'mulher') {
        if(!mulherTem) {
            member.roles.add(mulherCargo)
        } else {
            if(mulherTem) {
                member.roles.remove(mulherCargo)
            } else {
                canalerro.send(`Não foi possivel verificar se ${member}/${member.id} possui o cargo Mulher`)
            }
        }
    } 

    if(button.customId === 'atualizacoes') {
        if(!atuTem) {
            member.roles.add(atuCargo)
        } else {
            if(atuTem) {
                member.roles.remove(atuCargo)
            } else {
                canalerro.send(`Não foi possivel verificar se ${member}/${member.id} possui o cargo Atualizações`)
            }
        }
    } 

    if(button.customId === 'anuncios') {
        if(!anuTem) {
            member.roles.add(anuCargo)
        } else {
            if(anuTem) {
                member.roles.remove(anuCargo)
            } else {
                canalerro.send(`Não foi possivel verificar se ${member}/${member.id} possui o cargo Anuncios`)
            }
        }
    } 

    if(button.customId === 'enquetes') {
        if(!enqTem) {
            member.roles.add(enqCargo)
        } else {
            if(enqTem) {
                member.roles.remove(enqCargo)
            } else {
                canalerro.send(`Não foi possivel verificar se ${member}/${member.id} possui o cargo Enquetes`)
            }
        }
    } 

    if(button.customId === 'sorteios') {
        if(!sortTem) {
            member.roles.add(sortCargo)
        } else {
            if(sortTem) {
                member.roles.remove(sortCargo)
            } else {
                canalerro.send(`Não foi possivel verificar se ${member}/${member.id} possui o cargo Sorteios`)
            }
        }
    } 

    if(button.customId === 'status') {
        if(!statTem) {
            member.roles.add(statCargo)
        } else {
            if(statTem) {
                member.roles.remove(statCargo)
            } else {
                canalerro.send(`Não foi possivel verificar se ${member}/${member.id} possui o cargo Status`)
            }
        }
    } 
})