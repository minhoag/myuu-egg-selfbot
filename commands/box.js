/**
 * The command schemas:
 *
 * name: name of the command. (required)
 * execute: how the command be executed with the given parameters ...args. (required)
 * cooldown: time cooldown between each use (seconds). (required)
 * aliases: an alternate name of the command.
 * **/

const box = {
  name: 'box',
  execute: async (message, args) => {
    /**
     * message.channel.sendSlash(name, ...args)
     * -> Takes 2 required parameter: the main commands and the arguments.
     * -> Each command choices are seperated with commas.
     * **/
    let box_number = 1;
    if (args[1]) box_number = args[1];
    try {
      await message.channel.sendSlash(process.env.MYUU_ID, 'box view', box_number);
    } catch (error) {
      console.error(`Error [box]: ${error}`);
    }
  },
  aliases: 'box',
  cooldown: 10,
};

module.exports = box;
