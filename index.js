require("dotenv").config();
const express = require("express");
const { Client, Events, GatewayIntentBits } = require("discord.js");

const reactions = () => {
  const reactionsEmoji = ["🌈", '🏳‍🌈', "👬", "💅", "🍌", '👨‍❤️‍💋‍👨'];
  const reactionsLength = reactionsEmoji.length;
  const randomReaction =
    reactionsEmoji[Math.floor(Math.random() * reactionsLength)];

  return randomReaction;
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Pong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
    msg.react(reactions()).catch(console.error);
  }
});

client.on("messageCreate", (msg) => {
  if (!msg.author.bot) {
    const member = msg.guild.members.cache.get(msg.author.id);
    if (member) {
      const roles = member.roles.cache.map((role) => role.name);
      if (roles.includes('👨‍🦽 Los Mas Letales')) {
        msg.react('🏳️‍🌈');
        msg.react("👬");
        msg.react("🌈");
        msg.react("💅");
        msg.react("🍌");
        msg.react('👨‍❤️‍💋‍👨');
      }
    }
  }
});

client.login(process.env.TOKEN);
