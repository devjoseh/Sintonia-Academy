const {MessageEmbed, MessageButton, MessageActionRow, Message} = require('discord.js')
const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')

client.on('messageCreate', async message => {
    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command == 'mensagens') {
        if(![config.owner_id].includes(message.author.id)) return
        message.delete()

        const embed = new MessageEmbed()
        .setTitle(ss.titulo)
        .setDescription(`Clique no botão que você deseja enviar a mensagem. \n\n**Os botões com <:JL_aprovado:944573271104442458> indicam que todas as mensagens daquele canal serão deletada. \n\nOs botões com <:JL_negado:944573271121223683> indicam que as mensagens daquele canal não serão deletadas**`)
        .setColor(ss.color)
        .setFooter({ text: ss.footer})

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Regras')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('regras'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Formulario')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('formulario'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Booster')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('booster'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Requisitos')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('requisitos'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Forma Pagamento')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('pagamento'),
        )
        const row2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Report Bug')
            .setEmoji('<:JL_negado:944573271121223683>')
            .setCustomId('reportbugs'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Denuncias')
            .setEmoji('<:JL_negado:944573271121223683>')
            .setCustomId('denuncias'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Contra Denuncias')
            .setEmoji('<:JL_negado:944573271121223683>')
            .setCustomId('contra_denuncias'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Informações')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('informacoes'),
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Comandos Staff')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('comandos_staff'),
        )

        message.channel.send({ embeds: [embed], components: [row, row2], fetchReply: false})
    }
})

