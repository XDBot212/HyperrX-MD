let fs = require('fs')
let handler = async (m) => {
let hellohyper = fs.readFileSync('./mp3/Ojo DJ.mp3')
conn.sendFile(m.chat, hellohyper, '', '', m, true)
}

handler.customPrefix = /^(HyperBot|Hyper)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler