let handler = async (m, { conn }) => {		
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Tobat:[, (Fitur ini hanya diaktifkan selama 2 bulan)', m)
}
handler.help = ['bkp']
handler.tags = ['bokep']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = false
module.exports = handler