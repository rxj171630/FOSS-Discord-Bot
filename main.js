const token = 'INSERT TOKEN HERE';
const Discord = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');

const client = new Discord.Client();

const prefix = '-';

client.modules = new Discord.Collection();

const moduleFiles = fs.readdirSync('./modules/').filter(file => file.endsWith('.js'));
for (const file of moduleFiles){
  const module = require(`./modules/${file}`);
  client.modules.set(module.name, module);
  console.log(`Enabled module: ${module.name}`);
}


client.once('ready',message => {
    console.log('Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
      if (client.modules.get('ping'))
        client.modules.get('ping').execute(message, args);
      else {
        message.channel.send('ERROR: ping module not installed');
      }
    }
});

client.login(token);
