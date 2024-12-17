/**
 * The command schemas:
 *
 * name: name of the command. (required)
 * execute: how the command be executed with the given parameters ...args. (required)
 * cooldown: time cooldown between each use (seconds). (required)
 * aliases: an alternate name of the command.
 * **/

const team = {
  name: 'team',
  execute: async message => {
    /**
     * message.channel.sendSlash(name, ...args)
     * -> Takes 2 required parameter: the main commands and the arguments.
     * -> Each command choices are seperated with commas.
     * **/
    try {
      await message.channel.sendSlash(process.env.MYUU_ID, 'team');
    } catch (error) {
      console.error(`Error [team]: ${error}`);
    }
  },
  aliases: 'box',
  cooldown: 10,
};

module.exports = team;
