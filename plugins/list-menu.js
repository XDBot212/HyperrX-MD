let handler = async (m, { conn, text, usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time3 = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let time2 = require('moment-timezone').tz('Asia/Makassar').format('HH:mm:ss')
    let time1 = require('moment-timezone').tz('Asia/Jayapura').format('HH:mm:ss')
   let ar = ['list', 'menu']
   let ras = `Hi @${m.sender.split('@')[0]} 👋`
    let sel = `*© 𝗛𝘆𝗽𝗲𝗿𝗿 𝗫-𝗠𝗗*`
    let rs = `𝗖𝗹𝗶𝗰𝗸 𝗛𝗲𝗿𝗲!`
const sections = [ {
	title: `☁️ Online ${uptime} | ⏲️ Hour ${time1} WIT | ⏲️ Hour ${time2} WITA | ⏲️ Hour ${time3} WIB`,
	rows: [
	    {title: `All Command`, rowId: `.a `}, //description: `All Command/Menu`},
	    {title: `Owner`, rowId: `#owner `}, //description: `Owner Contact`},
        {title: `Donate`, rowId: `#donasi `}, //description: `Donate make Bot Online 24 Hours (If You Want)`},
        {title: `Script`, rowId: `#sc `}, //description: `Bot Script`},
        {title: `Official Group`, rowId: `#gcbot `}, //description: `Official Group Bot`},
        {title: `Speed`, rowId: `#speed `}, //description: `Bot Respon Speed`},
        {title: `List Textpro Maker`, rowId: `#textpro `}, //description: `Make your Nice Textpro Self`},
        {title: `Rules`, rowId: `#rules `}, //description: `Follow Bot Rules!`},
        ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: 'If you find a Bug,Error,or difficulty using bot, Report/ask to owner.',
  title: ras,
  buttonText: rs,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['Menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
