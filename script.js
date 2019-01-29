const DiscordRPC = require('discord-rpc')
const ClientID = 539726810896793620

DiscordRPC.register(clientId);
const RPC = new DiscordRPC.Client({ transport: 'websocket' });

let interval = null

RPC.on('ready', () => {
  let prevFile = null
  let editingSince = null

  interval = setInterval(() => {
    // Fetch page data
    let [ fileId, edit ] = window.location.pathname.split('/d/').pop().split('/')
    let title = document.querySelector('title').innerText
    let desc = 'Idle'
    if (title.contains('-')) {
      const _title = title.split('-')
      title = _title.pop().trim()
      desc = `${edit === 'edit' ? 'Editing' : 'Reading'} ${_title.join('-').trim()}`
    }

    if (prevFile !== fileId) {
      editingSince = Date.now()
      prevFile = fileId
    }

    // Set RPC
    console.log(title, desc, editingSince)
  }, 5000)
})

rpc.login({ clientId }).catch(console.error);
