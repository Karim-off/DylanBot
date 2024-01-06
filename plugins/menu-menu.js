import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(global.img)).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menu = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝐃𝐘𝐋𝐀𝐍-𝐁𝐎𝐓* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║🤴ㅤ» 𝐎𝐰𝐧𝐞𝐫: wa.me/59176181985
║🫂ㅤ» 𝐂𝐫𝐞𝐚𝐝𝐨𝐫:𝐾𝑎𝑟𝑖𝑚
║🛎ㅤ» 𝐈𝐠:@usxr._.karim
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Fecha:* ${date}
║➤ *Tiempo activo:* ${uptime}
║➤ *Usuarios regs:* ${rtotalreg}
║➤ *Usuarios totales:* ${rtotal}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🎖 » 𝙽𝚒𝚟𝚎𝚕 : ${level}
┣💎 » 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 : ${limit}
┣🦁 » 𝙳𝚢𝚕𝚊𝚗𝙲𝚘𝚒𝚗𝚜 : ${money}
┣🪙 » 𝚃𝚘𝚔𝚎𝚗𝚜 : ${joincount}
┣🕹 » 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 : ${exp}
┣⚜ » 𝚁𝚊𝚗𝚐𝚘 : ${role}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓ 

ㅤ
┗━━━━━━━━━━━━━━━━┛

┏━━━━𝐉𝐔𝐄𝐆𝐎𝐒 ⛅━━━━┓ 
┣🎮 ${usedPrefix}mates
┣🎮 ${usedPrefix}ppt <papel / tijera /piedra>
┣🎮 ${usedPrefix}prostituto <nombre / @tag>
┣🎮 ${usedPrefix}prostituta <nombre / @tag>
┣🎮 ${usedPrefix}gay2 <nombre / @tag>
┣🎮 ${usedPrefix}lesbiana <nombre / @tag>
┣🎮 ${usedPrefix}pajero <nombre / @tag>
┣🎮 ${usedPrefix}pajera <nombre / @tag>
┣🎮 ${usedPrefix}puto <nombre / @tag>
┣🎮 ${usedPrefix}puta <nombre / @tag>
┣🎮 ${usedPrefix}manco <nombre / @tag>
┣🎮 ${usedPrefix}manca <nombre / @tag>
┣🎮 ${usedPrefix}rata <nombre / @tag>
┣🎮 ${usedPrefix}love <nombre / @tag>
┣🎮 ${usedPrefix}doxear <nombre / @tag>
┣🎮 ${usedPrefix}pregunta <texto>
┣🎮 ${usedPrefix}suitpvp <@tag>
┣🎮 ${usedPrefix}slot <apuesta>
┣🎮 ${usedPrefix}ttt <nombre sala>
┣🎮 ${usedPrefix}delttt
┣🎮 ${usedPrefix}simi <texto>
┣🎮 ${usedPrefix}top <texto>
┣🎮 ${usedPrefix}topotakus
┣🎮 ${usedPrefix}top10gays
┣🎮 ${usedPrefix}toplind@s
┣🎮 ${usedPrefix}topput@s
┣🎮 ${usedPrefix}toppajer@s
┣🎮 ${usedPrefix}topotakus
┣🎮 ${usedPrefix}topintegrantes
┣🎮 ${usedPrefix}toplagrasa
┣🎮 ${usedPrefix}toppanafrescos
┣🎮 ${usedPrefix}topshiposters
┣🎮 ${usedPrefix}toppajeros
┣🎮 ${usedPrefix}toplind@s
┣🎮 ${usedPrefix}topfamosos
┣🎮 ${usedPrefix}topsoltero
┣🎮 ${usedPrefix}topparejas
┣🎮 ${usedPrefix}formarpareja
┣🎮 ${usedPrefix}verdad
┣🎮 ${usedPrefix}reto
┣🎮 ${usedPrefix}cancion
┣🎮 ${usedPrefix}pista
┣🎮 ${usedPrefix}ruleta
┣🎮 ${usedPrefix}zodiac
┣🎮 ${usedPrefix}odio
┣🎮 ${usedPrefix}ship
┣🎮 ${usedPrefix}sorteo
┣🎮 ${usedPrefix}minovi@
┗━━━━━━━━━━━━━━━━━┛

