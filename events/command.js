const { sleep } = require('../function');

const command = {
  name: 'messageCreate',
  once: false,
  execute: async message => {
    /**
     * 1. Check if the incomming messgage is from SELF. If not, return.
     * 2. Check if the message starts with prefix. IF not, return.
     * 3. Filter through commands registered, only run if 2 conditions or met:
     * command exists, command is on cooldown
     * **/

    if (message.author.id !== message.client.user?.id) return;
    let prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type !== 'GUILD_TEXT') return;

    let args = message.content.substring(prefix.length).split(' ');
    let command = message.client.commands.get(args[0]);

    if (!command) {
      let commandFromAlias = message.client.commands.find(command => command.aliases.includes(args[0]));
      if (commandFromAlias) command = commandFromAlias;
      else return;
    }
    let cooldown = message.client.cooldowns.get(`${command.name}-${message.member.user.username}`);

    if (command.cooldown && cooldown) {
      if (Date.now() < cooldown) return;
      message.client.cooldowns.set(
        `${command.name}-${message.member.user.username}`,
        Date.now() + command.cooldown * 1000,
      );
      setTimeout(() => {
        message.client.cooldowns.delete(`${command?.name}-${message.member?.user.username}`);
      }, command.cooldown * 1000);
    } else if (command.cooldown && !cooldown) {
      message.client.cooldowns.set(
        `${command.name}-${message.member.user.username}`,
        Date.now() + command.cooldown * 1000,
      );
    }
    command.execute(message, args);
    await sleep(1000);
    message.delete(message.id);
  },
};

module.exports = command;
