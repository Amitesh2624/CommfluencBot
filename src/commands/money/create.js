const {Client, Message, MessageEmbed } = require('discord.js');
module.exports = {
  name: 'create',
  run: async(client, message, args) => {
    channel = client.channels.cache.get('852135830406823936');
    channel.send('Car Created; Base Price: $2000');
  }
}
