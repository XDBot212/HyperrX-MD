let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming4 Hyperr X-MD'
  m.reply('_Proses..._')
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/naruto?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `Β© πππ½π²πΏπΏ π«-π π`, m, false)
}
handler.help = ['flaming9'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming9)$/i

module.exports = handler
