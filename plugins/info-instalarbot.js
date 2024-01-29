import { generateWAMessageFromContent } from '@whiskeysockets/DokiBot'
let handler  = async (m, { conn }) => {
let texto = `
╭─────────────┈⊷
│ *No seas rata bro , para obtener el bot o añadir alos grupos comunícate con mi creador https://wa.me/59168683798*
╰┬────────────┈⊷` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: '𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 ', body: null, thumbnail: imagen2, sourceUrl: 'https://whatsapp.com/channel/0029VaBpO8M3rZZdwkGFIP33' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.tags = ['main']
handler.command = /^(instalarbot)/i
export default handler
