const direct = {
  name: 'messageCreate',
  once: false,
  execute: async message => {
    /**
     * 1. Check if the in-comming message is from Myuu Bot. If not, return.
     * 2. Check if the message has embed elements init. IF not, return.
     * **/
    if (message.guildId !== null) return;
    if (message.author.id !== process.env.MYUU_ID) return;
    if (!message.embeds) return;
    try {
      const channel = await message.client.channels.fetch(process.env.CHANNEL_ID);
      if (!channel || channel.type !== 'GUILD_TEXT')
        return console.error('Error [direct-fetch]: Channel cannot be fetched.');
      const randomNumber = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
      await sleep(randomNumber);
      message.embeds.map(async i => {
        if (i.description.includes('hatched from the Egg!')) {
          await message.channel.sendSlash(process.env.MYUU_ID, 'box swap', '1', undefined, process.env.POKEMON);
        } else if (i.description.includes('A new Egg is ready in the Daycare!')) {
          await channel.sendSlash(process.env.MYUU_ID, 'get', 'egg', 'Take');
        }
      });
    } catch (error) {
      console.error(`Error [direct]: ${error}`);
    }
  },
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = direct;
