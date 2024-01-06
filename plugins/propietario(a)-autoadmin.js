let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw '𝙔𝙖 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙢𝙞 𝙘𝙧𝙚𝙖𝙙𝙤𝙧🫡'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.|atad|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
