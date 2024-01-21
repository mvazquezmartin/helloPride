require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require("discord.js");

const reactions = ["🌈", "🏳‍🌈", "👬", "💅", "🍌"];

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

client.on("messageCreate", (msg) => {  
  if (msg.system && msg.type === 7) {
    const randomReaction =
      reactions[Math.floor(Math.random() * reactions.length)];
    msg.react(randomReaction).catch(console.error);
  }
});

client.login(process.env.TOKEN);
