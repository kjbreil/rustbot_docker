// Sample for config.js

// copy to config.js and edit settings as needed

var config = {}

// Enable RCON
config.rconEnabled = 0
config.addr = 'rust-rustbot'
config.port = '28016'
config.pass = 'samplepass'

config.discordEnabled = 0
config.discordAPI = 'discordBotChannelApi'
config.discordID = 'discordBotID'
config.discordRooms = [{
  general: 'general',
  chat: 'chat',
  rcon: 'rcon',
  bot: 'bot',
  log: 'log'
}]

// config.discordRooms = [{chat : "chatdev", rcon : "rcondev", bot : "botdev", general : "test", log : "logdev"}]

// Dont fuck with these unless you know what you are doing

// Dont fuck with these unless you know what you are doing
config.logFiles = [{
  rustbot: 'rustbot',
  chat: 'chat',
  rcon: 'rcon',
  discord: 'discord',
  connect: 'connect',
  websocket: 'websocket',
  rust: 'rust',
  sql: 'sql',
  info: 'info'
}]
config.logFileLocation = './logs/'
config.reDir = ['logs']

config.knex = {
  client: 'pg',
  connection: {
    user: 'rustbot',
    database: 'rustbot',
    port: 5432,
    host: 'db',
    password: 'samplepass'
  },
  debug: false,
  pool: {
    min: 1,
    max: 2
  }
}

config.dbTables = {
  connect: 'connect',
  death: 'death',
  chat: 'chat',
  log: 'rawlog',
  playerlist: 'playerlist',
  playerlistlive: 'playerlistlive',
  steamstats_audit: 'steamstats_audit',
  steamstats_server: 'steamstats_server'
}
config.steamApiKey = 'steamapikey'
config.ownerSteamId = 'ownersapikey'
config.rustAppId = '252490'

module.exports = config
