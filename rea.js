const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';


client.on('ready', () =>{
    console.log('Rea is online!');
});

client.on('message', message =>{
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).split("  ");
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'join'){
        message.channel.send('discord.gg/join');
    } else if (message.content === 'hello'){
        message.channel.send('hello there cutie!');
    } else if(command === 'wip'){
        message.channel.send('https://discord.gg/zJNqujCR');
    }
});

client.login('ODQ3MTMyMzAxNDEwMzA0MDcw.YK5nbw.7Xt7a8J7QM7jnuAJCFP295BHxPM');