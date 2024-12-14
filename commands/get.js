/**
 * The command schemas:
 *
 * name: name of the command. (required)
 * execute: how the command be executed with the given parameters ...args. (required)
 * cooldown: time cooldown between each use (seconds). (required)
 * aliases: an alternate name of the command.
 * **/

const get = {
  name: 'get',
  execute: async (message, args) => {
    /**
     * message.channel.sendSlash(name, ...args)
     * -> Takes 2 required parameter: the main commands and the arguments.
     * -> Each command choices are seperated with commas.
     * **/
    if (args.length < 1) {
      console.error('Error [get-arg]: This command require arguments.');
    }
    try {
      if (args.includes('egg')) {
        await message.channel.sendSlash(process.env.MYUU_ID, 'get', 'egg', 'Take');
      } else if (args.includes('pokemon')) {
        const arg = args.filter(i => i.name === 'pokemon');
        await message.channel.sendSlash(process.env.MYUU_ID, 'get', 'pokemon', arg.join(','));
      } else {
        console.error(`Error [get-id]: ${process.env.MYUU_ID} not found`);
      }
    } catch (error) {
      console.error(`Error [get]: ${error}`);
    }
  },
  aliases: 'get',
  cooldown: 10,
};

module.exports = get;
