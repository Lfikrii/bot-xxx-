const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js')
const client = new Discord.Client()
 
 
client.login(process.env.TOKEN)
var prefix = '//'
const PREFIX = process.env.PREFIX 
 
client.on('message', message => {
  
  if(message.content === '//link'){
    message.channel.send('https://discord.gg/ZafN8qJJV8')
  }
    
  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send(":ping_pong: Ping.. mencari ping..").then(message => {
  
const end = Date.now()
message.edit(`:ping_pong: Pong! kamu membutuhkan waktu **${(end - start)}**ms!`)
})
  }
  
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku kata kata!!!!!!')
    message.channel.send(text)
  }
   
 
})