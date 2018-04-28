const Discord = require('discord.js');
const client = new Discord.Client();
const entity = `<@${client.user.id}>`;

client.on("ready", () => {
  client.user.setPresence({ game:
  {
    type: 'WATCHING',
    name: 'you'
  },
    status: 'available'
  });
});

client.on("message", async message => {
  const args = message.content.substring(entity.length).trim().split(/ +/g);
  if (message.content.startsWith(entity) || message.content.endsWith(entity))
  {
    message.channel.send("**Err...** Something is not right here.");
  }
});

// Authorize bot login token
client.login(process.env.APP_TOKEN);
