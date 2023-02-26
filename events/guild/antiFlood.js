const client = require('../..')
const ss = require('../../configs/settings.json')
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')

const map = new Map()

client.on('messageCreate', async (message, guild) => {
    if(map.has(message.author.id)) {
        const data = map.get(message.author.id)
        const {lastmsg, timer } = data
        const diff = message.createdTimestamp - lastmsg.createdTimestamp
        let msgs = data.msgs
        if (diff > 2000) {
            clearTimeout(timer)
            data.msgs = 1
            data.lastmsg = message
            data.timer = setTimeout(() => {
                map.delete(message.author.id)
            }, 5000);
            map.set(message.author.id, data)
        } else {
            ++ msgs
            if(parseInt(msgs) === 5) {
                const rolename = "🔇・Mutado"
                const role = message.guild.roles.cache.find(roles => roles.name.toLocaleLowerCase() === rolename.toLocaleLowerCase())
                message.member.roles.add(role)
                db.set(`membromutado_${message.author.id}`, true)
                const embed1 = new MessageEmbed()
                .setTitle(ss.titulo)
                .addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario mutado:`, value: `<:r_setaroxa:993927029990899823> Nick: \`${message.author.tag}\``, inline: false })
                .addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario mutado:`, value: `<:r_setaroxa:993927029990899823> ID: \`${message.author.id}\``, inline: false })
                .addFields({ name: `<:tempo:824712291563208754> Tempo Mute:`, value: `<:r_setaroxa:993927029990899823> \`10 Minutos\``, inline: false })
                .addFields({ name: `<:ItemPlan:995470987107762176> Motivo:`, value: `<:r_setaroxa:993927029990899823> **Floodando/Spammando no chat \`(Punição Automatica)\`**`, inline: false })
                .setFooter({ text: ss.footer})
                .setColor(ss.color)
                message.channel.send({ embeds: [embed1]})

                setTimeout(() => {
                    let canalerros = client.channels.cache.get('1025743422176366612')
                    let membromutado = db.get(`membromutado_${message.author.id}`)

                    if(membromutado == true) {
                        message.member.roles.remove(role).catch(error => {
                            return canalerros.send(`Não foi possivel tirar o mute de ${message.author} por: \n\n\`${error}\``)
                        })
                        const embed2 = new MessageEmbed()
                        .setTitle(ss.titulo)
                        .addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario desmutado:`, value: `<:r_setaroxa:993927029990899823> Nick: \`${message.author.tag}\``, inline: false})
                        .addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario desmutado:`, value: `<:r_setaroxa:993927029990899823> ID: \`${message.author.id}\``, inline: false})
                        .addFields({ name: `<a:verificado_roxo:994352303802941571> Fim do Mute!`, value: `<:r_setaroxa:993927029990899823> Esperamos que você não cometa mais os mesmos erros!`, inline: false})
                        .setFooter({ text: ss.footer})
                        .setColor(ss.color)
                        message.channel.send({ embeds: [embed2]})
                        db.set(`membromutado_${message.author.id}`, false)
                    } else {
                        return;
                    }
                }, 600000);
            } else {
                data.msgs = msgs
                map.set(message.author.id, data)
            }
        }
    } else {
        let remove = setTimeout(() => {
            map.delete(message.author.id)
        }, 5000);
        map.set(message.author.id, {
            msgs: 1,
            lastmsg: message,
            timer: remove
        })
    }
})