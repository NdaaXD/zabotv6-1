function handler(m) {
  this.sendContact(m.chat, [`6288220118685`, 'Ndaa'], m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
