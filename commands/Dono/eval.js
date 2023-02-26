const { MessageEmbed } = require('discord.js');
const ss = require('../../configs/settings.json');

module.exports = {
  name: "eval",
  run: async (client, message, args) => {
    // Valida se o autor da mensagem tem permissão para executar o comando
    const usersId = ['434791887241740288', '852657010273288193'];

    if(!usersId.includes(message.author.id)) return

    let code = args.join(' ');

    if (!code) {
      return message.reply("Insira um código para ser executado.");
    }

    // Executa o código e exibe o resultado em um embed
    await message.reply('Executando código...').then(async m => {
      try {
        let antes = Date.now();
        let resultado = eval(code);

        if (resultado instanceof Promise) {
          m.edit('Uma promise encontrada, estou esperando ela ser resolvida!');
          await resultado;
        }

        // Transforma a saída em uma string legível
        let opcoes = { depth: 0 };
        if (typeof resultado !== 'string') {
          resultado = require('util').inspect(resultado, opcoes);
        }

        let fim = (Date.now() - antes);

        // Exibe o resultado em um embed
        const embed = new MessageEmbed()
          .setTitle('Código Correto')
          .setTimestamp()
          .setDescription(`\`\`\`${resultado.slice(0, 2000)}\`\`\``)
          .setColor(ss.color);
        m.edit({ embeds: [embed] });
      } catch (error) {
        // Exibe o erro em um embed
        const embed2 = new MessageEmbed()
          .setTitle('Código Errado')
          .setTimestamp()
          .setDescription(`\`\`\`${error.stack.slice(0, 2000)}\`\`\``)
          .setColor(ss.color);
        m.edit({ embeds: [embed2] });
      }
    });
  }
}