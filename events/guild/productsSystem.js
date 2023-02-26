const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
const client = require('../..')
const config = require('../../configs/config.json')
const ss = require('../../configs/settings.json')

client.on('messageCreate', async message => {
    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command == 'produtos') {
        if(![config.owner_id].includes(message.author.id)) return
        message.delete()

        const embed = new MessageEmbed()

        .setColor(ss.color)

        .setDescription(`Clique no botão para enviar as mensagens de produtos`)

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Enviar')
            .setEmoji('<:JL_aprovado:944573271104442458>')
            .setCustomId('enviar'),
        )

        message.channel.send({ embeds: [embed], components: [row], fetchReply: false})
    }
})

client.on('interactionCreate', async (button) => {
    let canal = client.channels.cache.get('1028732002075156480')
    let canalerro = client.channels.cache.get('1025743422176366612')
    const member = button.member

    const vip1 = new MessageEmbed()
    .setTitle(ss.titulo)
    .setColor(ss.color)
    .setFooter({ text: ss.footer})
    .setDescription(`**Vip Bronze - 30 Dias - R$15,00** \n\nAo se tornar __VIP Bronze__ em nosso servidor, você terá acesso a muitas vantagens e um painel de acesso exclusivo.\n\n🚗 **Veículos:**\n▫️ Dodge Charger - Exclusivo \n\n🙍‍♂️ **Skins:** \n▫️ 1 Skin Masculina \n\n💵 **Dinheiro** \n▫️ Acesso ao /salário \n▫️ 500.000$ Na Ativação \n\n🎈 **Diversos:** \n▫️ Setar 100% De Vida \n▫️ Setar 25% de Colete \n▫️ Tag Exclusiva no Discord \n▫️ Tag Exclusiva no chat in-game \n▫️ Slot garantido no servidor \n▫️ Acesso ao grudar com N \n\n🔫 **Pack de Armas 1:** \n▫️ Soco Inglês \n▫️ Deagle \n▫️ Tec-9 \n▫️ M4 \n▫️ Munições: 150 \n\n**Para adquirir este VIP Basta abrir um ticket que iremos lhe auxiliar!**`)

    const vip2 = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`**Vip Platina - 30 Dias - R$20,00** \n\nAo se tornar __VIP Platina__ em nosso servidor, você terá acesso a muitas vantagens e um painel de acesso exclusivo.\n\n🚗 **Veículos:**\n▫️ Porsche GTS - Exclusivo \n▫️ Bugatti - Exclusivo \n\n🙍‍♂️ **Skins:** \n▫️ 2 Skins Masculina \n\n💵 **Dinheiro** \n▫️ Acesso ao /salário \n▫️ 1.500.000$ Na Ativação \n\n🎈 **Diversos:** \n▫️ Setar 100% De Vida \n▫️ Setar 50% de Colete \n▫️ Tag Exclusiva no Discord \n▫️ Tag Exclusiva no chat in-game \n▫️ Slot garantido no servidor \n▫️ Acesso ao grudar com N \n\n🔫 **Pack de Armas 1:** \n▫️ Soco Inglês \n▫️ Deagle \n▫️ Tec-9 \n▫️ Combat Shotgun \n▫️ AK-47 \n▫️ Munições: 300 \n\n**Para adquirir este VIP Basta abrir um ticket que iremos lhe auxiliar!**`)

    const vip3 = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`**Vip Diamante - 30 Dias - R$25,00** \n\nAo se tornar __VIP Diamante__ em nosso servidor, você terá acesso a muitas vantagens e um painel de acesso exclusivo.\n\n🚗 **Veículos:**\n▫️ Koenigsegg - Exclusivo \n▫️ S15 - Exclusivo \n\n🙍‍♂️ **Skins:** \n▫️ 2 Skins Masculina \n\n💵 **Dinheiro** \n▫️ Acesso ao /salário \n▫️ 2.500.000$ Na Ativação \n\n🎈 **Diversos:** \n▫️ Setar 100% De Vida \n▫️ Setar 75% de Colete \n▫️ Carro Colorido \n▫️ Farol Colorido \n▫️ Tag Exclusiva no Discord \n▫️ Tag Exclusiva no chat in-game \n▫️ Slot garantido no servidor \n▫️ Acesso ao grudar com N \n\n🔫 **Pack de Armas 1:** \n▫️ Soco Inglês \n▫️ Deagle \n▫️ Tec-9 \n▫️ Combat Shotgun \n▫️ AK-47 \n▫️ Munições: 500 \n\n🔫 **Pack de Armas 2:** \n▫️ Deagle \n▫️ M4 \n▫️ MP5 \n▫️ Combat Shotgun \n▫️ Rifle \n▫️ Munições: 500 \n\n**Para adquirir este VIP Basta abrir um ticket que iremos lhe auxiliar!**`)

    const vip4 = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`**Vip Rubi - 30 Dias - R$30,00** \n\nAo se tornar __VIP Rubi__ em nosso servidor, você terá acesso a muitas vantagens e um painel de acesso exclusivo.\n\n🚗 **Veículos:**\n▫️ McLaren P1 - Exclusivo \n▫️ BMW M5 - Exclusivo \n\n🙍‍♂️ **Skins:** \n▫️ 3 Skins Masculina \n\n💵 **Dinheiro** \n▫️ Acesso ao /salário \n▫️ 3.500.000$ Na Ativação \n\n🎈 **Diversos:** \n▫️ Setar 100% De Vida \n▫️ Setar 100% de Colete \n▫️ Carro Colorido \n▫️ Farol Colorido \n▫️ Blindar Veiculo \n▫️ Tag Exclusiva no Discord \n▫️ Tag Exclusiva no chat in-game \n▫️ Slot garantido no servidor \n▫️ Acesso ao grudar com N \n\n🔫 **Pack de Armas 1:** \n▫️ Katana \n▫️ Deagle \n▫️ Tec-9 \n▫️ Combat Shotgun \n▫️ AK-47 \n▫️ Munições: 800 \n\n🔫 **Pack de Armas 2:** \n▫️ Katana \n▫️ Deagle \n▫️ Combat Shotgun \n▫️ MP5 \n▫️ M4 \n▫️ Rifle \n▫️ Munições: 800 \n\n**Para adquirir este VIP Basta abrir um ticket que iremos lhe auxiliar!**`)

    const skin = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`**Skin Exclusiva - 30 Dias - R$15,00** \n\nAo Adquirir este produto, você poderá setar em você ou em seus amigos as skins que você adquiriu!\n\n▫️ 2 Skins \n▫️ Máximo 10Mb's \n▫️ Alteração: \`5,00R$\``)

    const veiculo = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`**Veiculo Exclusivo - 30 Dias - R$15,00** \n\nAo Adquirir este produto, você terá acesso a criar o veiculo comprado em qualquer lugar a qualquer momento\n\n▫️ 1 Veículo \n▫️ Máximo 10Mb's \n▫️ Alteração: \`5,00R$\``)

    const faccao = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`**Facção - 30 Dias - R$25,00** \n\nAo adquirir uma __Facção__ Você terá direito a vários beneficios.\n\n🚗 **Veículos:**\n▫️ 1 Veículo - Máximo 10Mb's\n\n🙍‍♂️ **Skins:** \n▫️ 2 Skins - Máximo 10Mb's \n\n🏗 **Outros** \n▫️ Uma favela \n▫️ Tag Exclusiva no Discord \n▫️ Tag exclusiva no chat in-game \n▫️ 1 Rádio Exclusiva\n\n🛒 **Adicionais** \n▫️ 1 Veiculo - R$5,00 \n▫️ 1 Skin - 5,00R$`)

    const corporacao = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`**Corporação - 30 Dias - R$25,00** \n\nAo adquirir uma __Corporação__ Você terá direito a vários beneficios.\n\n🚗 **Veículos:**\n▫️ 1 Veículo - Máximo 10Mb's\n\n🙍‍♂️ **Skins:** \n▫️ 2 Skins - Máximo 10Mb's \n\n🏗 **Outros** \n▫️ Uma base \n▫️ Tag Exclusiva no Discord \n▫️ Tag exclusiva no chat in-game \n▫️ 1 Rádio Exclusiva\n\n🛒 **Adicionais** \n▫️ 1 Helicóptero - R$7,50 \n▫️ 1 Veiculo - R$5,00 \n▫️ 1 Skin - 5,00R$`)

    const informacoes = new MessageEmbed()
    .setColor(ss.color)
    .setDescription(`🛒 **Para adquirir qualquer produto abra um <#1025534051345518662>** \n\n⛔ **Não é possivel adquirir uma facção e corporação para uma mesma conta**`)

    if (!button.isButton()) return;

    if(button.customId === 'enviar') {

        canal.messages.fetch({ limit: 100}).then(mensagens => {
            canal.bulkDelete(99, true).catch(error => {
                return canalerro.send(`Não foi possivel apagar as mensagens do canal de regras. \n\n\`\`\`${error}\`\`\``)
            })
        })

        setTimeout(() => { 
            canal.send({ embeds: [vip1, vip2, vip3, vip4, skin, veiculo, faccao, corporacao, informacoes]})
        }, 1000);

    } else {
        return
    }
})