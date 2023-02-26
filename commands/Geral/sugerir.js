const { MessageEmbed, Message } = require('discord.js')
const ss = require('../../configs/settings.json')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
name: "sugerir",
aliases: ["sugestao", "dica", "ideia", "sugestão"],
cooldown: 5000,

run: async (client, message, args) => {

const sugestao = args.join(" ")
const canal = client.channels.cache.get('1025533933288423524')
let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
let canalerro = client.channels.cache.get('1025743422176366612')

let timeout = 60000;
let author = db.get(`temposugestao_${message.author.id}`);

if(!sugestao) {
    const embed = new MessageEmbed()
    .setColor(ss.color)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(ss.titulo)
    .setDescription('<a:z_sparkles2:771102718164205578> ``!sugerir`` \nEnviar uma sugestão para o servidor\n\n<:Hmmm:771055388002746469> **Como usar?** ``!sugerir <Sugestão>``')
    .addFields({ name: '📖 **Exemplo**', value: '``!sugerir Adicionar mais spawners no servidor``', inline: false })
    .addFields({ name: '<a:emoji_65:771054128406855730> Sinônimos', value: '``!sugerir, !sugestao, !dica, !ideia, !sugestão``', inline: false })
    .setFooter({ text: ss.footer})
    .setTimestamp()
    return message.reply({ embeds: [embed]})
}

if(author !== null && timeout - (Date.now() - author) > 0){
    let time = ms(timeout - (Date.now() - author));
    return message.reply(`Você já enviou uma sugestão recentemente, aguarde: **__${time.minutes} minutos, e ${time.seconds} segundos.__**`)
}

if(sugestao.length >= 500) {
    const embed2 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`<a:bongoscript:771047230994907196> ${message.author} seu texto não pode possuir mais de 500 Letras!`)
    .setFooter({ text: ss.footer})
    .setColor(ss.color)
    return message.reply({ embeds: [embed2]})
}

const webhooks = await canal.fetchWebhooks()
var webhook = webhooks.first()

if(!webhook) {
    return message.reply({ content: `Não foi possivel enviar sua sugestão porque meu webhook foi deletado! Re-Configure o sistema para voltar a funcionar!`})
}

const embed3 = new MessageEmbed()
.setColor(ss.color)
.setAuthor({ name: ss.titulo + ' sugestões', iconURL: `${message.author.displayAvatarURL()}`})
.setThumbnail(client.user.displayAvatarURL())
.setTimestamp()
.setFooter({ text: ss.footer})
.setDescription(`<:JL_duvida:943301808670003261> **Deseja enviar uma sugestão? vá em <#1025532528028827648> e digite \`!sugerir\`** \n\n・**Sugestão enviada por:** \n\`\`\` ${message.author.tag} - ${message.author.id}\`\`\` \n・**Sugestão:** \n\`\`\` ${sugestao}\`\`\``)
db.set(`temposugestao_${message.author.id}`, Date.now())
var messageSugestao = await webhook.send({ 
    username: message.author.username,
    avatarURL: avatar,
    embeds: [embed3]
}).catch(error => {
    return canalerro.send(`Não foi possivel enviar a sugestão webhook de ${message.author} \n\n\`\`\`${error}\`\`\``)
})

canal.messages.fetch(messageSugestao.id).then(msg => {
    msg.react('944573271104442458')
    msg.react('944573271121223683')
}).catch(error => {
    return canalerro.send(`Não foi possivel adicionar reações na sugestão de ${message.author} \n\n\`\`\`${error}\`\`\``)
})

message.reply(`<a:aCheck:771439204378738749> ${message.author} Sua sugestão foi enviada com sucesso.`)

}
}