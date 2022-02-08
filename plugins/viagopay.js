let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 0899-2029-499 〙 ═`.trim(), m)
}

handler.command = /^viagopay$/i

module.exports = handler
