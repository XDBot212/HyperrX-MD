let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch()).buffer(), `
BIG THANKS TO

• My God
• My ortu
• Nurutomo
• Xteam
• AlyaaXzy 
• BOTCAHX
• Zeks
• Bochilgaming
• Penyedia Layanan API
• Orang-orang yang Berdonasi
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
