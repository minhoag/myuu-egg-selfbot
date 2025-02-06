const { Client, Collection } = require('discord.js-selfbot-v13');
const { readdirSync } = require('fs');
const { join } = require('path');
require('dotenv').config();

const client = new Client();

/**
 * Commands: store commands to execute slash commands using legacy commands.
 * Events: to handle different Discord event.
 * Cooldowns: to add a cooldown before execute following commands.
 * **/

client.commands = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.information = new Collection();

/**
 * Require multiple file
 * **/

const handlersDir = join(__dirname, './handlers');
readdirSync(handlersDir).forEach(handler => {
  if (!handler.endsWith('.js')) return;
  require(`${handlersDir}/${handler}`)(client);
});

// Prevent Rejection & Exception
process.on('unhandledRejection', error => {
  console.error('Unhandled Rejection: ', error);
});
process.on('uncaughtException', error => {
  console.error('Uncaught Exception: ', error);
});

/**
 * Handle login. Check if TOKEN is available
 * **/
if (!process.env.TOKEN) return console.error('Error [index-token]: Token is missing!');
client.login(process.env.TOKEN).catch(err => console.error('Error [index-login]:', err.code));
