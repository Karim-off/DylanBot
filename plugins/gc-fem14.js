let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐿𝐼𝑆𝑇𝐴 𝐹𝐸𝑀🐻‍❄️: ${pesan}`
let teks = `╭┈┈ ๑❀๑ •• ${oi} ๑❀๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}🐻‍❄️`}ㅤ
│
│         🐻‍❄️ 𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 🐻‍❄️
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│
│      ෆ 𝘔𝘰𝘥𝘰: 500 HP
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⏱️ 14 🇵🇪 ⌇ 15 🇧🇴 ⌇ 16 🇦🇷      
│
│ㅤㅤʚ 𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙰𝚂❄️:
│ㅤ🐻‍❄️• 
│ㅤ🐻‍❄️• 
│ㅤ🐻‍❄️• 
│ㅤ🐻‍❄️•
│   ㅤㅤ
│ㅤㅤʚ 𝚂𝚄𝙿𝙻𝙴𝙽𝚃𝙴𝚂❄️:
│ㅤ🐻‍❄️•
│ㅤ🐻‍❄️•
│
│  ⊹ ִֶָ𝙳𝙾𝙽𝙰𝙳𝙾𝚁𝙰 𝙳𝙴 𝚂𝙰𝙻𝙰: 
│ㅤ
│. 🐻‍❄️•
╰───────────────๑❀๑ •`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsinfinito14 <mesaje>','feminfinito14 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsinfinito14|feminfinito14)$/i
handler.admin = true
handler.group = true
export default handler