import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
let url = pene[Math.floor(Math.random() * pene.length)]
conn.sendFile(m.chat, url, 'error.jpg', `🥵 PENE 🥵`, m)
//conn.sendButton(m.chat, `🥵  PENE   🥵`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['pene']
handler.tags = ['internet']
handler.command = /^(pene)$/
handler.exp = 50
handler.level = 1
export default handler


global.pene = [
"https://cdn.discordapp.com/attachments/1202339620939898981/1202343418517532692/Fl7tkXqXwAATJOb.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114062889010/FlQrb0kXgAA3vFX.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114323202068/FmjrhSSXwAAgCdG.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114587181186/FnHfoXIX0AElx8c.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114864279635/images.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344115245944912/tumblr_ocde81E6vz1ufxn07o1_1280.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344115539542016/mega_verga_38.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344905339306034/images_3.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378033455184/images_5.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378331234304/images_6.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378629042277/images_7.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378909786203/images_8.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345379178487838/images_9.jpg",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345379413360660/images_10.jpg",
"",
"",
]