let fetch = require('node-fetch') 
let handler = async (m, { conn, args, command }) => {
	await conn.sendButton(m.chat, `       ━━━『 𝗥𝘂𝗹𝗲𝘀 𝗛𝘆𝗽𝗲𝗿𝗕𝗼𝘁 』━━━
            
➤ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot. 
➤ Dilarang Untuk Menggunakan Command 18+ Berlebihan (Ketahuan = Banned)
➤ Jangan Call/VC Bot Kalau Tidak Aktif.
➤ Call/VC Bot Auto Block.


`, `*𝗛𝘆𝗽𝗲𝗿𝗕𝗼𝘁*`,
}
         
handler.help = ['rules']
handler.tags = ['rules']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler