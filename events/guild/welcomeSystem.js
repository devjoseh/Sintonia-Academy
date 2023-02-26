const client = require('../..')
const config = require('../../configs/config.json')

client.on('guildMemberAdd', async member => {
    let server = client.guilds.cache.get(config.guild_id)
    let membro_cargo = server.roles.cache.get('1025539948876668928') 

    if(server != member.guild) {
        return;
    } else {
        member.roles.add(membro_cargo)
    }
})