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

*╭─────────────────╮*
*│➯* 𝗛𝗼𝗹𝗮👋 ${username} ✨ 
*│➯* 𝗘𝗻 𝗴𝗿𝘂𝗽𝗼𝘀: 𝙾𝚆𝙽𝙴𝚁  
*│➯* 𝗢𝘄𝗻𝗲𝗿: 𝙺𝙰𝚁𝙸𝙼.𝙳𝙴𝚂𝙸𝙽𝙶
*│➯* 𝗡𝘂𝗺𝗲𝗿𝗼:+591 68683798
*│➯* 𝗙𝗲𝗰𝗵𝗮: ${date}
*│➯* 𝗟𝗶𝗻𝗱𝗼 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶
*╰─────────────────╯*

*╭─────────────────╮*
*│➯⏤͟͟͞𝙄𝙉𝙁𝙊 𝘿𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊*
*│*
*│➯🕹️𝐍𝐈𝐕𝐄𝐋:* ${level}
*│➯✨𝐄𝐗𝐏𝐄𝐑𝐈𝐄𝐍𝐂𝐈𝐀:* ${exp}
*│➯🌐𝐑𝐀𝐍𝐆𝐎:* ${role}
*│➯💎𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒:* ${limit}
*│➯💰𝐃𝐘𝐋𝐀𝐍𝐂𝐎𝐈𝐍𝐒:* ${money}
*╰─────────────────╯*

*╭━〔 ⚔️ 𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐅𝐄𝐌 ⚔️ 〕*
*│➯⚔️ ${usedPrefix}feminfinito14*
*│➯⚔️ ${usedPrefix}feminfinito16*
*│➯⚔️ ${usedPrefix}feminfinito18*
*│➯⚔️ ${usedPrefix}feminfinito20*
*│➯⚔️ ${usedPrefix}feminfinito22*
*│➯⚔️ ${usedPrefix}feminfinito00*
*│➯⚔️ ${usedPrefix}feminfinitovs*
*│➯⚔️ ${usedPrefix}femvivido14*
*│➯⚔️ ${usedPrefix}femvivido16*
*│➯⚔️ ${usedPrefix}femvivido18*
*│➯⚔️ ${usedPrefix}femvivido20*
*│➯⚔️ ${usedPrefix}femvivido22*
*│➯⚔️ ${usedPrefix}femvivido00*
*│➯⚔️ ${usedPrefix}femvividovs*
*│➯⚔️ ${usedPrefix}fem8vs8*
*│➯⚔️ ${usedPrefix}fem16vs16*
*╰─────────────────╯*

*╭━〔 ⚔️ 𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐌𝐀𝐒𝐂 ⚔️ 〕*
*│*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝟖𝐯𝐬𝟖*
*│➯⚔️ .𝐦𝐚𝐬𝐜𝟏𝟔𝐯𝐬𝟏𝟔*
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