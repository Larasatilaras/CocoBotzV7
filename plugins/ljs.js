let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command }) => {
let img = './src/mike.png'
let img1 = fs.readFileSync('./src/img1.png')
let img2 = fs.readFileSync('./src/img2.png')
let user = global.DATABASE.data.users[m.sender]
/*conn.sendFile(m.chat, img, '', `Halo juga kak ${conn.getName(m.sender)}`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})*/
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = m.fromMe ? conn.user : conn.contacts[who]
pushname2 = `*${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*`

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
runtime = process.uptime()
					teks = `CocoBotz`// \n\n${kyun(runtime)}`
					run = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `teks`
					const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `Cocopie`, //Kasih namalu
                            orderTitle: `${teks}\n${run}`,
                            thumbnail: img1, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
					//m.reply(teks)
					let jawab = `Hai ${pushname2} ${ucapan()}\nSaya ${namabot} Ada Yang Bisa Saya Bantu? :3`.trim()
conn.sendButton(m.chat, jawab, footer, 'Show Menu', '#menu', m, {quoted: ftrol})
}
handler.customPrefix = /^(P|p|tes|test|Tes|TestHallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello|oy)$/i
handler.command = new RegExp
module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat Pagi"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang🌞"
    }
    if (time >= 15) {
        res = "Selamat Sore🌝"
    }
    if (time >= 18) {
        res = "Selamat Malam🌚"
    }
    return res
}