┏━𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑━┓ 
┣🟢 ${usedPrefix}enable
┣🔴 ${usedPrefix}disable
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒━━━━━┓ 
┣📥 ${usedPrefix}play <texto>
┣📥 ${usedPrefix}play.1 <texto>
┣📥 ${usedPrefix}play.2 <texto>
┣📥 ${usedPrefix}playdoc <texto>
┣📥 ${usedPrefix}playlist <texto>
┣📥 ${usedPrefix}playlist2 <texto>
┣📥 ${usedPrefix}spotify <texto>
┣📥 ${usedPrefix}tiktok <enlace / link / url>
┣📥 ${usedPrefix}instagram <enlace / link / url>
┣📥 ${usedPrefix}mediafire <enlace / link / url>
┣📥 ${usedPrefix}instagram <enlace / link / url>
┣📥 ${usedPrefix}gitclone <enlace / link / url>
┣📥 ${usedPrefix}gdrive <enlace / link / url>
┣📥 ${usedPrefix}xnxxdl <enlace / link / url>
┣📥 ${usedPrefix}xvideosdl <enlace / link / url>
┣📥 ${usedPrefix}twitter <enlace / link / url>
┣📥 ${usedPrefix}fb <enlace / link / url>
┣📥 ${usedPrefix}fb2 <enlace / link / url>
┣📥 ${usedPrefix}fb3 <enlace / link / url>
┣📥 ${usedPrefix}fb4 <enlace / link / url>
┣📥 ${usedPrefix}fb5 <enlace / link / url>
┣📥 ${usedPrefix}ytmp3 <enlace / link / url>
┣📥 ${usedPrefix}ytmp4 <enlace / link / url>
┣📥 ${usedPrefix}ytmp3doc <enlace / link / url>
┣📥 ${usedPrefix}ytmp4doc <enlace / link / url>
┣📥 ${usedPrefix}stickerpack <enlace / link / url>
┣📥 ${usedPrefix}stickerly <texto>
┣📥 ${usedPrefix}ringtone <texto>
┣📥 ${usedPrefix}soundcloud <texto>
┣📥 ${usedPrefix}imagen <texto>
┣📥 ${usedPrefix}pinteret <texto>
┣📥 ${usedPrefix}wallpaper <texto>
┣📥 ${usedPrefix}wallpaper2 <texto>
┣📥 ${usedPrefix}pptiktok <nombre de usuario>
┣📥 ${usedPrefix}igstalk <nombre de usuario>
┣📥 ${usedPrefix}igstory <nombre de usuario>
┣📥 ${usedPrefix}tiktokstalk *<username>*
┗━━━━━━━━━━━━━━━━━┛

┏━━━━━𝐆𝐑𝐔𝐏𝐎𝐒 ⛅━━━━━┓ 
┣💌 ${usedPrefix}add <numero>
┣💌 ${usedPrefix}kick <@tag>
┣💌 ${usedPrefix}grupo <abrir / cerrar>
┣💌 ${usedPrefix}grouptime <opcion> <tiempo>
┣💌 ${usedPrefix}promote <@tag>
┣💌 ${usedPrefix}demote <@tag>
┣💌 admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣💌 ${usedPrefix}demote <@tag>
┣💌 ${usedPrefix}infogroup
┣💌 ${usedPrefix}resetlink
┣💌 ${usedPrefix}link
┣💌 ${usedPrefix}setname <texto>
┣💌 ${usedPrefix}setdesc <texto>
┣💌 ${usedPrefix}invocar <texto>
┣💌 ${usedPrefix}setwelcome <texto>
┣💌 ${usedPrefix}setbye <texto>
┣💌 ${usedPrefix}hidetag <texto>
┣💌 ${usedPrefix}warn <@tag>
┣💌 ${usedPrefix}unwarn <@tag>
┣💌 ${usedPrefix}listwarn
┣💌 ${usedPrefix}fantasmas
┣💌 ${usedPrefix}destraba
┣💌 ${usedPrefix}setpp <imagen>
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒━━━━━┓ 
┣🎭 ${usedPrefix}robar texto
┣🎭 ${usedPrefix}wm texto
┣🎭 ${usedPrefix}toimg <sticker>
┣🎭 ${usedPrefix}tomp3 <video>
┣🎭 ${usedPrefix}tomp3 <nota de voz>
┣🎭 ${usedPrefix}toptt <video / audio>
┣🎭 ${usedPrefix}tovideo <sticker>
┣🎭 ${usedPrefix}tourl <video / imagen / audio>
┣🎭 ${usedPrefix}tts es <texto>
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒━━━━┓ 
┣🖋️ ${usedPrefix}mensajefalso <nombre|mensaje>
┣🖋️ ${usedPrefix}phmaker <opcion> <imagen>
┣🖋️ ${usedPrefix}logos <efecto> <texto>
┣🖋️ ${usedPrefix}logochristmas <texto>
┣🖋️ ${usedPrefix}logocorazon <texto>
┣🖋️ ${usedPrefix}ytcomment <texto>
┣🖋️ ${usedPrefix}hornycard <@tag>
┣🖋️ ${usedPrefix}simpcard <@tag>
┣🖋️ ${usedPrefix}lolice <@tag>
┣🖋️ ${usedPrefix}itssostupid
┣🖋️ ${usedPrefix}pixelar
┣🖋️ ${usedPrefix}blur
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒━━━┓ 
┣🥀 ${usedPrefix}piropo
┣🥀 ${usedPrefix}consejo
┣🥀 ${usedPrefix}fraseromantica
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒━━━━━━━┓ 
┣🔍 ${usedPrefix}stickersearch <texto>
┣🔍 ${usedPrefix}stickersearch2 <texto>
┣🔍 ${usedPrefix}xnxxsearch <texto>
┣🔍 ${usedPrefix}animeinfo <texto>
┣🔍 ${usedPrefix}google <texto>
┣🔍 ${usedPrefix}letra <texto>
┣🔍 ${usedPrefix}wikipedia <texto>
┣🔍 ${usedPrefix}ytsearch <texto>
┣🔍 ${usedPrefix}apkdone <texto>
┣🔍 ${usedPrefix}apkgoogle <texto>
┣🔍 ${usedPrefix}apkmody <texto>
┣🔍 ${usedPrefix}uapkpro <texto>
┣🔍 ${usedPrefix}playstore <texto>
┗━━━━━━━━━━━━━━━━━━━━┛

