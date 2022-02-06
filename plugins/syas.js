let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/rkTg7B0/donasi.jpg`)).buffer(), `
┌〔 𝘿𝙤𝙣𝙖𝙨𝙞 • 𝙀𝙢𝙤𝙣𝙚𝙮 〕
├ _Pulsa_ : *0895-3544-37300*
├ _Saweria_ : *https://saweria.co/cocopie*
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
