require("dotenv").config();
const express = require("express");
const { Client, Events, GatewayIntentBits } = require("discord.js");

const reactions = ["🌈", "🏳‍🌈", "👬", "💅", "🍌", ""];
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Pong!");
});

function sendPing() { 
  fetch("https://hellopridebot.glitch.me/")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error al enviar ping:", error));
}

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

  setInterval(sendPing, 1800000);
});

client.on("messageCreate", (msg) => {
  if (msg.system && msg.type === 7) {
    const randomReaction =
      reactions[Math.floor(Math.random() * reactions.length)];
    msg.react(randomReaction).catch(console.error);
  }
});

client.login(process.env.TOKEN);
