const client = require('../..')
const ss = require('../../configs/settings.json')
const { MessageEmbed } = require('discord.js')
const filtro = require('../client/filter.json')

const removerAcento = (palavra) => {
  const caracterComAcento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
  const caracterSemAcento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
  let palavraSemAcento = "";

  for (let i = 0; i < palavra.length; i++) {
    const char = palavra[i];
    const indexAcento = caracterComAcento.indexOf(char);
    if (indexAcento !== -1) {
      palavraSemAcento += caracterSemAcento[indexAcento];
    } else {
      palavraSemAcento += char;
    }
  }

  return palavraSemAcento;
}

client.on('messageCreate', (message) => {
  const text = removerAcento(message.content.toLowerCase());
  const palavraEncontrada = Object.values(filtro.palavras).some(palavra => text.includes(palavra));

  if (palavraEncontrada) {
    const embed = new MessageEmbed()
      .setTitle(ss.titulo)
      .setDescription(`**IP de conexão:** \`${ss.ip}\`\n\nFavorite o servidor para ter ele sempre salvo!`)
      .setTimestamp()
      .setColor(ss.color)
      .setFooter({ text: ss.footer});

    message.reply({ embeds: [embed] });
  }
});