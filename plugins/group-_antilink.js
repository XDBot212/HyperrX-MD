let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
  if (user.isAdmin || user.isSuperAdmin) return m.reply ('Karena Kamu Adalah Admin Group Bot tidak akan Kick Kamu')
 m.reply(`*「 ANTILINK DETECTOR 」*\n\nLink Grup Terdeteksi\nMaaf *${name}*,Kamu akan dikick dari grup ini!`)
   this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
handler.group = true

module.exports = handler
