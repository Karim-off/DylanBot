import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
let url = pies[Math.floor(Math.random() * pies.length)]
conn.sendFile(m.chat, url, 'error.jpg', `🥵 ♥ PENE ♥  🥵`, m)
//conn.sendButton(m.chat, `🥵 ♥ PENE ♥  🥵`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['pene']
handler.tags = ['internet']
handler.command = /^(pene)$/
handler.exp = 50
handler.level = 5
export default handler


global.pene = [
"https://cdn.discordapp.com/attachments/1202339620939898981/1202343418517532692/Fl7tkXqXwAATJOb.jpg?ex=65cd1c91&is=65baa791&hm=1a94122ef24d27b36610fc0b6fa44d24bfc4a0b757d57edf46a7b3d0162672a8&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114062889010/FlQrb0kXgAA3vFX.jpg?ex=65cd1d37&is=65baa837&hm=a6302f691c4a69a0e836c51f63f54a7c854a9a99e0fb5363e577c27565d6040a&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114323202068/FmjrhSSXwAAgCdG.jpg?ex=65cd1d37&is=65baa837&hm=a7156e82cf86d7258bdee06beafcad3c6d53fb93eae740b30005d1c89686329d&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114587181186/FnHfoXIX0AElx8c.jpg?ex=65cd1d37&is=65baa837&hm=5e02858500c561614f4594e7e5fd33881c1805567feb82e968266d53b36aad69&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344114864279635/images.jpg?ex=65cd1d37&is=65baa837&hm=2a18509056966fe04302f0257589532779192590693e8b37d1f2fea03886eedf&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344115245944912/tumblr_ocde81E6vz1ufxn07o1_1280.jpg?ex=65cd1d37&is=65baa837&hm=23706a3cac7fe093110529b88bf6da045d1f607079b891150b7e7aa767088322&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344115539542016/mega_verga_38.jpg?ex=65cd1d37&is=65baa837&hm=a0ece071caaf98b0371ba3dca2e66fe41a9e83f939a7e0071dbbab9a2ebb7681&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202344905339306034/images_3.jpg?ex=65cd1df3&is=65baa8f3&hm=bbcf25de75858120cb9ffb8c8093b05e0679e432709eca3e10442e911b04aa67&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378033455184/images_5.jpg?ex=65cd1e64&is=65baa964&hm=21bc678407b7d8a749707b7a7698823045c2619014a830fca9a880ba9501aa15&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378331234304/images_6.jpg?ex=65cd1e64&is=65baa964&hm=8228387f292104a0cc2cae6925302f3b23e7ca939b7692acfdac847a9d9aaa06&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378629042277/images_7.jpg?ex=65cd1e64&is=65baa964&hm=b653d6b424efb57667e56e74754540a947bf7bb1a440f0d767322cbb82246933&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345378909786203/images_8.jpg?ex=65cd1e64&is=65baa964&hm=6a44f8a4d5d2e8793260aa4dd048396b08ebd35a6595c07d24b2da4c99ebac41&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345379178487838/images_9.jpg?ex=65cd1e64&is=65baa964&hm=888b42ca6e69699277708c63107c5af419c5480ff167966f7150dee1e228a1d6&",
"https://cdn.discordapp.com/attachments/1202339620939898981/1202345379413360660/images_10.jpg?ex=65cd1e64&is=65baa964&hm=6728a556680731eec346ffaf7f7910ad35084a81f39818ad3c74124e13cc957b&",
"",
"",
]