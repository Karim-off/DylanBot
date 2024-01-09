let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*𝙈𝙚𝙣𝙨𝙖𝙟𝙚:* ${pesan}`
let teks = `┏━┄〔 *${wm}* 〕┄⊱\n┣ 𝘼𝙘𝙩𝙞𝙫𝙚𝙣𝙨𝙚 𝙥𝙡𝙖𝙣𝙩𝙖𝙨 🙊*\n┣\n┣❏ ${oi}\n┣\n┣❏ *𝙻𝙾𝚂 𝙸𝙽𝚅𝙾𝙲𝙾 𝙱𝙾𝚃𝚂:*\n`
for (let mem of participants) {
teks += `┣🦁 @${mem.id.split('@')[0]}\n`}
teks += `┗━ @𝐃𝐲𝐥𝐚𝐧𝐁𝐨𝐭 🦁 \n\n`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|plantas|invocación)$/i
handler.admin = true
handler.group = true
export default handler
