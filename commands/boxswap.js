/**
 * The command schemas:
 *
 * name: name of the command. (required)
 * execute: how the command be executed with the given parameters ...args. (required)
 * cooldown: time cooldown between each use (seconds). (required)
 * aliases: an alternate name of the command.
 * **/

const get = {
  name: 'boxswap',
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
      await message.channel.sendSlash(process.env.MYUU_ID, 'box swap', '1', undefined, ...args);
    } catch (error) {
      console.error(`Error [boxswap]: ${error}`);
    }
  },
  aliases: 'boxswap',
  cooldown: 10,
};

module.exports = get;
