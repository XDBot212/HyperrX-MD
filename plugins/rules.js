let fetch = require('node-fetch') 
let handler = async (m, { conn, args, command }) => {
	await conn.sendButton(m.chat, `       βββγ π₯ππΉπ²π πππ½π²πΏππΌπ γβββ
            
β€ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot. 
β€ Dilarang Untuk Menggunakan Command 18+ Berlebihan (Ketahuan = Banned)
β€ Jangan Call/VC Bot Kalau Tidak Aktif.
β€ Call/VC Bot Auto Block.


`, `*πππ½π²πΏππΌπ*`,
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