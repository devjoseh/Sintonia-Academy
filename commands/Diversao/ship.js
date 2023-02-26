const { MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas')
const ss = require('../../configs/settings.json')

module.exports = {
name: "ship",
aliases: ["shipar", "love"],
cooldown: 5000,

run: async (client, message, args) => {
let membro1 = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let membro2 = message.mentions.members.last() || message.guild.members.cache.get(args[1])
  
if(!membro1) {
const embed = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} Você deve mencionar duas pessoas!`)
.setFooter({ text: ss.footer })
.setColor(ss.color)
return message.reply({ embeds: [embed]});
} 

if(!membro2) {
const embed2 = new MessageEmbed()
.setTitle(ss.titulo)
.setDescription(`${message.author} Você deve mencionar duas pessoas!`)
.setFooter({ text: ss.footer })
.setColor(ss.color)
return message.reply({ embeds: [embed2]});
} 
  
const amor = Math.floor(Math.random() * 100);
const loveIndex = Math.floor(amor / 10);
const loveLevel = "█".repeat(loveIndex) + ".".repeat(10 - loveIndex);
  
let emoticon;
if(amor > 60) {
emoticon = ("https://imgur.com/3GvF9wy.png"); //imagem de coração
} else if(amor >= 40) {
emoticon = ("https://imgur.com/rprkJYO.png"); //imagem de sei lá
} else {
emoticon = ("https://imgur.com/M6m003D.png"); //imagem chorando
}

let desc;
if(amor > 90) {
desc = (`:heart: Será que rola? \n\n Esse é o casal pefeito!!!`);
} else if(amor >= 70) {
desc = (`:heart: Será que rola? \n\n Esses aqui já estão se pegando a um tempo....`)
} else if(amor >= 45) {
desc = (`:heart: Será que rola? \n\n Talvez o(a) ${membro2} só falta querer...!`)
} else {
desc = (`:heart: Será que rola? \n\n Queria dizer que é possivel, mas... o(a) ${membro2} não quer`)
}
  
const canvas = Canvas.createCanvas(384, 128);
const ctx = canvas.getContext('2d');
    
const emote = await Canvas.loadImage(emoticon);
const foto1 = await Canvas.loadImage(membro1.user.displayAvatarURL({format: "png"}))
const foto2 = await  Canvas.loadImage(membro2.user.displayAvatarURL({format: "png"}))

ctx.drawImage(emote, 125, 0, 128, 128)
ctx.drawImage(foto1, -10, 0, 128, 128)
ctx.drawImage(foto2, 260, 0, 128, 128)

const amorat = new MessageAttachment(canvas.toBuffer(), 'chances-image.png')
      
  
let amorEmbed = new MessageEmbed()
.setColor(ss.color)
.setDescription(`**${amor}%** [${loveLevel}] \n\n **${desc}**`)
.setImage('attachment://chances-image.png')
message.reply({ embeds: [amorEmbed], files: [amorat]})

  
}
}