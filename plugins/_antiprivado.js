const comandos = /piedra|papel|tijera|estado|verificar|creadora|bottemporal|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|registrar|deletesesion|jadibot/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
mensaje = `Hola *@${m.sender.split`@`[0]}*, 𝙀𝙨𝙩𝙖 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩 𝙚𝙡 𝙥𝙧𝙞𝙫𝙖𝙙𝙤\n\n🚫𝙉𝙊 𝙐𝙎𝘼𝙍 𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀𝙇 𝘽𝙊𝙏 𝘼𝙇 𝙋𝙑🚫\n\n𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙙𝙚𝙡 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝙚𝙡 𝙗𝙤𝙩\n${nn}\n\n⚠️ \`\`\`ADVERTENCIA 1/3\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] })  
  
} else if (user.counterPrivate === 1) {
let grupos = [ nn, nnn, nnnt, nnntt, nnnttt ].getRandom()
mensaje = `*𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 🤨 𝙮𝙖 𝙦𝙪𝙚 𝙙𝙞𝙟𝙚 𝙣𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 𝙖𝙡 𝙥𝙧𝙞𝙫𝙖𝙙𝙤🫤*\n\n*𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙖𝙦𝙪𝙞👇*\n${grupos}\n𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 🤨‼️\n⚠️ \`\`\`ADVERTENCIA 2/3\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
} else if (user.counterPrivate === 2) {
mensaje = `*@${m.sender.split`@`[0]} 🤨, 𝙉𝙊 𝙀𝙉𝙏𝙄𝙀𝙉𝘿𝙀 𝙌𝙐𝙀 𝙍𝙀𝙋𝙄𝙏𝙀 3 𝙑𝙀𝘾𝙀𝙎 𝙉𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊.*\n\n⚠️ \`\`\`ADVERTENCIA 3/3 \`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}

