let handler = async (m, { conn }) => {
let vn = './Plugins/Audios/gay2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://cdn.discordapp.com/attachments/1202339620939898981/1203742652533837835/New_Project_319_D30B0C9.png'),
}), 'error.png', '*🏳️‍🌈 𝙼𝙸𝚁𝙴𝙽 𝙰 𝙴𝚂𝚃𝙴 𝙺𝙰𝙱𝚁𝙾 🏳️‍🌈*\n\n*🏳️‍🌈LOOK AT THIS GAY🏳️‍🌈*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i
handler.register = true
export default handler