import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— 𝐃𝐘𝐋𝐀𝐍-𝐁𝐎𝐓 —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ 𝙃𝙊𝙇𝘼, ${taguser}
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║🤴»𝐎𝐰𝐧𝐞𝐫: wa.me/59176181985
║🫂»𝐂𝐫𝐞𝐚𝐝𝐨𝐫:𝐾𝑎𝑟𝑖𝑚
║🛎»𝐈𝐠:@usxr._.karim
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ 𝙵𝙴𝙲𝙷𝙰: ${date}
║➤ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
║➤ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚁𝙴𝙶𝚂: ${rtotalreg}
║➤ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: ${rtotal}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🎖 » 𝙽𝚒𝚟𝚎𝚕 : ${level}
┣💎 » 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 : ${limit}
┣🦁 » 𝙳𝚢𝚕𝚊𝚗𝙲𝚘𝚒𝚗𝚜 : ${money}
┣🪙 » 𝚃𝚘𝚔𝚎𝚗𝚜 : ${joincount}
┣🕹 » 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 : ${exp}
┣⚜ » 𝚁𝚊𝚗𝚐𝚘 : ${role}
┗━━━━━━━━━━━━━━━━┛

┏━━━━𝐉𝐔𝐄𝐆𝐎𝐒 ⛅━━━━┓ 
┣🎮 ${usedPrefix}mates
┣🎮 ${usedPrefix}ppt <papel / tijera /piedra>
┣🎮 ${usedPrefix}prostituto <nombre / @tag>
┣🎮 ${usedPrefix}prostituta <nombre / @tag>
┣🎮 ${usedPrefix}gay2 <nombre / @tag>
┣🎮 ${usedPrefix}lesbiana <nombre / @tag>
┣🎮 ${usedPrefix}pajero <nombre / @tag>
┣🎮 ${usedPrefix}pajera <nombre / @tag>
┣🎮 ${usedPrefix}puto <nombre / @tag>
┣🎮 ${usedPrefix}puta <nombre / @tag>
┣🎮 ${usedPrefix}manco <nombre / @tag>
┣🎮 ${usedPrefix}manca <nombre / @tag>
┣🎮 ${usedPrefix}rata <nombre / @tag>
┣🎮 ${usedPrefix}love <nombre / @tag>
┣🎮 ${usedPrefix}doxear <nombre / @tag>
┣🎮 ${usedPrefix}pregunta <texto>
┣🎮 ${usedPrefix}suitpvp <@tag>
┣🎮 ${usedPrefix}slot <apuesta>
┣🎮 ${usedPrefix}ttt <nombre sala>
┣🎮 ${usedPrefix}delttt
┣🎮 ${usedPrefix}simi <texto>
┣🎮 ${usedPrefix}top <texto>
┣🎮 ${usedPrefix}topotakus
┣🎮 ${usedPrefix}top10gays
┣🎮 ${usedPrefix}toplind@s
┣🎮 ${usedPrefix}topput@s
┣🎮 ${usedPrefix}toppajer@s
┣🎮 ${usedPrefix}topotakus
┣🎮 ${usedPrefix}topintegrantes
┣🎮 ${usedPrefix}toplagrasa
┣🎮 ${usedPrefix}toppanafrescos
┣🎮 ${usedPrefix}topshiposters
┣🎮 ${usedPrefix}toppajeros
┣🎮 ${usedPrefix}toplind@s
┣🎮 ${usedPrefix}topfamosos
┣🎮 ${usedPrefix}topsoltero
┣🎮 ${usedPrefix}topparejas
┣🎮 ${usedPrefix}formarpareja
┣🎮 ${usedPrefix}verdad
┣🎮 ${usedPrefix}reto
┣🎮 ${usedPrefix}cancion
┣🎮 ${usedPrefix}pista
┣🎮 ${usedPrefix}ruleta
┣🎮 ${usedPrefix}zodiac
┣🎮 ${usedPrefix}odio
┣🎮 ${usedPrefix}ship
┣🎮 ${usedPrefix}sorteo
┣🎮 ${usedPrefix}minovi@
┗━━━━━━━━━━━━━━━━━┛

