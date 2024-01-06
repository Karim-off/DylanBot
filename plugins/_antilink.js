let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝘚𝘢𝘭𝘷𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭 𝘥𝘦 𝘢𝘳𝘳𝘪𝘣𝘢 , 𝘦𝘳𝘦𝘴 𝘢𝘥𝘮𝘪𝘯 𝘯𝘰 𝘵𝘦 𝘷𝘰𝘺 𝘢 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 👻*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendMessage(m.chat, {text: `*「 LINK DETECTADO 」*\n\n${user} 🤨 𝘙𝘰𝘮𝘱𝘪𝘴𝘵𝘦 𝘭𝘢𝘴 𝘳𝘦𝘨𝘭𝘢𝘴 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 𝘴𝘦𝘳𝘢𝘴 𝘦𝘹𝘵𝘦𝘳𝘮𝘪𝘯𝘢𝘥𝘰.... 👻`, mentions: [m.sender]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (!isBotAdmin) return m.reply('*𝘛𝘦 𝘴𝘢𝘭𝘷𝘢𝘴𝘵𝘦 𝘨𝘪𝘭, 𝘯𝘰 𝘴𝘰𝘺 𝘢𝘥𝘮𝘪𝘯 𝘯𝘰 𝘵𝘦 𝘱𝘶𝘦𝘥𝘰 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳*')  
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply('*𝘌𝘭 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘯𝘰 𝘵𝘪𝘦𝘯𝘦 𝘢𝘤𝘵𝘪𝘷𝘰 𝘦𝘭 (𝘦𝘯𝘢𝘣𝘭𝘦 𝘰 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵) 𝘵𝘦 𝘴𝘢𝘭𝘷𝘢𝘴𝘵𝘦..*')
}
return !0
}
