let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://cdn.discordapp.com/attachments/1202339620939898981/1204534386922487839/LAAGENDASEMANALESTAAQUITraemosdeTODOparapasarlatemporadadeAmorRoyaleconDuocomoL....ElarsenaldelDesconocidollegaparaliberartudemoniointeriorylosnuevosaspectosdefebreroaterrizanjuntoc.jpg?ex=65d51511&is=65c2a011&hm=1f4aa577b0d56de7b8a65274e14b20726180e1248c14504170e853b161a503fa&'
let dia = Math.floor(Math.random() * 30)
let tok = Math.floor(Math.random() * 10)
let hadesb = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += hadesb
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp

let texto = `*AGENDA DE ESTA SEMANA ✅DB*`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak)
//await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['agendasemanal', 'agenda', 'agendasemanal'] 
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}