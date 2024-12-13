const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = client => {
  let eventsDir = join(__dirname, '../events');

  /**
   * Run through folder events to look for file that ends with .js
   * require each file to register to the bot
   * **/

  readdirSync(eventsDir).forEach(file => {
    if (!file.endsWith('.js')) return;
    let event = require(`${eventsDir}/${file}`);
    if (!event) return console.error('E[handler-event]: No event exist in folder events.');
    event.once
      ? client.once(event.name, (...args) => event.execute(...args))
      : client.on(event.name, (...args) => event.execute(...args));
  });
};
