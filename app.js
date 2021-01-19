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
    message.channel.send('```//link = untuk mengambil link server -xxx-``` ```//ping = pingpong``` ```//say = menyuruh bot mengatakan sesuatu``` ```//dsay = sama dengan say tapi menghapus perintah anda``` ```//1wangy = wangy wangy kan waifu anda``` ```//2wangy = membuat text untuk mengakui anda adalah seorang SIMP``` ```//3wangy = membuat text untuk nganu dengan waifu anda``` ```//4wangy = membuat text untuk croott dengan waifu anda```')
  }
  
  //cmd ping
  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send(":ping_pong: Ping.. mencari ping..").then(message => {
  
const end = Date.now()
message.edit(`:ping_pong: Pong! kamu membutuhkan waktu **${(end - start)}**ms!`)
})
  }
  
  
  //cmd say biasa
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku kata kata!')
    message.channel.send(text)
  }
  
  //cmd say tapi delete
  if(message.content.startsWith(`${prefix}dsay`)) {
    message.delete()
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku kata-kata!!!!!!')
    message.channel.send(text)
  }
  
  //cmd 1wangy
  if(message.content.startsWith(`${prefix}1wangy`)) {
    message.delete()
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku nama untuk wangy wangy')
    message.channel.send(`**${(text)}** **${(text)}** **${(text)}** ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut **${(text)}** wangi aku mau nyiumin aroma wanginya **${(text)}** AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH **${(text)}** keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH **${(text)}** AAAAA LUCCUUUUUUUUUUUUUUU............**${(text)}** AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? **${(text)}** itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ **${(text)}** gw ...**${(text)}** di laptop ngeliatin gw, **${(text)}** .. kamu percaya sama aku ? aaaaaaaaaaah syukur **${(text)}** aku gak mau merelakan **${(text)}** aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA **${(text)}** SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`)
  }
  
  //cmd 2wangy
  if(message.content.startsWith(`${prefix}2wangy`)) {
    message.delete()
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku nama untuk memberitahu anda seorang SIMP')
    message.channel.send(`Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng **${(text)}**. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot **${(text)}**. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau **${(text)}** jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang **${(text)}**, dan INI MURNI PIKIRAN DAN PERASAAN GUE`)
  }
  
  //cmd 3wangy
  if(message.content.startsWith(`${prefix}3wangy`)) {
    message.delete()
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri aku nama untuk nganu')
    message.channel.send(`GW BENAR-BENAR PENGEN JILATI KAKI **${(text)}** GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENOD DENGANNYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA YA TÜHAN. GW INGIN MEMBUAT ANAK-ANAK DENGAN **${(text)}** SEBANYAK SATU TÌM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINNYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW YANG GW BUAT SAMA **${(text)}** GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG, LUBANG TELINGA, RONGGA MATA MAUPUN PUSAR, KECUALI PORI-PORI KULIT. KEMUDIAN GW AKAN MENJADIKANNYA MANUSIA YANG TIDAK BISA HIDUP KALO TIDAK GW KENTOG SETIAP HARI. DAN KALAU GUA DISEPONG GUA RELA KONTL GUA PUTUS.`)
  }
  
  if(message.content.startsWith(`${prefix}4wangy`)) {
    message.delete()
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong beri nama untuk croott')
    message.channel.send(`BUKA BAJU **${(text)}** LANGSUNG CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROT CROT CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROTCEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROTCEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROT MONNCROOOTOOOOOOOOOOOOOOOOOOOOOOO`)
  }
 
})