let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 0895-3544-37300 〙 ═`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
