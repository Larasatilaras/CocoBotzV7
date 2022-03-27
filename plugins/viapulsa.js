let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 0857-5966-2798 〙 ═`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
