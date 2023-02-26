const { MessageEmbed } = require('discord.js')
const ms = require("ms")
const ss = require('../../configs/settings.json')

module.exports = {
name: "mute",
aliases: ["mutar", "silenciar"],
userPerms: ['MANAGE_MESSAGES'],
botPerms: ['MANAGE_MESSAGES'],
cooldown: 5000,

async run (client, message, args) {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let role = message.guild.roles.cache.find(ch => ch.name === "🔇・Mutado")
let time = args[1]
let motivo = args.slice(2).join(" ")
let author = message.author;

if(!args[0]) {
    const embed3 = new MessageEmbed()
    .setColor(ss.color)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(ss.titulo)
    .setDescription('<a:z_sparkles2:771102718164205578> ``!mute`` \nSilencie alguém do servidor por um tempo\n\n<:Hmmm:771055388002746469> **Como usar?** ``!mute <Usúario> <Tempo> <Motivo>``')
    .addFields({ name: '📖 **Exemplo**', value: '``!mute YTJoseGames 1h Gostoso``', inline: false })
    .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!mutar, !silenciar``', inline: false })
    .setFooter({ text: ss.footer})
    .setTimestamp()
    return message.reply({ embeds: [embed3]})
}

if(!member) {
    const embed4 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Esse usúario não está no servidor!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed4]});
}

if(member.id === message.author.id) {
    const embed5 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Você não pode mutar a si mesmo!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed5]});
}

if(member.id === client.user.id) {
    const embed6 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Você não pode me mutar!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed6]});
}

if (!time) {
    const embed7 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Você não especificou um tempo valido <m/h/d> `)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed7]});
}

if (!time[1].endsWith("h")) {
    if (!time[1].endsWith("m")) {
        if (!time[1].endsWith("s")) {
            const embed8 = new MessageEmbed()
            .setTitle(ss.titulo)
            .setDescription(`${message.author} O tempo informado não existe! utilize (j!mute <Usuário> <Tempo> <Motivo>)`)
            .setFooter({ text: ss.footer})
            .setColor(ss.color)
            return message.reply({ embeds: [embed8]})
        }
    }
}

if(time.length >= 3) {
    const embed99 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} O tempo não pode passar de 2 digitos`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed99]}); 
}

if (message.member.roles.highest.position <= member.roles.highest.position) {
    const embed9 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} O membro marcado tem um cargo maior que o seu.`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed9]});
}

if (message.guild.me.roles.highest.position <= member.roles.highest.position) {
    const embed10 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} O membro marcado tem um cargo maior que o meu.`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed10]});
}

if(!motivo) {
    const embed11 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Você Precisa me informar um motivo para punir esse usúario!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed11]});
}

if(!motivo.length > 1000) {
    const embed11 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} O Motivo para punir este usuário não pode ter mais de 1000 Letras`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed11]});
}

if (member.roles.cache.has(role.id)) {
    const embed12 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`${message.author} Este usuário já está mutado`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed12]});
}

member.roles.add(role, {reason: `${motivo || "Não Especificado"}`})
.catch(error => {return message.channel.send(`[ERROR] Não foi possivel mutar o usuário, motivo: \n\n${error}`)})
const embed13 = new MessageEmbed()
.setTitle(ss.titulo)
.addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario mutado:`, value: `<:r_setaroxa:993927029990899823> Nick: \`${member.user.tag}\``, inline: false })
.addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario mutado:`, value: `<:r_setaroxa:993927029990899823> ID: \`${member.id}\``, inline: false })
.addFields({ name: `<:BadgeDiscordStaff:843967910933954631> Mutado Por:`, value: `<:r_setaroxa:771053504742948904> Staff: \`${author.tag}\``, inline: false })
.addFields({ name: `<:BadgeDiscordStaff:843967910933954631> Mutado Por:`, value: `<:r_setaroxa:771053504742948904> ID: \`${author.id}\``, inline: false })
.addFields({ name: `<:tempo:824712291563208754> Tempo:`, value: `<:r_setaroxa:771053504742948904> \`${time.replace(`s`, ` segundo(s)`).replace("m", " minuto(s)").replace("h", " hora(s)")}\``, inline: false })
.addFields({ name: `<:ItemPlan:833377653691645982> Motivo:`, value: `<:r_setaroxa:771053504742948904>**${motivo}**`, inline: false })
.setFooter({ text: ss.footer})
.setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
.setTimestamp()
.setColor(ss.color)
message.channel.send({ embeds: [embed13]})

setTimeout(function() {
let user = message.guild.members.cache.get(member.id)
if (!user) return;
if (!member.roles.cache.has(role.id)) return;
member.roles.remove(role)
.catch(error => {return message.channel.send(`[ERROR] Não foi possivel desmutar o usuário, motivo: \n\n${error}`)})
const embed14 = new MessageEmbed()
.setColor(ss.color)
.setFooter({ text: ss.footer})
.addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario desmutado:`, value: `<:r_setaroxa:993927029990899823> Nick: \`${member.user.tag}\``, inline: false })
.addFields({ name: `<a:verificado_roxo:994352303802941571> Usúario desmutado:`, value: `<:r_setaroxa:993927029990899823> ID: \`${member.id}\``, inline: false })
.addFields({ name: `<:BadgeDiscordStaff:843967910933954631> Mutado Por:`, value: `<:r_setaroxa:771053504742948904> Staff: \`${author.tag}\``, inline: false })
.addFields({ name: `<:BadgeDiscordStaff:843967910933954631> Mutado Por:`, value: `<:r_setaroxa:771053504742948904> ID: \`${author.id}\``, inline: false })
.addFields({ name: `<a:verificado_roxo:994352303802941571> Fim do Mute!`, value: `<:r_setaroxa:993927029990899823> Esperamos que você não cometa mais os mesmos erros!`, inline: false})
.addFields({ name: `<:busca:824712167009419311> Data:`, value: `<:r_setaroxa:993927029990899823> \`${message.createdAt.toLocaleString()}\``, inline: false})
.setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
message.channel.send({ embeds: [embed14]})
}, ms(time))

}
}