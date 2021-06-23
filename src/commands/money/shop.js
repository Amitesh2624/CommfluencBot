const { Client, Message, MessageEmbed } = require("discord.js");
const items = require('../../shopitems');
module.exports = {
  name: "shop",
  run: async (client, message, args) => {
    if(items.length === 0 ) return message.reply('there is no item for sale');
    const shopList = items.map((value, index) => {
        return `**${index+1})** ${value.item} -> ${value.price}coins!`;
      });
    message.channel.send(shopList);
  },
};
