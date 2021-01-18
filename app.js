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
  
  //cmd ambil link server
  if(message.content === '//link'){
    message.channel.send('https://discord.gg/ZafN8qJJV8')
  }
    
  if(message.content === '//help'){
    message.channel.send('```//link = untuk mengambil link server -xxx-``` ```//ping = pingpong``` ```//say = menyuruh bot mengatakan sesuatu``` ```//sayd = sama dengan say tapi menghapus perintah anda```')
  }
  
  //cmd ping
  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send(":ping_pong: Ping.. mencari ping..").then(message => {
  
const end = Date.now()
message.edit(`:ping_pong: Pong! kamu membutuhkan waktu **${(end - start)}**ms!`)
})
  }
  
  //cmd say tapi delete
  if(message.content.startsWith(`${prefix}sayd`)) {
    message.delete()
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku kata kata!!!!!!')
    message.channel.send(text)
  }
  
  //cmd say biasa
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku kata kata!!!!!!')
    message.channel.send(text)
  }
 
})