client.on('interactionCreate', async (button) => {
    let canal_regras = client.channels.cache.get('1025530496668676177')
    let canal_formulario = client.channels.cache.get('1025531934656430131')
    let canalerro = client.channels.cache.get('1025743422176366612')
    let canal_booster = client.channels.cache.get('1028732963384463451')
    let canal_pagamento = client.channels.cache.get('1028731944416051382')
    let canal_bugs = client.channels.cache.get('1028733130728816661')
    let canal_denuncias = client.channels.cache.get('1028748471580233818')
    let canal_contra_denuncias = client.channels.cache.get('1028748510973153410')
    let canal_informacoes = client.channels.cache.get('1025538167673209023')
    let canal_comandos_staff = client.channels.cache.get('1074846360735580280')
    const member = button.member

    const regras1 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setDescription(`<:Warning:993916072413638796> Este canal foi criado para que todos tenham o devido conhecimento sobre as regras do servidor. Tais regras foram sendo criadas e ajustadas ao longo de nossa existência tendo, como principais colaboradores, nossos usuários, seja por sugestões ou por práticas inconvenientes e abusivas dentro do servidor ou in-game. <:Warning:993916072413638796>\n\n**<:message:993917209351049236> O descumprimento de qualquer regra listada neste canal resultará em punição. É seu dever como jogador ter o conhecimento sobre todas as regras listadas abaixo. <:message:993917209351049236>**`)
    .setColor(ss.color)
    .setFooter({ text: ss.footer, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})

    const regras2 = new MessageEmbed()

    .setDescription(`Em conformidade com a [Lei 9.459, de 13 de maio de 1997](https://legislacao.presidencia.gov.br/atos/?tipo=LEI&numero=9459&ano=1997&ato=ea9c3ZU90MJpWTeb1), proibimos qualquer prática, indução ou incitação a discriminação ou preconteito de raça, cor, etinia, religião, procedência nacional ou apologia às práticas nazistas nas dependências de nosso servidor. É fundamental entender que tais atitudes vão além do servidor e você pode ser responsabilizado judicialmente pela prática de tais atos. Somos total e completamente intolerantes a qualquer crime que venha ser praticado dentro de nossas dependências. Caso você seja flagrado e/ou denunciado neste tipo de crime, será banido permanente, sem possibilidade de retorno.`)
    .setColor(ss.color)

    const regras3 = new MessageEmbed()
    .setDescription(`Proibido Divulgar/compartilhar conteúdos NSFW (cenas de estupro, ou que faça apologia a essa prática, repassar foto ou vídeo íntimo contendo cenas de sexo, nudez, pornografia, racista, homofóbica, xenofóbica e outros tipos de preconceito), conteúdo abusivo, calunioso ou protegido por direitos autorais.\n\nProibido Qualquer tipo de agressão verbal como ameaças, divulgação de dados pessoais, incentivo ao suicídio, qualquer tipo de preconceito, brigas tanto via mensagens e perfis do Discord irão causar remoção sem aviso prévio do nosso servidor. Também não serão tolerados qualquer tipo de exposição pública ou tentativas de difamar membros da equipe de moderação e membros comuns. \n\nProibido Qualquer tipo de provocação como modificadores de voz, se passar por outras pessoas, burlar o sistema de censura do BOT, mencionar membros da equipe sem motivo e outra atitudes indesejadas poderão causar punição. Também não serão tolerados qualquer tipo de spoilers de filmes ou jogos recentes sem a marcação de spoiler proporcionada pelo próprio Discord. \n\nCaso dê um booster no servidor do discord e após receber os benefícios in-game retire o booster, terá todos os benefícios removidos e será banido por 7 Dias in-game \n\n<:jornal:833372646111969281> **REGRAS DO DISCORD E INGAME** \n\n**MUTES** \n\n<a:seta56:833372754505629758> Linguagem Inadequada [3 Horas] \n<a:seta56:833372754505629758> Desordem no Bate Papo [8 Horas] \n<a:seta56:833372754505629758> Desinformação [4 Horas] \n<a:seta56:833372754505629758> Mencionar outros servidores [24 Horas] \n<a:seta56:833372754505629758> Ofensa a outros jogadores [6 Horas] \n<a:seta56:833372754505629758> Divulgação Simples [4 Horas] \n\n**BANIMENTOS** \n\n<a:seta56:833372754505629758> Mau uso de comandos [4 Horas] \n<a:seta56:833372754505629758> Aliança em eventos [12 Horas] \n<a:seta56:833372754505629758> Ofensa ou Desrespeito à Staff ou o Servidor [4 Dias] \n<a:seta56:833372754505629758> Se passar por staff [1 a 7 Dias (Depende da situação)] \n<a:seta56:833372754505629758> Anti-Jogo [3 Dias] \n<a:seta56:833372754505629758> Comércio Externo [7 Dias] \n<a:seta56:833372754505629758> Abuso de Bugs [Permanente \n<a:seta56:833372754505629758> Divulgação Grave [Permanente] \n<a:seta56:833372754505629758> Falsificação de Provas [Permanente]`)
    .setColor(ss.color)
    
    const formulario = new MessageEmbed()
    .setTitle('Formulário ' + ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})
    .setDescription(`Olá jogadores! <:fofaain:838906599451787275> \n\nEstamos disponibilizando o nosso formulário para ingressar em nossa Equipe. Leia com atenção e tente ser o mais específico possível em suas respostas, isso nos ajuda a verificar suas respostas com mais velocidade e você terá mais chances de conseguir passar <a:fofanenezinha:838906706934628362> \n\nSeja sincero em suas respostas. <:w_fofabrava:838907077815566416> \n\n**Formulário: __Fechado__** `)

    const row_form = new MessageActionRow()
    .addComponents(
    new MessageButton()
    .setStyle('LINK') 
    .setLabel('Formulário') 
    .setEmoji('<:ItemPlan:833377653691645982>')
    .setURL(`https://forms.gle/hBxNKKWLruHAXfuB6`)
    );

    const booster = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})
    .setDescription(`**╭─────  ✦ Benefícios**\n\n☄️  **»** Abaixo estão listados todos os benefícios/vantagens que você recebe após impulsionar o servidor. <a:NitroBoost:833097388482494536>\n            ╰ Abra um ticket para recebê-los! \n\n <:IconServerBoostLVL2:852010610304614410> **Benefícios 1 Boost** \n\n▫️ Cargo especial no discord \n▫️ $350.000 In-Game \n▫️ Tag exclusiva no chat in-game \n▫️ Vip <@&1025539936738365471> \n\n<:IconServerBoostLVL3:852010627722510366> **Benefícios 2 Boosts** \n\n▫️ Benefícios Anteriores \n▫️ Permissão de criar 1 Cargo no servidor do discord`)

    const reqs_miniyt = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})
    .setDescription(`**<@&1025539928156807328>** \n\nSegue abaixo os requisitos para ter acesso a tag ***MINI-YT:***\n\n• 300 Inscritos \n• IP na descrição de todos os vídeos \n• Vídeo de no mínimo 5 Minutos \n• 100 Visualizações no vídeo \n• 2 Vídeos semanais \n\nRecompensas por ser MIN-YT: \n\n• Acesso ao /divulgar \n• Acesso ao VIP Anapneo \n• Bônus de 10% nas minas \n• Bônus de 10% em drops \n• 15K De cash a cada vídeo`)

    const reqs_yt = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription(`**<@&1025539924751044728>** \n\nSegue abaixo os requisitos para ter acesso a tag ***YouTuber***\n\n• 750 Inscritos \n• Ip nas descrição de todos os vídeos \n• Vídeo de no mínimo 5 Minutos \n• 250 Visualizações no vídeo \n• 2 Vídeos semanais \n\nRecompensas por ser YouTuber: \n\n• Acesso ao /divulgar \n• Acesso ao VIP Brachiabindo \n• Bônus de 20% nas minas \n• Bônus de 20% em drops \n• 25K De cash a cada vídeo`)

    const reqs_streamer = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription(`**<@&1025539931268972576>** \n\nSegue abaixo os requisitos para ter acesso a tag ***Streamer*** \n\n• 50 Seguidores \n• comando !ip na live \n• Lives de no mínimo 1 Hora no servidor \n• 2 Lives semanais \n\nRecompensas por ser Streamer: \n\n• Acesso ao /divulgar \n• Acesso ao VIP Brachiabindo \n• Bônus de 20% nas minas \n• Bônus de 20% em drops \n• 20K De cash por live`)

    const pagamento = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription(`Formas de Pagamento :credit_card: \n\n<:mercadopago:993578263429517472> ━ **Mercado Pago** \n<:pix:993578411782045726> ━ **Pix** \n<:boleto:993578315111727174> ━ **Boleto Bancário** \n<:picpay:993578242458001491> ━ **PicPay** \n\nCaso você tenha qualquer dúvida sobre as formas de pagamento abra um ticket!`)

    const bugs = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription(`Para enviar uma denúncia sobre um bug do servidor, siga o formato abaixo: \n\n**Bug:** \n**Provas: (Print/Vídeo)**\n\nCaso o formato não seja seguido sua mensagem será apagada. Se a denuncia for verídica, iremos lhe recompensar caso o bug for resolvido.`)

    const denuncias = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription('Deseja realizar uma denúncia sobre algum player quebrando as regras? Então siga o formato de denuncia abaixo: \n\n**Meu ID:**\n**ID Do Denunciado:**\n**Motivo:**\n**Provas: (print/video)**\n\nSiga o formato da forma correta! Mensagens paralelas serão apagadas e podem gerar punições!')

    const contra_denuncias = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription('Foi denunciado e deseja contestar a denuncia? é bem simples fazer isso! Siga o formato abaixo: \n\n**Meu ID:**\n**ID Do Denunciante:**\n**Motivo da Denúncia:**\n**Contestação:**\n\nSiga o formato da forma correta! Mensagens paralelas serão apagadas e podem gerar punições!')

    const informacoes_1 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription(`**Padrão:** \n<a:seta56:833372754505629758> F1 - Painel Geral\n<a:seta56:833372754505629758> F2 - Painel VIP\n<a:seta56:833372754505629758> F3 - Painel de Animações\n<a:seta56:833372754505629758> F4 - Painel AntiLag\n<a:seta56:833372754505629758> F5 - Painel de Veículos\n<a:seta56:833372754505629758> F6 - Painel de Músicas\n<a:seta56:833372754505629758> F7 - Painel para Mudar a Mira\n<a:seta56:833372754505629758> F10 - Desativar HUD\n<a:seta56:833372754505629758> F11 - Abre o Mapa\n<a:seta56:833372754505629758> F12 - Tira Print \n\n**Chat:** \n<a:seta56:833372754505629758> T - Chat Local\n<a:seta56:833372754505629758> Y - Messenger \n\n**Essenciais:** \n<a:seta56:833372754505629758> /mods - Abre o Painel de Mods\n<a:seta56:833372754505629758> /staff - Faz um chamado a staff \n\n**Outros:** \n<a:seta56:833372754505629758> /discord - Copia o link do discord\n<a:seta56:833372754505629758> /pay - Envia dinheiro para algum player \n<a:seta56:833372754505629758>J - Animações favoritas \n\n**Teleportes:** \n<a:seta56:833372754505629758> Prefeitura - /prefeitura\n<a:seta56:833372754505629758> Ponte - /ponte\n<a:seta56:833372754505629758> Mansao - /mansao\n<a:seta56:833372754505629758> Lobby - /lobby /hp /spawn\n<a:seta56:833372754505629758> Lojas - /loja1 /loja2 /loja3 /loja4 /loja5 \n<a:seta56:833372754505629758> Banco - /banco\n<a:seta56:833372754505629758> Cracolandia - /cracolandia\n<a:seta56:833372754505629758> Prédio - /predio\n<a:seta56:833372754505629758> Fabrica - /fabrica\n<a:seta56:833372754505629758> Favela - /favela \n\n**Vips:** \n<a:seta56:833372754505629758> /salario - Pega uma quantia de dinheiro a cada 24 Horas\n<a:seta56:833372754505629758> /colete - Pega colete`)
    
    const informacoes_2 = new MessageEmbed()
    .setTitle('Dicas in-game ' + ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})
    .setDescription(`**Como fabricar armas:** \n<a:seta56:833372754505629758> No seu mapa, no canto inferior direito, há dois ícones nas docas, uma arma e um blip de dinheiro. Você pode ir lá de duas formas, pegar um veículo e ir até lá ou digitar /fabrica e você será teleportado automaticamente. Para fabricar uma arma basta ficar em cima do blip que deseja e digitar /fabricar \n\n**Resolver FPS Baixo:** \n<a:seta56:833372754505629758> Pressione ESC > Opções > Vídeo > Resolução > 800x600x32 ou 1024x768x30 \nEssas resoluções irão deixar seu gta mais leve. Você pode utilizar também, o F4 \n\n**Como ganhar dinheiro:** \n<a:seta56:833372754505629758> Pressionando F11 e descendo o mapa, você irá ver uma caveira Indo nela você encontratá um blip e ele te levará em uma agencia de emprego após pegar o emprego basta ir na localização marcada no mapa. Também é possivel ganhar dinheiro matando outros players`)

    const comandos_staff = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer })
    .setDescription(`**Importante informar: Todos os comandos possuem LOGS tanto nesse discord quanto num servidor de backup** \n\nSetar Vida = /setvida, /setarvida, /vida \n/setarvida [id] [valor] \n/setarvida 1 100 \n\nSetar Colete = /setarcolete, /setcolete \n/setcolete [id] [valor] \n/setarcolete 1 100 \n\nCriar Veiculo = /car /cv /criarveiculo \n/car [id] [id do veículo] \n /car 1 428 \n\nSetar Skin = /ss /skin /setarskin \n/ss [id] [id da skin] \n/ss 1 17 \n\nSetar arma = /arma /weapon /gun \n/arma [id] [id da arma] [quantia de munição] \n /arma 1 31 500 \n\nFixar = /fix /fixar /reparar \n/fix [id] \n/fix 1 \n\nDv = /dv /destruir \n/dv [id] \n/dv 1 \n\nTeleportar = /tp /teleport /teleportar \n/tp [id] \n/tp 2 \n\nPuxar = /puxar /bring \n/puxar [id] \n/puxar 2 \n\nAnunciar = /anunciar \n/anunciar [msg] \n/anunciar Salvekkkkk \n\nBlindar veiculo = /blindar \n\nGodMode = /god /godmode \n\nFicar Invisivel = /disappear /v /invisivel \n\nMoney all = /givemoney /dardinheiro /money /moneyall \n\nAtivar Vip = /ativarvip \n\nEntrar em atendimento = /atendimento`)
    
    if (!button.isButton()) return;

    if(button.customId === 'regras') {
        canal_regras.messages.fetch({ limit: 100}).then(mensagens => {
            canal_regras.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de regras. \n\n\`\`\`${error}\`\`\``)
            })
        })
        setTimeout(() => {
            canal_regras.send({ embeds: [regras1, regras2, regras3]})
        }, 1000);
    }

    if(button.customId === 'formulario') {
        canal_formulario.messages.fetch({ limit: 100}).then(mensagens => {
            canal_formulario.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de formularios. \n\n\`\`\`${error}\`\`\``)
            })
        })
        setTimeout(() => {
            canal_formulario.send({ embeds: [formulario], components: [row_form]})
        }, 1000);
    }

    if(button.customId === 'formulario') {
        canal_formulario.messages.fetch({ limit: 100}).then(mensagens => {
            canal_formulario.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de formularios. \n\n\`\`\`${error}\`\`\``)
            })
        })
        setTimeout(() => {
            canal_formulario.send({ embeds: [formulario], components: [row_form]})
        }, 1000);
    }

    if(button.customId === 'booster') {
        canal_booster.messages.fetch({ limit: 100}).then(mensagens => {
            canal_booster.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de booster. \n\n\`\`\`${error}\`\`\``)
            })
        })
        setTimeout(() => {
            canal_booster.send({ embeds: [booster]})
        }, 1000);
    } 

    if(button.customId === 'requisitos') {
    member.send('A função requisitos foi desativada')
    } 

    if(button.customId === 'pagamento') {

        canal_pagamento.messages.fetch({ limit: 100}).then(mensagens => {
            canal_pagamento.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de pagamentos. \n\n\`\`\`${error}\`\`\``)
            })
        })

        setTimeout(() => {
            canal_pagamento.send({ embeds: [pagamento]})
        }, 1000);             
    } 

    if(button.customId === 'reportbugs') {
        setTimeout(() => {
            canal_bugs.send({ embeds: [bugs]})
        }, 1000);
    } 

    if(button.customId === 'denuncias') {
        setTimeout(() => {
            canal_denuncias.send({ embeds: [denuncias]})
        }, 1000);
    } 

    if(button.customId === 'contra_denuncias') {
        setTimeout(() => {
            canal_contra_denuncias.send({ embeds: [contra_denuncias]})
        }, 1000);
    }

    if(button.customId === 'informacoes') {

        canal_informacoes.messages.fetch({ limit: 100}).then(mensagens => {
            canal_informacoes.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de informacoes. \n\n\`\`\`${error}\`\`\``)
            })

            setTimeout(() => {
                canal_informacoes.send({ embeds: [informacoes_1, informacoes_2]})
            }, 1000);
        })
    }

    if(button.customId === 'comandos_staff') {

        canal_comandos_staff.messages.fetch({ limit: 100}).then(mensagens => {
            canal_comandos_staff.bulkDelete(50, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de comandos staff. \n\n\`\`\`${error}\`\`\``)
            })

            setTimeout(() => {
                canal_comandos_staff.send({ embeds: [comandos_staff]})
            }, 1000);
        })
    }


})