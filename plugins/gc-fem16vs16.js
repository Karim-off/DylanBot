let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝘓𝘐𝘚𝘛𝘈 16 VS 16❤️‍🔥•: ${pesan}`
let teks = `╭┈┈ ๑👻๑ •• ${oi} ๑👻๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}❤️‍🔥`}
teks += `ㅤ
│
│         🐻‍❄️ 𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 🐻‍❄️
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│
│      ෆ 𝘔𝘰𝘥𝘰: 16 VS 16
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⏱️  🇵🇪 ⌇  🇧🇴 ⌇  🇦🇷      
│
│ㅤㅤʚ 𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙰𝚂❄️:
│
│   𝙴𝚀𝚄𝙸𝙿𝙾 𝟷
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼•
│   𝙴𝚀𝚄𝙸𝙿𝙾 𝟸
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼•
│   𝙴𝚀𝚄𝙸𝙿𝙾 𝟹
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼•
│   𝙴𝚀𝚄𝙸𝙿𝙾 𝟺
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼•
│   ㅤㅤ
│ㅤㅤʚ 𝚂𝚄𝙿𝙻𝙴𝙽𝚃𝙴𝚂❄️:
│ㅤ🐼•
│ㅤ🐼•
│
│   ⊹ ִֶָ𝙳𝙾𝙽𝙰𝙳𝙾𝚁𝙰 𝙳𝙴 𝚂𝙰𝙻𝙰: 
│ㅤ
│. 🐼•
╰───────────────๑ •`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsfem16vs16 <mesaje>','fem16vs16 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsfem16vs16|fem16vs16)$/i
handler.admin = true
handler.group = true
export default handler