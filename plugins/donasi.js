let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • 
│ • 
╰────

╭─「 Donasi • Non Pulsa 」
│ • Bot Gratis :)
│ • 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
