const { MessageEmbed } = require('discord.js')
const ss = require('../../configs/settings.json')
const config = require('../../configs/config.json')

module.exports = {
name: "teste",

run: async (client, message, args) => {

    let member = message.guild.members.cache.get(message.author.id)
    let hasRole = member.roles.cache.some(role => role.name === '⚠️・Updates')
    let server = client.guilds.cache.get(config.guild_id) 
    let update = server.roles.cache.get("1025546008958087238")

    if(!hasRole) {
        console.log('Não tem o cargo')
        member.roles.add(update)
    } else {
        if(hasRole) {
            member.roles.remove(update)
            console.log('Tem o cargo')
        } else {

            return console.log('Não consegui identificar')
        }
    }
}
}