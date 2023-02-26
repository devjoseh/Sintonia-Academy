const { MessageEmbed, Message } = require('discord.js')
const ss = require('../../configs/settings.json')

module.exports = {
name: "cantadas",
cooldown: 5000,

run: async (client, message, args) => {

const lennys = [
  'Você não é pescoço mais mexeu com a minha cabeça!',
  'Aposto um beijo que você me dá um fora.',
  'Me chama de previsão do tempo e diz que tá rolando um clima',
  'Gata, me chama de capeta e deixa te possuir',
  'Realize uma performance de feiticeiro e diga: “Asa de urubu, asa de galinha, se quiser ficar comigo, dê uma risadinha.',
  'Em cima da colina passa boi, passa boiada, só saio da sua frente quando for minha namorada',
  'Não sou traficante, mas eu quero a sua boca.',
  'Estou fazendo uma campanha de doação de órgãos! Não quer doar seu coração pra mim?',
  'Eu não sou a Casas Bahia, mas prometo dedicação total a você.',
  'Gata, que roupa feia, Tira isso agora!',
  'Se você fosse um sanduíche seu nome seria X-Princesa',
  'Você acredita em amor à primeira vista ou devo passar por aqui mais uma vez?',
  'Você gosta de achocolatado? Porque eu posso ser Toddynho seu.',
  'Gata, eu n sou sorvete mais estou derretidinho por voce',
  'Sabe qual a diferença de vc e o meu boné? O boné eu tiro da cabeça, e vc não',
  'Ei vc eh uma panela e eu a tampa, o meu mundo n faz sentindo sem vc!',
  'Bora brincar de policial e ladrao? vc e a policia e eu sou ladrao eu te roubo um beijo e vc me prende no seu coraçao',
  'Gata vc nao e o ovo do Ender Dragon e mesmo assim vc e a coisa mais rara que ja vi',
  'Usei shampoo anti-quedas, mas continuo caindo de amores por você',
  'Gata,seu pai n é o sol mas vc é uma estrela',
  'Você é uma fugueira e nunca vou te deixar apagar, de tanto pau que eu vou por',
  'Gata,seu pai é pirata? Pq vc é um tesouro bb',
  'Gata vc não é netherite mais gasto todo meu tempo para te conquistar',
  'Gata é impressionante como as pessoas abreviam as coisas, Instagram: Insta, Facebook: Face, Amor da sua vida: Eu',
  'gata me chama de elytra que em dois segundos te levo pro céu',
  'gata me chama de água que eu te chamo de lava e vamos criar nossa obsidian',
  'Eu não preciso ser Cientista pra saber que você é igual Oxigênio, Não dá pra viver sem você',
  'Mina voce nao é diamante,mas eu passaria horas minerando para te encontrar',
  'A noite è muito escura , o dia è muito claro, eu so me sinto seguro ficando no seu lado',
  'Gata eu até mandaria uma cantada pra vc mas eu não falo a língua dos anjos',
  'Gata vc é mecânica pq acabou de acelerar meu coração <3',
  'Gata vc é q nem uma lamborghini é linda dahora e vale mais de 1 milhao',
  'Você acredita em amor à primeira vista ou devo passar por aqui mais uma vez?',
  'Nossa, estou sentindo uma dor no peito! Espero que seja amor, porque se for infarto, eu nunca mais te verei!',
  'Queria desejar "noite", porque para ser boa teríamos que estar juntos.',
  'Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui.',
  'Se nada dura para sempre, quer ser o meu nada?',
  'Você foi feita(o) com velas, mel, fitinhas vermelhas e rosas? Porque te achei uma simpatia.',
  'Um mês atrás eu era apaixonado(a) por você. E parece que estamos no mês passado ainda.',
  'Usa aquele shampoo para esquecer o(a) ex, o Euserve.',
  'Meus amigos apostaram comigo que eu não conseguiria iniciar uma conversa com a pessoa mais bonita daqui. Como devemos gastar o dinheiro deles?',
  'Pesquisas apontam que agente junto é erro de gramática, mas a gente separado é erro do destino.',
  'O que eu sinto por você só pode ser motorista, porque passageiro(a) não é.',
  'Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração.'

  ]
  

    var rand_num = Math.floor(Math.random() * lennys.length);
    var rand_val = lennys[rand_num];

    const embed = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})
    .setDescription(`Aqui está sua cantada, use com sabedoria! \n\n***${rand_val}***`)
    return message.reply({ embeds: [embed]})

}
}
