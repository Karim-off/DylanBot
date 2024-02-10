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
        text: `*Hey* @${m.sender.split`@`[0]}
𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂📍. . . 👀

𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿.`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `⌜ *${wm}* ⌟  

*╭─────────────────╮*
*│➯* 𝗛𝗼𝗹𝗮👋 @user ✨ 
*│➯* 𝗘𝗻 𝗴𝗿𝘂𝗽𝗼𝘀: 𝙾𝚆𝙽𝙴𝚁  
*│➯* 𝗢𝘄𝗻𝗲𝗿: 𝙺𝙰𝚁𝙸𝙼.𝙳𝙴𝚂𝙸𝙽𝙶
*│➯* 𝗡𝘂𝗺𝗲𝗿𝗼:+591 68683798
*│➯* 𝗙𝗲𝗰𝗵𝗮: ${date}
*│➯* 𝗟𝗶𝗻𝗱𝗼 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶
*╰─────────────────╯*

*╭─────────────────╮*
*│➯⏤͟͟͞𝙄𝙉𝙁𝙊 𝘿𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊*
*│*
*│➯🕹️𝐍𝐢𝐯𝐞𝐥:* ${level}
*│➯✨𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚:* ${exp}
*│➯🌐𝐑𝐚𝐧𝐠𝐨:* ${role}
*│➯💎𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬:* ${limit}
*│➯💰𝐃𝐲𝐥𝐚𝐧𝐂𝐨𝐢𝐧𝐬:* ${money}
*╰─────────────────╯*

*╭━〔 ⚔️ 𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐅𝐄𝐌 ⚔️ 〕*
*│*
*│➯♠️ .𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒*
*│➯♠️ .𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔*
*│➯♠️ .𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖*
*│➯♠️ .𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎*
*│➯♠️ .𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐*
*│➯♠️ .𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎*
*│➯♠️ .𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬*
*│➯♠️ .𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒*
*│➯♠️ .𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔*
*│➯♠️ .𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖*
*│➯♠️ .𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎*
*│➯♠️ .𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐*
*│➯♠️ .𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎*
*│➯♠️ .𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬*
*│➯♠️ .𝐟𝐞𝐦𝟖𝐯𝐬𝟖*
*│➯♠️ .𝐟𝐞𝐦𝟏𝟔𝐯𝐬𝟏𝟔*
*╰─────────────────╯*

*╭━〔 ⚔️ 𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐌𝐀𝐒𝐂 ⚔️ 〕*
*│*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎*
*│➯♠️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬*
*│➯♠️ .𝐦𝐚𝐬𝐜𝟖𝐯𝐬𝟖*
*│➯♠️ .𝐦𝐚𝐬𝐜𝟏𝟔𝐯𝐬𝟏𝟔*
*╰─────────────────╯*

*╭━〔 🧾 𝐀𝐆𝐄𝐍𝐃𝐀 𝐒𝐄𝐌𝐀𝐍𝐀𝐋 🧾 〕*
*│*
*│➯🧾 .𝐚𝐠𝐞𝐧𝐝𝐚𝐬𝐞𝐦𝐚𝐧𝐚𝐥*
*╰─────────────────╯*

*╭━〔 📱 𝐒𝐄𝐍𝐒𝐈𝐁𝐈𝐋𝐈𝐃𝐀𝐃𝐄𝐒 📱 〕*
*│*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐩𝐡𝐨𝐧𝐞𝟏𝟐𝐩𝐫𝐨𝐦𝐚𝐱*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐬𝐚𝐦𝐬𝐮𝐧𝐠𝐣𝟒*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐬𝐚𝐦𝐬𝐮𝐧𝐠𝐣𝟒*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐬𝐚𝐦𝐬𝐮𝐧𝐠𝐬𝟐𝟑𝐮𝐥𝐭𝐫𝐚*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐫𝐞𝐝𝐦𝐢𝐧𝐨𝐭𝐞𝟏𝟐*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐩𝐡𝐨𝐧𝐞𝐱𝐫*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐩𝐨𝐜𝐨𝐱𝟓𝐩𝐫𝐨* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐭𝐞𝐜𝐧𝐨𝐬𝐩𝐚𝐫𝐤𝟕* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐫𝐞𝐚𝐥𝐦𝐞𝐜𝟏𝟓* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐬𝐚𝐦𝐬𝐮𝐧𝐠𝐚𝟎𝟐𝐜* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐡𝐮𝐚𝐰𝐞𝐢𝐲𝟔* 
*│➯📱.𝐠𝐚𝐥𝐚𝐱𝐲𝐦𝟐𝟑* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐦𝐨𝐭𝐨𝐫𝐨𝐥𝐚𝐞𝟐𝟐*  
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐩𝐨𝐜𝐨𝐱𝟑𝐩𝐫𝐨*
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐫𝐞𝐝𝐦𝐢𝟖𝐚* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐬𝐚𝐦𝐬𝐮𝐧𝐠𝐚𝟑𝟏* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐩𝐡𝐨𝐧𝐞𝟏𝟏𝐩𝐫𝐨* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐧𝐟𝐢𝐧𝐢𝐱𝐡𝐨𝐭𝟏𝟐* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐩𝐡𝐨𝐧𝐞𝟕𝐩𝐥𝐮𝐬* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐫𝐞𝐝𝐦𝐢𝟏𝟎𝐜* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐫𝐞𝐝𝐦𝐢𝐧𝐨𝐭𝐞𝟏𝟏* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐨𝐩𝐩𝐨𝐫𝐞𝐧𝐨𝟓* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐩𝐡𝐨𝐧𝐞𝟏𝟒𝐩𝐫𝐨𝐦𝐚𝐱* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐫𝐞𝐝𝐦𝐢𝐧𝐨𝐭𝐞𝟖* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐧𝐟𝐢𝐧𝐢𝐱𝐡𝐨𝐭𝟑𝟎* 
*│➯📱.𝐬𝐞𝐧𝐬𝐢𝐢𝐩𝐡𝐨𝐧𝐞𝐱𝐬𝐦𝐚𝐱*
*╰─────────────────╯*

(Disponible pronto personajes)

*╭━〔 🔫 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐉𝐄𝐒 𝐅𝐅 🔫 〕*
*│*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐢𝐠𝐧𝐢𝐬*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬𝐮𝐳𝐲*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬𝐨𝐧𝐢𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐨𝐫𝐢𝐨𝐧*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬𝐚𝐧𝐭𝐢𝐧𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐥𝐮𝐧𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐭𝐚𝐭𝐬𝐮𝐲𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐢𝐫𝐢𝐬*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐣𝐛*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐚𝐧𝐢𝐭𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐡𝐨𝐦𝐞𝐫𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐤𝐞𝐧𝐭𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐧𝐚𝐢𝐫𝐢*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐨𝐭𝐡𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐥𝐞𝐨𝐧*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐦𝐨𝐜𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐝𝐢𝐦𝐢𝐭𝐫𝐢*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐭𝐡𝐢𝐯𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐝𝐢-𝐛𝐞𝐞*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐚𝐧𝐝𝐫𝐞𝐰*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐦𝐚𝐫𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐱𝐚𝐲𝐧𝐞*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬𝐤𝐲𝐥𝐞𝐫*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬𝐡𝐢𝐫𝐨𝐮*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐜𝐡𝐫𝐨𝐧𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐝𝐚𝐬𝐡𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐤*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐣𝐚𝐢*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐤𝐞𝐥𝐥𝐲*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐡𝐚𝐲𝐚𝐭𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐥𝐮𝐪𝐮𝐞𝐭𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐜𝐥𝐮*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐰𝐨𝐥𝐟𝐫𝐚𝐡𝐡*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐤𝐚𝐩𝐞𝐥𝐥𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬𝐭𝐞𝐟𝐟𝐢𝐞*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐫𝐚𝐟𝐚𝐞𝐥*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐥𝐚𝐮𝐫𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐦𝐢𝐬𝐡𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐦𝐚𝐱𝐢𝐦*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐤𝐥𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐩𝐚𝐥𝐨𝐦𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐦𝐢𝐠𝐮𝐞𝐥*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐧𝐨𝐭𝐨𝐫𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐣𝐨𝐭𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐧𝐢𝐤𝐢𝐭𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐚𝐥𝐯𝐚𝐫𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬𝐡𝐚𝐧𝐢*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐣𝐨𝐬𝐞𝐩𝐡*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐚𝟏𝟐𝟒*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐰𝐮𝐤𝐨𝐧𝐠*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐚𝐧𝐭𝐨𝐧𝐢𝐨*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐨𝐥𝐢𝐯𝐢𝐚*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐟𝐨𝐫𝐝*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐜𝐚𝐫𝐨𝐥𝐢𝐧𝐞*
*│➯🔫 .𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐚𝐝𝐚𝐧𝐲𝐞𝐯𝐚*
*╰─────────────────╯*

*╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕*
*│*
*│➯🎮 .𝐦𝐚𝐭𝐞𝐬*
*│➯🎮 .𝐩𝐩𝐭*
*│➯🎮 .𝐩𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐩𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐠𝐚𝐲 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐠𝐚𝐲𝟐 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐥𝐞𝐬𝐛𝐢𝐚𝐧𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐩𝐚𝐣𝐞𝐫𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐩𝐚𝐣𝐞𝐫𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐩𝐮𝐭𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐩𝐮𝐭𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐦𝐚𝐧𝐜𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐦𝐚𝐧𝐜𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐫𝐚𝐭𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐧𝐞𝐠𝐫𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐧𝐞𝐠𝐫𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐟𝐞𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐟𝐞𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐬𝐢𝐧𝐩𝐨𝐭𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐬𝐢𝐧𝐭𝐞𝐭𝐚𝐬 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐬𝐢𝐧𝐩𝐢𝐭𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐚𝐝𝐨𝐩𝐭𝐚𝐝𝐚 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐚𝐝𝐨𝐩𝐭𝐚𝐝𝐨 <@𝚝𝚊𝚐>*
*│➯🎮 .𝐥𝐨𝐯𝐞*
*│➯🎮 .𝐥𝐨𝐬𝟏𝟎*
*│➯🎮 .𝐬𝐮𝐢𝐭𝐩𝐯𝐩*
*│➯🎮 .𝐬𝐥𝐨𝐭*
*│➯🎮 .𝐬𝐢𝐦𝐢𝐬𝐢𝐦𝐢*
*│➯🎮 .𝐩𝐫𝐞𝐠𝐮𝐧𝐭𝐚*
*│➯🎮 .𝐜𝐮𝐚𝐧𝐝𝐨*
*│➯🎮 .𝐬𝐡𝐢𝐩𝟓*
*│➯🎮 .𝐚𝐛𝐫𝐚𝐳𝐨*
*│➯🎮 .𝐬𝐡𝐢𝐩𝟐*
*│➯🎮 .𝐟𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚*
*│➯🎮 .𝐯𝐞𝐫𝐝𝐚𝐝*
*│➯🎮 .𝐫𝐞𝐭𝐨*
*│➯🎮 .𝐜𝐚𝐧𝐜𝐢𝐨𝐧*
*│➯🎮 .𝐩𝐢𝐬𝐭𝐚*
*│➯🎮 .𝐫𝐮𝐥𝐞𝐭𝐚*
*│➯🎮 .𝐳𝐨𝐝𝐢𝐚𝐜*
*│➯🎮 .𝐨𝐝𝐢𝐨*
*│➯🎮 .𝐬𝐡𝐢𝐩*
*│➯🎮 .𝐬𝐨𝐫𝐭𝐞𝐨*
*│➯🎮 .𝐦𝐢𝐧𝐨𝐯𝐢𝐚*
*│➯🎮 .𝐦𝐢𝐧𝐨𝐯𝐢𝐨*
*│➯🎮 .𝐤𝐜𝐡𝐞𝐫𝐨*
*│➯🎮 .𝐤𝐜𝐡𝐞𝐫𝐨*
*╰─────────────────╯*

*╭━〔 ⚠️ 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄 ⚠️ 〕*
*│*
*│➯🗺️ .𝐛𝐞𝐫𝐦𝐮𝐝𝐚*
*│➯🗺️ .𝐤𝐚𝐥𝐚𝐡𝐚𝐫𝐢*
*│➯🗺️ .𝐚𝐥𝐩𝐞𝐬*
*│➯🗺️ .𝐩𝐮𝐫𝐠𝐚𝐭𝐨𝐫𝐢𝐨*
*│➯🗺️ .𝐧𝐞𝐱𝐭𝐞𝐫𝐫𝐚*
*╰──────────────────╯*

*╭━〔 🧿 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 🧿 〕*
*│*
*│➯🌐 .𝐩𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚𝐬*
*│➯🌐 .𝐜𝐮𝐞𝐧𝐭𝐚𝐬*
*╰─────────────────╯*

*╭━〔 ⭐ 𝐆𝐑𝐔𝐏𝐎 𝐃𝐄 𝐒𝐎𝐑𝐓𝐄𝐎𝐒 ⭐ 〕*
*│➯⭐ .𝐬𝐨𝐫𝐭𝐞𝐨*
*│➯⭐ .𝐫𝐮𝐥𝐞𝐭𝐚*
*│➯⭐ .𝐝𝐞𝐚𝐭𝐡𝐧𝐨𝐭𝐞*
*╰─────────────────╯*

*╭━〔 ⚙️ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⚙️ 〕*
*│➯🟢 .𝐞𝐧𝐚𝐛𝐥𝐞*
*│➯🔴 .𝐝𝐢𝐬𝐚𝐛𝐥𝐞*
*╰─────────────────╯*

*╭━〔 📥 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 📥 〕*
*│*
*│➯📥 .𝐩𝐥𝐚𝐲*
*│➯📥 .𝐩𝐥𝐚𝐲.𝟏*
*│➯📥 .𝐩𝐥𝐚𝐲.𝟐*
*│➯📥 .𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭*
*│➯📥 .𝐬𝐩𝐨𝐭𝐢𝐟𝐲*
*│➯📥 .𝐬𝐩𝐨𝐭𝐢𝐟𝐲𝐝𝐥*
*│➯📥 .𝐭𝐢𝐤𝐭𝐨𝐤*
*│➯📥 .𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦*
*│➯📥 .𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞*
*│➯📥 .𝐠𝐝𝐫𝐢𝐯𝐞*
*│➯📥 .𝐭𝐰𝐢𝐭𝐭𝐞𝐫*
*│➯📥 .𝐲𝐭𝐦𝐩𝟑*
*│➯📥 .𝐲𝐭𝐦𝐩𝟒*
*│➯📥 .𝐢𝐦𝐚𝐠𝐞𝐧*
*│➯📥 .𝐢𝐚𝐢𝐦𝐚𝐠𝐞𝐧*
*│➯📥 .𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬*
*│➯📥 .𝐢𝐠𝐬𝐭𝐨𝐫𝐲*
*╰─────────────────╯*

*╭━〔 👥 𝐆𝐑𝐔𝐏𝐎𝐒 👥 〕*
*│*
*│➯👥 .𝐤𝐢𝐜𝐤*
*│➯👥 .𝐠𝐫𝐮𝐩𝐨*
*│➯👥 .𝐩𝐫𝐨𝐦𝐨𝐭𝐞*
*│➯👥 .𝐝𝐞𝐦𝐨𝐭𝐞*
*│➯👥 .𝐝𝐞𝐦𝐨𝐭𝐞*
*│➯👥 .𝐥𝐢𝐧𝐤*
*│➯👥 .𝐭𝐨𝐝𝐨𝐬*
*│➯👥 .𝐬𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞*
*│➯👥 .𝐬𝐞𝐭𝐛𝐲𝐞*
*│➯👥 .𝐧𝐨𝐭𝐢𝐟𝐲*
*│➯👥 .𝐟𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬*
*│➯👥 .𝐤𝐢𝐜𝐤𝐟𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬*
*╰─────────────────╯*

*╭━〔 📍𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 📍 〕*
*│*
*│➯📍 .𝐭𝐨𝐢𝐦𝐠*
*│➯📍 .𝐭𝐨𝐦𝐩𝟑*
*│➯📍 .𝐭𝐨𝐩𝐭𝐭*
*│➯📍 .𝐭𝐨𝐯𝐢𝐝𝐞𝐨*
*│➯📍 .𝐭𝐭𝐬*
*╰──────────────────╯*

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*
*│*
*│➯♓ .𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐟𝐚𝐥𝐬𝐨*
*│➯♓ .𝐥𝐨𝐠𝐨𝐬*
*│➯♓ .𝐥𝐨𝐠𝐨𝐜𝐨𝐫𝐚𝐳𝐨𝐧*
*│➯♓ .𝐲𝐭𝐜𝐨𝐦𝐦𝐞𝐧𝐭*
*│➯♓ .𝐡𝐨𝐫𝐧𝐲𝐜𝐚𝐫𝐝*
*│➯♓ .𝐢𝐭𝐬𝐬𝐨𝐬𝐭𝐮𝐩𝐢𝐝*
*│➯♓ .𝐩𝐢𝐱𝐞𝐥𝐚𝐫*
*╰─────────────────╯*

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*│*
*│➯💌 .𝐩𝐢𝐫𝐨𝐩𝐨*
*│➯💌 .𝐜𝐨𝐧𝐬𝐞𝐣𝐨*
*│➯💌 .𝐟𝐫𝐚𝐬𝐞𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚*
*╰──────────────────╯*

*╭━〔 🔍 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 🔍 〕*
*│*
*│➯🔍 .𝐱𝐧𝐱𝐱𝐬𝐞𝐚𝐫𝐜𝐡*
*│➯🔍 .𝐠𝐨𝐨𝐠𝐥𝐞*
*│➯🔍 .𝐥𝐞𝐭𝐫𝐚*
*│➯🔍 .𝐰𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚*
*│➯🔍 .𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡*
*│➯🔍 .𝐩𝐥𝐚𝐲𝐬𝐭𝐨𝐫𝐞*
*│➯🔍 .𝐦𝐞𝐫𝐜𝐚𝐝𝐨𝐥𝐢𝐛𝐫𝐞*
*│➯🔍 .𝐩𝐨𝐫𝐧𝐡𝐮𝐛𝐬𝐞𝐚𝐫𝐜𝐡*
*╰─────────────────╯*

*╭━〔 🍃 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🍃 〕
*│*
*│➯🍃 .𝐜𝐥𝐢𝐦𝐚*
*│➯🍃 .𝐚𝐟𝐤*
*│➯🍃 .𝐨𝐜𝐫*
*│➯🍃 .𝐜𝐚𝐥𝐜*
*│➯🍃 .𝐝𝐞𝐥*
*│➯🍃 .𝐰𝐡𝐚𝐭𝐦𝐮𝐬𝐢𝐜*
*│➯🍃 .𝐪𝐫𝐜𝐨𝐝𝐞*
*│➯🍃 .𝐭𝐫𝐚𝐝𝐮𝐜𝐢𝐫*
*╰──────────────────╯*

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
*│*
*│➯💎 .𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫*
*│➯💎 .𝐫𝐞𝐠𝟏*
*│➯💎 .𝐮𝐧𝐫𝐞𝐠*
*│➯💎 .𝐦𝐢𝐧𝐚𝐫*
*│➯💎 .𝐛𝐮𝐲*
*│➯💎 .𝐰𝐨𝐫𝐤*
*│➯💎 .𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫*
*╰─────────────────╯*

*╭━〔 ☁️ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ☁️ 〕*
*│*
*│➯☁️ .𝐬*
*│➯☁️ .𝐬𝐭𝐢𝐜𝐤𝐞𝐫*
*│➯☁️ .𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱*
*│➯☁️ .𝐚𝐭𝐭𝐩*
*│➯☁️ .𝐪𝐜*
*╰─────────────────╯*

*╭━〔 🌸 𝐑𝐀𝐍𝐃𝐎𝐌 𝐀𝐍𝐈𝐌𝐄 🌸 〕*
*│*
*│➯🌸 .𝐜𝐡𝐢𝐜𝐚*
*│➯🌸 .𝐜𝐡𝐢𝐜𝐨*
*│➯🌸 .𝐜𝐫𝐢𝐬𝐭𝐢𝐚𝐧𝐨𝐫𝐨𝐧𝐚𝐥𝐝𝐨*
*│➯🌸 .𝐦𝐞𝐬𝐬𝐢*
*│➯🌸 .𝐦𝐞𝐦𝐞*
*│➯🌸 .𝐦𝐞𝐦𝐞𝟐*
*│➯🌸 .𝐢𝐭𝐳𝐲*
*│➯🌸 .𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤*
*│➯🌸 .𝐤𝐩𝐨𝐩:𝐞𝐱𝐨:𝐛𝐭𝐬*
*│➯🌸 .𝐥𝐨𝐥𝐢𝐯𝐢𝐝*
*│➯🌸 .𝐥𝐨𝐥𝐢*
*│➯🌸 .𝐧𝐚𝐯𝐢𝐝𝐚𝐝*
*│➯🌸 .𝐩𝐩𝐜𝐨𝐮𝐩𝐥𝐞*
*│➯🌸 .𝐧𝐞𝐤𝐨*
*│➯🌸 .𝐰𝐚𝐢𝐟𝐮*
*│➯🌸 .𝐚𝐤𝐢𝐫𝐚*
*│➯🌸 .𝐚𝐤𝐢𝐲𝐚𝐦𝐚*
*│➯🌸 .𝐚𝐧𝐧𝐚*
*│➯🌸 .𝐚𝐬𝐮𝐧𝐚*
*│➯🌸 .𝐚𝐲𝐮𝐳𝐚𝐰𝐚*
*│➯🌸 .𝐛𝐨𝐫𝐮𝐭𝐨*
*│➯🌸 .𝐜𝐡𝐢𝐡𝐨*
*│➯🌸 .𝐜𝐡𝐢𝐭𝐨𝐠𝐞*
*│➯🌸 .𝐝𝐞𝐢𝐝𝐚𝐫𝐚*
*│➯🌸 .𝐞𝐫𝐳𝐚*
*│➯🌸 .𝐞𝐥𝐚𝐢𝐧𝐚*
*│➯🌸 .𝐞𝐛𝐚*
*│➯🌸 .𝐞𝐦𝐢𝐥𝐢𝐚*
*│➯🌸 .𝐡𝐞𝐬𝐭𝐢𝐚*
*│➯🌸 .𝐡𝐢𝐧𝐚𝐭𝐚*
*│➯🌸 .𝐢𝐧𝐨𝐫𝐢*
*│➯🌸 .𝐢𝐬𝐮𝐳𝐮*
*│➯🌸 .𝐢𝐭𝐚𝐜𝐡𝐢*
*│➯🌸 .𝐢𝐭𝐨𝐫𝐢*
*│➯🌸 .𝐤𝐚𝐠𝐚*
*│➯🌸 .𝐤𝐚𝐠𝐮𝐫𝐚*
*│➯🌸 .𝐤𝐚𝐨𝐫𝐢*
*│➯🌸 .𝐤𝐞𝐧𝐞𝐤𝐢*
*│➯🌸 .𝐤𝐨𝐭𝐨𝐫𝐢*
*│➯🌸 .𝐤𝐮𝐫𝐮𝐦𝐢*
*│➯🌸 .𝐦𝐚𝐝𝐚𝐫𝐚*
*│➯🌸 .𝐦𝐢𝐤𝐚𝐬𝐚*
*│➯🌸 .𝐦𝐢𝐤𝐮*
*│➯🌸 .𝐦𝐢𝐧𝐚𝐭𝐨*
*│➯🌸 .𝐧𝐚𝐫𝐮𝐭𝐨*
*│➯🌸 .𝐧𝐞𝐳𝐮𝐤𝐨*
*│➯🌸 .𝐬𝐚𝐠𝐢𝐫𝐢*
*│➯🌸 .𝐬𝐚𝐬𝐮𝐤𝐚*
*│➯🌸 .𝐬𝐚𝐤𝐮𝐫𝐚*
*│➯🌸 .𝐜𝐨𝐬𝐩𝐥𝐚𝐲*
*╰─────────────────╯*

DYLAN BOT || KARIM.DZN`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://cdn.discordapp.com/attachments/1202339620939898981/1203018213881806938/Menu1.jpg`)).buffer()  
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
handler.command = /^(menú|menu|menuu|allm\?)$/i
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