• ━━━━ • • ━━━━ • • ━━━━ •

┌─── 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ⛅
🛠️ ${usedPrefix}spamwa <numero|texto|cantidad>
🛠️ ${usedPrefix}tamaño <cantidad> <imagen / video>
🛠️ ${usedPrefix}clima <país> <ciudad>
🛠️ ${usedPrefix}encuesta <texto1|texto2...>
🛠️ ${usedPrefix}afk <motivo>
🛠️ ${usedPrefix}ocr <responde a imagen>
🛠️ ${usedPrefix}acortar <enlace / link / url>
🛠️ ${usedPrefix}calc <operacion math>
🛠️ ${usedPrefix}del <mensaje>
🛠️ ${usedPrefix}whatmusic <audio>
🛠️ ${usedPrefix}readqr <imagen (QR)>
🛠️ ${usedPrefix}qrcode <texto>
🛠️ ${usedPrefix}readmore <texto1| texto2>
🛠️ ${usedPrefix}styletext <texto>
🛠️ ${usedPrefix}traducir <texto>
🛠️ ${usedPrefix}zoom <texto>
🛠️ ${usedPrefix}nowa <numero>
🛠️ ${usedPrefix}horario
• ━━━━ • • ━━━━ • • ━━━━ •

┌─── 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 ⛅
🧾 ${usedPrefix}verificar
🧾 ${usedPrefix}unreg *<numero de serie>
🧾 ${usedPrefix}claim
🧾 ${usedPrefix}lb
🧾 ${usedPrefix}perfil
🧾 ${usedPrefix}minar
🧾 ${usedPrefix}buy
🧾 ${usedPrefix}balance
🧾 ${usedPrefix}myns
🧾 ${usedPrefix}work
🧾 ${usedPrefix}buyall
🧾 ${usedPrefix}transfer *<tipo> <cantidad> <@tag>
• ━━━━ • • ━━━━ • • ━━━━ •

┌─── 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ⛅
🌟 ${usedPrefix}sticker <responder a imagen o video>
🌟 ${usedPrefix}sticker <enlace / link / url>
🌟 ${usedPrefix}s <responder a imagen o video>
🌟 ${usedPrefix}s <enlace / link / url>
🌟 ${usedPrefix}sfull <imagen o video>
🌟 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
🌟 ${usedPrefix}scircle <imagen>
🌟 ${usedPrefix}sremovebg <imagen>
🌟 ${usedPrefix}semoji <tipo> <emoji>
🌟 ${usedPrefix}attp <texto>
🌟 ${usedPrefix}attp2 <texto>
🌟 ${usedPrefix}attp3 <texto>
🌟 ${usedPrefix}ttp <texto>
🌟 ${usedPrefix}ttp2 <texto>
🌟 ${usedPrefix}ttp3 <texto>
🌟 ${usedPrefix}ttp4 <texto>
🌟 ${usedPrefix}ttp5 <texto>
🌟 ${usedPrefix}pat <@tag>
🌟 ${usedPrefix}slap <@tag>
🌟 ${usedPrefix}kiss <@tag>
🌟 ${usedPrefix}dado
🌟 ${usedPrefix}wm *<packname> <author>
🌟 ${usedPrefix}stickermarker *<efecto> <imagen>
🌟 ${usedPrefix}stickerfilter *<efecto> <imagen>
🌟 ${usedPrefix}palmaditas | pat @tag
🌟 ${usedPrefix}bofetada | slap @tag
🌟 ${usedPrefix}golpear @tag
🌟 ${usedPrefix}besar | kiss @tag
🌟 ${usedPrefix}alimentar | food @tag
• ━━━━ • • ━━━━ • • ━━━━ •`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|herramientas|comandosbot|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