┏━𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑━┓ 
┣🟢 ${usedPrefix}enable
┣🔴 ${usedPrefix}disable
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒━━━━┓ 
┣📥 ${usedPrefix}play <texto>
┣📥 ${usedPrefix}play.1 <texto>
┣📥 ${usedPrefix}play.2 <texto>
┣📥 ${usedPrefix}playdoc <texto>
┣📥 ${usedPrefix}playlist <texto>
┣📥 ${usedPrefix}playlist2 <texto>
┣📥 ${usedPrefix}spotify <texto>
┣📥 ${usedPrefix}tiktok <enlace / link / url>
┣📥 ${usedPrefix}instagram <enlace / link / url>
┣📥 ${usedPrefix}mediafire <enlace / link / url>
┣📥 ${usedPrefix}instagram <enlace / link / url>
┣📥 ${usedPrefix}gitclone <enlace / link / url>
┣📥 ${usedPrefix}gdrive <enlace / link / url>
┣📥 ${usedPrefix}xnxxdl <enlace / link / url>
┣📥 ${usedPrefix}xvideosdl <enlace / link / url>
┣📥 ${usedPrefix}twitter <enlace / link / url>
┣📥 ${usedPrefix}fb <enlace / link / url>
┣📥 ${usedPrefix}fb2 <enlace / link / url>
┣📥 ${usedPrefix}fb3 <enlace / link / url>
┣📥 ${usedPrefix}fb4 <enlace / link / url>
┣📥 ${usedPrefix}fb5 <enlace / link / url>
┣📥 ${usedPrefix}ytmp3 <enlace / link / url>
┣📥 ${usedPrefix}ytmp4 <enlace / link / url>
┣📥 ${usedPrefix}ytmp3doc <enlace / link / url>
┣📥 ${usedPrefix}ytmp4doc <enlace / link / url>
┣📥 ${usedPrefix}stickerpack <enlace / link / url>
┣📥 ${usedPrefix}stickerly <texto>
┣📥 ${usedPrefix}ringtone <texto>
┣📥 ${usedPrefix}soundcloud <texto>
┣📥 ${usedPrefix}imagen <texto>
┣📥 ${usedPrefix}pinteret <texto>
┣📥 ${usedPrefix}wallpaper <texto>
┣📥 ${usedPrefix}wallpaper2 <texto>
┣📥 ${usedPrefix}pptiktok <nombre de usuario>
┣📥 ${usedPrefix}igstalk <nombre de usuario>
┣📥 ${usedPrefix}igstory <nombre de usuario>
┣📥 ${usedPrefix}tiktokstalk *<username>*
┗━━━━━━━━━━━━━━━┛

┏━━━━𝐆𝐑𝐔𝐏𝐎𝐒 ⛅━━━┓ 
┣💌 ${usedPrefix}add <numero>
┣💌 ${usedPrefix}kick <@tag>
┣💌 ${usedPrefix}grupo <abrir / cerrar>
┣💌 ${usedPrefix}grouptime <opcion> <tiempo>
┣💌 ${usedPrefix}promote <@tag>
┣💌 ${usedPrefix}demote <@tag>
┣💌 admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣💌 ${usedPrefix}demote <@tag>
┣💌 ${usedPrefix}infogroup
┣💌 ${usedPrefix}resetlink
┣💌 ${usedPrefix}link
┣💌 ${usedPrefix}setname <texto>
┣💌 ${usedPrefix}setdesc <texto>
┣💌 ${usedPrefix}invocar <texto>
┣💌 ${usedPrefix}setwelcome <texto>
┣💌 ${usedPrefix}setbye <texto>
┣💌 ${usedPrefix}hidetag <texto>
┣💌 ${usedPrefix}warn <@tag>
┣💌 ${usedPrefix}unwarn <@tag>
┣💌 ${usedPrefix}listwarn
┣💌 ${usedPrefix}fantasmas
┣💌 ${usedPrefix}destraba
┣💌 ${usedPrefix}setpp <imagen>
┗━━━━━━━━━━━━━━━━━┛

┏━━━𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒━━━┓ 
┣🎭 ${usedPrefix}robar texto
┣🎭 ${usedPrefix}wm texto
┣🎭 ${usedPrefix}toimg <sticker>
┣🎭 ${usedPrefix}tomp3 <video>
┣🎭 ${usedPrefix}tomp3 <nota de voz>
┣🎭 ${usedPrefix}toptt <video / audio>
┣🎭 ${usedPrefix}tovideo <sticker>
┣🎭 ${usedPrefix}tourl <video / imagen / audio>
┣🎭 ${usedPrefix}tts es <texto>
┗━━━━━━━━━━━━━━━━━━┛

┏━━𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒━━┓ 
┣🖋️ ${usedPrefix}mensajefalso <nombre|mensaje>
┣🖋️ ${usedPrefix}phmaker <opcion> <imagen>
┣🖋️ ${usedPrefix}logos <efecto> <texto>
┣🖋️ ${usedPrefix}logochristmas <texto>
┣🖋️ ${usedPrefix}logocorazon <texto>
┣🖋️ ${usedPrefix}ytcomment <texto>
┣🖋️ ${usedPrefix}hornycard <@tag>
┣🖋️ ${usedPrefix}simpcard <@tag>
┣🖋️ ${usedPrefix}lolice <@tag>
┣🖋️ ${usedPrefix}itssostupid
┣🖋️ ${usedPrefix}pixelar
┣🖋️ ${usedPrefix}blur
┗━━━━━━━━━━━━━━━━━━┛

