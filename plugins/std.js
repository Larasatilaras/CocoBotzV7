let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Sewa Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 15.000,00*
╠➥ *Permanen* : *Rp 25.000,00*
╠➥ *Premium* :   *Rp 5.000,00*
╠➥ *Permanen+SC* : *Rp 50.000,00*
╠➥ *Jasa Run* : *Rp 15.000,00*
║
╠═〘 PAYMENT 〙 ═
╠➥ Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ © Cocopie || 2025
╠═ Script Original By Cocopie & Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
