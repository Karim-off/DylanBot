import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pene.json`)).data  
let ronaldo = await pene[Math.floor(pene.length * Math.random())]
conn.sendFile(m.chat, pene, 'error.jpg', `*Siiiuuuuuu*`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `${usedPrefix + command}`]], m)}
handler.help = ['pene', 'Pene']
handler.tags = ['internet']
handler.command = /^(pene|Pene)$/i
handler.register = true
export default handler