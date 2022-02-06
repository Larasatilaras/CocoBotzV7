let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  //await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
═〘 Rules ${namabot} 〙═

⬡ Mohon Untuk Tidak Spam Bot Karena Bot Ini Sudah Memiliki Otomatis Blokir Bagi Pengguna Bot Yang Spam

⬡ Mohon Maaf Jika Ada Yang Memakai Menu Nsfw Maka Akan Di Block Oleh Bot, Jika Di GC, Tolong Admin Untuk Menghubungi Kami!!

⬡ Mohon Untuk Tidak Menelpon Bot Karena Bot Ini Sudah Memiliki Otomatis Blokir Bagi Orang Yang Menelpon Bot

⬡ Kami Tidak Bertanggung Jawab Atas Kebocoran Data Pribadi Anda


➥ ${namabot} Versi ${package.version}
➥ *Ping:* ${neww - old} *ms*
➥ *Total User:* ${totalreg} *User*
➥ *Uptime:* ${uptime}

═ 〘 DONASI 〙 ═
➥ Saweria : https://saweria.co/cocopie
➥ Dana: [0899-2029-499]


 ©Cocopie
 Script Original By Cocopie & Nurutomo
 
 
═〘 ${namabot} 〙 ═
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = handler.command = /^(infobot|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