┏━━𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒━━┓ 
┣🥀 ${usedPrefix}piropo
┣🥀 ${usedPrefix}consejo
┣🥀 ${usedPrefix}fraseromantica
┗━━━━━━━━━━━━━━━━━━┛

┏━━𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒━━━━┓ 
┣🔍 ${usedPrefix}stickersearch <texto>
┣🔍 ${usedPrefix}stickersearch2 <texto>
┣🔍 ${usedPrefix}xnxxsearch <texto>
┣🔍 ${usedPrefix}animeinfo <texto>
┣🔍 ${usedPrefix}google <texto>
┣🔍 ${usedPrefix}letra <texto>
┣🔍 ${usedPrefix}wikipedia <texto>
┣🔍 ${usedPrefix}ytsearch <texto>
┣🔍 ${usedPrefix}apkdone <texto>
┣🔍 ${usedPrefix}apkgoogle <texto>
┣🔍 ${usedPrefix}apkmody <texto>
┣🔍 ${usedPrefix}uapkpro <texto>
┣🔍 ${usedPrefix}playstore <texto>
┗━━━━━━━━━━━━━━━━┛

┏━━𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒━━━┓ 
┣🛠️ ${usedPrefix}spamwa <numero|texto|cantidad>
┣🛠️ ${usedPrefix}tamaño <cantidad> <imagen / video>
┣🛠️ ${usedPrefix}clima <país> <ciudad>
┣🛠️ ${usedPrefix}encuesta <texto1|texto2...>
┣🛠️ ${usedPrefix}afk <motivo>
┣🛠️ ${usedPrefix}ocr <responde a imagen>
┣🛠️ ${usedPrefix}acortar <enlace / link / url>
┣🛠️ ${usedPrefix}calc <operacion math>
┣🛠️ ${usedPrefix}del <mensaje>
┣🛠️ ${usedPrefix}whatmusic <audio>
┣🛠️ ${usedPrefix}readqr <imagen (QR)>
┣🛠️ ${usedPrefix}qrcode <texto>
┣🛠️ ${usedPrefix}readmore <texto1| texto2>
┣🛠️ ${usedPrefix}styletext <texto>
┣🛠️ ${usedPrefix}traducir <texto>
┣🛠️ ${usedPrefix}zoom <texto>
┣🛠️ ${usedPrefix}nowa <numero>
┣🛠️ ${usedPrefix}horario
┗━━━━━━━━━━━━━━━━━┛

┏━━━━𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒━━━━━┓ 
┣🧾 ${usedPrefix}verificar
┣🧾 ${usedPrefix}unreg *<numero de serie>
┣🧾 ${usedPrefix}claim
┣🧾 ${usedPrefix}lb
┣🧾 ${usedPrefix}perfil
┣🧾 ${usedPrefix}minar
┣🧾 ${usedPrefix}buy
┣🧾 ${usedPrefix}balance
┣🧾 ${usedPrefix}myns
┣🧾 ${usedPrefix}work
┣🧾 ${usedPrefix}buyall
┣🧾 ${usedPrefix}transfer *<tipo> <cantidad> <@tag>
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒━━━━━━┓ 
┣🌟 ${usedPrefix}sticker <responder a imagen o video>
┣🌟 ${usedPrefix}sticker <enlace / link / url>
┣🌟 ${usedPrefix}s <responder a imagen o video>
┣🌟 ${usedPrefix}s <enlace / link / url>
┣🌟 ${usedPrefix}sfull <imagen o video>
┣🌟 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
┣🌟 ${usedPrefix}scircle <imagen>
┣🌟 ${usedPrefix}sremovebg <imagen>
┣🌟 ${usedPrefix}semoji <tipo> <emoji>
┣🌟 ${usedPrefix}attp <texto>
┣🌟 ${usedPrefix}attp2 <texto>
┣🌟 ${usedPrefix}attp3 <texto>
┣🌟 ${usedPrefix}ttp <texto>
┣🌟 ${usedPrefix}ttp2 <texto>
┣🌟 ${usedPrefix}ttp3 <texto>
┣🌟 ${usedPrefix}ttp4 <texto>
┣🌟 ${usedPrefix}ttp5 <texto>
┣🌟 ${usedPrefix}pat <@tag>
┣🌟 ${usedPrefix}slap <@tag>
┣🌟 ${usedPrefix}kiss <@tag>
┣🌟 ${usedPrefix}dado
┣🌟 ${usedPrefix}wm *<packname> <author>
┣🌟 ${usedPrefix}stickermarker *<efecto> <imagen>
┣🌟 ${usedPrefix}stickerfilter *<efecto> <imagen>
┣🌟 ${usedPrefix}palmaditas | pat @tag
┣🌟 ${usedPrefix}bofetada | slap @tag
┣🌟 ${usedPrefix}golpear @tag
┣🌟 ${usedPrefix}besar | kiss @tag
┣🌟 ${usedPrefix}alimentar | food @tag
┗━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}