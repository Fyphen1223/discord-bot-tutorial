const discord = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder, InteractionType, MessageAttachment, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ContextMenuCommandBuilder, ApplicationCommandType, ChannelType } = require('discord.js');
const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.DirectMessageReactions,
        discord.GatewayIntentBits.DirectMessageTyping,
        discord.GatewayIntentBits.DirectMessages,
        discord.GatewayIntentBits.GuildBans,
        discord.GatewayIntentBits.GuildEmojisAndStickers,
        discord.GatewayIntentBits.GuildIntegrations,
        discord.GatewayIntentBits.GuildInvites,
        discord.GatewayIntentBits.GuildMembers,
        discord.GatewayIntentBits.GuildMessageReactions,
        discord.GatewayIntentBits.GuildMessageTyping,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.GuildPresences,
        discord.GatewayIntentBits.GuildScheduledEvents,
        discord.GatewayIntentBits.GuildVoiceStates,
        discord.GatewayIntentBits.GuildWebhooks,
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.MessageContent
    ], partials: [
        discord.Partials.Channel,
        discord.Partials.GuildMember,
        discord.Partials.GuildScheduledEvent,
        discord.Partials.Message,
        discord.Partials.Reaction,
        discord.Partials.ThreadMember,
        discord.Partials.User
    ]
});

const config = require('./config.json');

client.on('messageCreate'. async msg => {
  if(msg.author.bot) {return};
  if(msg.content === "hello") {
    msg.reply('Hello!');
  }
});

// ! These process are system process!!!
process.on('uncaughtException', (err) => {
    console.log(`\x1b[41mError! Error Status is \x1b[49m:${err.stack}`);
});

client.login(config.token);
