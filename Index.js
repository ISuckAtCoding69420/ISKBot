const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
}
if (message.content === '69') {
	message.channel.send('Nice');
}
if (message.content === 'Exam week!') {
	message.channel.send('Good Luck!');
}
if (message.content === `${prefix}Creators`) {
	message.channel.send('Yanxii and FlameXode');
}
if (message.content === 'uwu') {
	message.channel.send('owo');
}
if (message.content === `${prefix}user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
if (message.content === `${prefix}headpat-me`) {
	message.channel.send(`${message.author.username}, here are your Headpats! *pat pat*`);
}
});
client.login(token);
