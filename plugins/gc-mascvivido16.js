let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝘓𝘐𝘚𝘛𝘈 𝘔𝘈𝘚𝘊❤️‍🔥•: ${pesan}`
let teks = `╭┈┈ ๑👻๑ •• ${oi} ๑👻๑ ••:\n`
teks += `ㅤ
│
│         🐻‍❄️ 𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 🐻‍❄️
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│
│      ෆ 𝘔𝘰𝘥𝘰: vivido
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⏱️ 16 🇵🇪 ⌇ 17 🇧🇴 ⌇ 18 🇦🇷      
│
│ㅤㅤʚ 𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙴𝚂❄️:
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼•
│   ㅤㅤ
│ㅤㅤʚ 𝚂𝚄𝙿𝙻𝙴𝙽𝚃𝙴𝚂❄️:
│ㅤ🐼•
│ㅤ🐼•
│
│  ⊹ ִֶָ𝙳𝙾𝙽𝙰𝙳𝙾𝚁 𝙳𝙴 𝚂𝙰𝙻𝙰: 
│ㅤ
│. 🐼•
╰───────────────๑ •`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsmascvivido16 <mesaje>','mascvivido16 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsmascvivido16|mascvivido16)$/i
handler.admin = true
handler.group = true
export default handler