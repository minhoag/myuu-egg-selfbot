const { join } = require('path');
const { readdirSync } = require('fs');

module.exports = client => {
  /**
   * Run through folder commands to look for file that ends with .js
   * require each file to register to the bot
   * **/
  let commandsDir = join(__dirname, '../commands');
  readdirSync(commandsDir).forEach(file => {
    if (!file.endsWith('.js')) return;
    let command = require(`${commandsDir}/${file}`);
    client.commands.set(command.name, command);
  });
};
