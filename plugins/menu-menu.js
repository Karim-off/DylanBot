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
await conn.sendMessage(m.chat, {
        text: `*Hey @${m.sender.split`@`[0]} estamos enviando el menu*
𝘁𝗲𝗻 𝗽𝗮𝗰𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗲𝘃𝗶𝘁𝗮 𝗲𝗹 𝘀𝗽𝗮𝗺 👀

𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿.`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `⌜ *${wm}* ⌟  

*╭━〔  𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 ⛅  〕⬣
 │➯ 👤 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 : Karim 
 │➯ 👤 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 : Karim
 │➯ 🧿 𝐂𝐚𝐧𝐚𝐥 : https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*╰━━━━━━━━━━━━⬣*

*╭━〔 ⚔️ 𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐅𝐄𝐌 ⚔️ 〕*
*│➯ ⚔️ ${usedPrefix}feminfinito14*
*│➯ ⚔️ ${usedPrefix}feminfinito16*
*│➯ ⚔️ ${usedPrefix}feminfinito18*
*│➯ ⚔️ ${usedPrefix}feminfinito20*
*│➯ ⚔️ ${usedPrefix}feminfinito22*
*│➯ ⚔️ ${usedPrefix}feminfinito00*
*│➯ ⚔️ ${usedPrefix}feminfinitovs*
*│➯ ⚔️ ${usedPrefix}femvivido14*
*│➯ ⚔️ ${usedPrefix}femvivido16*
*│➯ ⚔️ ${usedPrefix}femvivido18*
*│➯ ⚔️ ${usedPrefix}femvivido20*
*│➯ ⚔️ ${usedPrefix}femvivido22*
*│➯ ⚔️ ${usedPrefix}femvivido00*
*│➯ ⚔️ ${usedPrefix}femvividovs*
*│➯ ⚔️ ${usedPrefix}fem8vs8*
*│➯ ⚔️ ${usedPrefix}fem16vs16*
*╰─────────────────╯*

*╭━〔 ⚔️ 𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐌𝐀𝐒𝐂 ⚔️ 〕*
*│➯ ⚔️ ${usedPrefix}mascinfinito14*
*│➯ ⚔️ ${usedPrefix}mascinfinito16*
*│➯ ⚔️ ${usedPrefix}mascinfinito18*
*│➯ ⚔️ ${usedPrefix}mascinfinito20*
*│➯ ⚔️ ${usedPrefix}mascinfinito22*
*│➯ ⚔️ ${usedPrefix}mascinfinito00*
*│➯ ⚔️ ${usedPrefix}mascinfinitovs*
*│➯ ⚔️ ${usedPrefix}mascvivido14*
*│➯ ⚔️ ${usedPrefix}mascvivido16*
*│➯ ⚔️ ${usedPrefix}mascvivido18*
*│➯ ⚔️ ${usedPrefix}mascvivido20*
*│➯ ⚔️ ${usedPrefix}mascvivido22*
*│➯ ⚔️ ${usedPrefix}mascvivido00*
*│➯ ⚔️ ${usedPrefix}mascvividovs*
*│➯ ⚔️ ${usedPrefix}masc8vs8*
*│➯ ⚔️ ${usedPrefix}masc16vs16*
*╰─────────────────╯*

*╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕*
*│➯ 🕹️ ${usedPrefix}mates*
*│➯ 🕹️ ${usedPrefix}ppt*
*│➯ 🕹️ ${usedPrefix}prostituto <@tag>*
*│➯ 🕹️ ${usedPrefix}prostituta <@tag>*
*│➯ 🕹️ ${usedPrefix}gay2 <@tag>*
*│➯ 🕹️ ${usedPrefix}lesbiana <@tag>*
*│➯ 🕹️ ${usedPrefix}pajero <@tag>*
*│➯ 🕹️ ${usedPrefix}pajera <@tag>*
*│➯ 🕹️ ${usedPrefix}puto <@tag>*
*│➯ 🕹️ ${usedPrefix}puta <@tag>*
*│➯ 🕹️ ${usedPrefix}manco <@tag>*
*│➯ 🕹️ ${usedPrefix}manca <@tag>*
*│➯ 🕹️ ${usedPrefix}rata <@tag>*
*│➯ 🕹️ ${usedPrefix}negro <@tag>*
*│➯ 🕹️ ${usedPrefix}negra <@tag>*
*│➯ 🕹️ ${usedPrefix}fea <@tag>*
*│➯ 🕹️ ${usedPrefix}feo <@tag>*
*│➯ 🕹️ ${usedPrefix}sinpoto <@tag>*
*│➯ 🕹️ ${usedPrefix}sintetas <@tag>*
*│➯ 🕹️ ${usedPrefix}sinpito <@tag>*
*│➯ 🕹️ ${usedPrefix}adoptada <@tag>*
*│➯ 🕹️ ${usedPrefix}adoptado <@tag>*
*│➯ 🕹️ ${usedPrefix}love*
*│➯ 🕹️ ${usedPrefix}los10*
*│➯ 🕹️ ${usedPrefix}suitpvp*
*│➯ 🕹️ ${usedPrefix}slot*
*│➯ 🕹️ ${usedPrefix}simisimi*
*│➯ 🕹️ ${usedPrefix}pregunta*
*│➯ 🕹️ ${usedPrefix}cuando*
*│➯ 🕹️ ${usedPrefix}ship5*
*│➯ 🕹️ ${usedPrefix}abrazo*
*│➯ 🕹️ ${usedPrefix}ship2*
*│➯ 🕹️ ${usedPrefix}formarpareja*
*│➯ 🕹️ ${usedPrefix}verdad*
*│➯ 🕹️ ${usedPrefix}reto*
*│➯ 🕹️ ${usedPrefix}cancion*
*│➯ 🕹️ ${usedPrefix}pista*
*│➯ 🕹️ ${usedPrefix}ruleta*
*│➯ 🕹️ ${usedPrefix}zodiac*
*│➯ 🕹️ ${usedPrefix}odio*
*│➯ 🕹️ ${usedPrefix}ship*
*│➯ 🕹️ ${usedPrefix}sorteo*
*│➯ 🕹️ ${usedPrefix}minovia*
*│➯ 🕹️ ${usedPrefix}minovio*
*│➯ 🕹️ ${usedPrefix}kchero*
*│➯ 🕹️ ${usedPrefix}kchero*
*╰─────────────────╯*

 ╭━〔 ⚠️ *FREE FIRE* ⚠️ 〕
*│➯ 🗺️ ${usedPrefix}bermuda*
*│➯ 🗺️ ${usedPrefix}kalahari*
*│➯ 🗺️ ${usedPrefix}alpes*
*│➯ 🗺️ ${usedPrefix}purgatorio*
*│➯ 🗺️ ${usedPrefix}nexterra*
*╰──────────────────╯*

 ╭━〔 🧿 𝐆𝐄𝐍𝐄𝐑𝐀 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 🧿 〕
*│➯ 🌐 ${usedPrefix}cuentas*
*╰─────────────────╯*

 ╭━〔 👾 𝐆𝐑𝐔𝐏𝐎 𝐃𝐄 𝐒𝐎𝐑𝐓𝐄𝐎𝐒 👾 〕
*│➯ ⭐ ${usedPrefix}sorteo*
*│➯ ⭐ ${usedPrefix}ruleta*
*│➯ ⭐ ${usedPrefix}deathnote*
*╰─────────────────╯*

 ╭━〔 ⚙️ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⚙️ 〕
*│➯ 🟢 ${usedPrefix}enable*
*│➯ 🔴 ${usedPrefix}disable*
*╰─────────────────╯*

 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*│➯ 📥 ${usedPrefix}play*
*│➯ 📥 ${usedPrefix}play.1*
*│➯ 📥 ${usedPrefix}play.2*
*│➯ 📥 ${usedPrefix}playlist*
*│➯ 📥 ${usedPrefix}spotify*
*│➯ 📥 ${usedPrefix}spotifydl*
*│➯ 📥 ${usedPrefix}tiktok*
*│➯ 📥 ${usedPrefix}instagram*
*│➯ 📥 ${usedPrefix}mediafire*
*│➯ 📥 ${usedPrefix}gdrive*
*│➯ 📥 ${usedPrefix}twitter*
*│➯ 📥 ${usedPrefix}ytmp3*
*│➯ 📥 ${usedPrefix}ytmp4*
*│➯ 📥 ${usedPrefix}imagen*
*│➯ 📥 ${usedPrefix}iaimagen*
*│➯ 📥 ${usedPrefix}pinteres*
*│➯ 📥 ${usedPrefix}igstory*
*╰─────────────────╯*

 ╭━〔 ❄️ 𝐆𝐑𝐔𝐏𝐎𝐒 ❄️〕
*│➯ 👥 ${usedPrefix}kick*
*│➯ 👥 ${usedPrefix}grupo*
*│➯ 👥 ${usedPrefix}promote*
*│➯ 👥 ${usedPrefix}demote*
*│➯ 👥 ${usedPrefix}demote*
*│➯ 👥 ${usedPrefix}link*
*│➯ 👥 ${usedPrefix}invocar*
*│➯ 👥 ${usedPrefix}setwelcome*
*│➯ 👥 ${usedPrefix}setbye*
*│➯ 👥 ${usedPrefix}hidetag*
*│➯ 👥 ${usedPrefix}fantasmas*
*│➯ 👥 ${usedPrefix}kickfantasmas*
*╰─────────────────╯*

*╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*
*│➯ 📍 ${usedPrefix}toimg*
*│➯ 📍 ${usedPrefix}tomp3*
*│➯ 📍 ${usedPrefix}toptt*
*│➯ 📍 ${usedPrefix}tovideo*
*│➯ 📍 ${usedPrefix}tts*
*╰──────────────────╯*

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*
*│➯ ❄️ ${usedPrefix}mensajefalso*
*│➯ ❄️ ${usedPrefix}logos*
*│➯ ❄️ ${usedPrefix}logocorazon*
*│➯ ❄️ ${usedPrefix}ytcomment*
*│➯ ❄️ ${usedPrefix}hornycard*
*│➯ ❄️ ${usedPrefix}itssostupid*
*│➯ ❄️ ${usedPrefix}pixelar*
*╰─────────────────╯*

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*│➯ 🌷 ${usedPrefix}piropo*
*│➯ 🌷 ${usedPrefix}consejo*
*│➯ 🌷 ${usedPrefix}fraseromantica*
*╰──────────────────╯*

*╭━〔 ✨ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
*│➯ 🔍 ${usedPrefix}xnxxsearch*
*│➯ 🔍 ${usedPrefix}google*
*│➯ 🔍 ${usedPrefix}letra*
*│➯ 🔍 ${usedPrefix}wikipedia*
*│➯ 🔍 ${usedPrefix}ytsearch*
*│➯ 🔍 ${usedPrefix}playstore*
*│➯ 🔍 ${usedPrefix}mercadolibre*
*│➯ 🔍 ${usedPrefix}pornhubsearch*
*╰─────────────────╯*

*╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
*│➯ 🍃 ${usedPrefix}clima*
*│➯ 🍃 ${usedPrefix}afk*
*│➯ 🍃 ${usedPrefix}ocr*
*│➯ 🍃 ${usedPrefix}calc*
*│➯ 🍃 ${usedPrefix}del*
*│➯ 🍃 ${usedPrefix}whatmusic*
*│➯ 🍃 ${usedPrefix}qrcode*
*│➯ 🍃 ${usedPrefix}traducir*
*╰──────────────────╯*

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
*│➯ 🍁 ${usedPrefix}verificar*
*│➯ 🍁 ${usedPrefix}unreg*
*│➯ 🍁 ${usedPrefix}minar*
*│➯ 🍁 ${usedPrefix}buy*
*│➯ 🍁 ${usedPrefix}work*
*│➯ 🍁 ${usedPrefix}transfer*
*╰─────────────────╯*

*╭━〔  𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ⛅  〕*
*│➯ ☁️ ${usedPrefix}s*
*│➯ ☁️ ${usedPrefix}emojimix*
*│➯ ☁️ ${usedPrefix}attp*
*│➯ ☁️ ${usedPrefix}qc*
*╰─────────────────╯*

*╭━〔 🧩𝐑𝐀𝐍𝐃𝐎𝐌 𝐀𝐍𝐈𝐌𝐄🧩 〕*
*│➯ 🧩 ${usedPrefix}chica*
*│➯ 🧩 ${usedPrefix}chico*
*│➯ 🧩 ${usedPrefix}cristianoronaldo*
*│➯ 🧩 ${usedPrefix}messi*
*│➯ 🧩 ${usedPrefix}meme*
*│➯ 🧩 ${usedPrefix}meme2*
*│➯ 🧩 ${usedPrefix}itzy*
*│➯ 🧩 ${usedPrefix}blackpink*
*│➯ 🧩 ${usedPrefix}kpop:exo:bts*
*│➯ 🧩 ${usedPrefix}lolivid*
*│➯ 🧩 ${usedPrefix}loli*
*│➯ 🧩 ${usedPrefix}navidad*
*│➯ 🧩 ${usedPrefix}ppcouple*
*│➯ 🧩 ${usedPrefix}neko*
*│➯ 🧩 ${usedPrefix}waifu*
*│➯ 🧩 ${usedPrefix}akira*
*│➯ 🧩 ${usedPrefix}akiyama*
*│➯ 🧩 ${usedPrefix}anna*
*│➯ 🧩 ${usedPrefix}asuna*
*│➯ 🧩 ${usedPrefix}ayuzawa*
*│➯ 🧩 ${usedPrefix}boruto*
*│➯ 🧩 ${usedPrefix}chiho*
*│➯ 🧩 ${usedPrefix}chitoge*
*│➯ 🧩 ${usedPrefix}deidara*
*│➯ 🧩 ${usedPrefix}erza*
*│➯ 🧩 ${usedPrefix}elaina*
*│➯ 🧩 ${usedPrefix}eba*
*│➯ 🧩 ${usedPrefix}emilia*
*│➯ 🧩 ${usedPrefix}hestia*
*│➯ 🧩 ${usedPrefix}hinata*
*│➯ 🧩 ${usedPrefix}inori*
*│➯ 🧩 ${usedPrefix}isuzu*
*│➯ 🧩 ${usedPrefix}itachi*
*│➯ 🧩 ${usedPrefix}itori*
*│➯ 🧩 ${usedPrefix}kaga*
*│➯ 🧩 ${usedPrefix}kagura*
*│➯ 🧩 ${usedPrefix}kaori*
*│➯ 🧩 ${usedPrefix}keneki*
*│➯ 🧩 ${usedPrefix}kotori*
*│➯ 🧩 ${usedPrefix}kurumi*
*│➯ 🧩 ${usedPrefix}madara*
*│➯ 🧩 ${usedPrefix}mikasa*
*│➯ 🧩 ${usedPrefix}miku*
*│➯ 🧩 ${usedPrefix}minato*
*│➯ 🧩 ${usedPrefix}naruto*
*│➯ 🧩 ${usedPrefix}nezuko*
*│➯ 🧩 ${usedPrefix}sagiri*
*│➯ 🧩 ${usedPrefix}sasuke*
*│➯ 🧩 ${usedPrefix}sakura*
*│➯ 🧩 ${usedPrefix}cosplay*
*╰─────────────────╯*

DYLAN BOT || KARIM X DYLAN`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/2beb82330be9e795dea98.jpg`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: '❑— 𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 —❑\nWʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
//body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
thumbnail: img,
sourceUrl: 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react('✅')        
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)        
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(herramientas|herramientas|herramientas|herramientas|allm\?)$/i
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