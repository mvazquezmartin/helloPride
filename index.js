require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
const reactions = require('./utils/reactions.utils');
const hasSpecialRole = require('./utils/hasRole.utils');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (msg) => {  
  if (
    (msg.system && msg.type === 7) ||
    (!msg.author.bot && hasSpecialRole(msg))
  ) {
    const shuffledReactions = reactions();
    shuffledReactions.forEach((reaction) => {
      msg.react(reaction).catch(console.error);
    });
  }
});

client.login(process.env.TOKEN);
