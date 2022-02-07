const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('B!');

client.once('ready', () => {

    module.exports = {
        name: 'gaysanj',
        aliases: ['gs'],
        category: 'Fun',
        utilisation: '{prefix}gaysanj',
      async execute(client, message, args) { 
    const Discord = require('discord.js')
          const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const gayicon = new Discord.MessageAttachment(encodeURI(`https://api.monkedev.com/canvas/gay?imgUrl=${Member.user.displayAvatarURL({ format: "png" , size: 1024 })}`), "gay.png")
          const alpha = Math.floor(Math.random() * 100) ;
                if (Number(alpha) > 1) sanjesh = "(0/10) ??????????";
                if (Number(alpha) > 9) sanjesh = "(1/10) ??????????";
                if (Number(alpha) > 19) sanjesh = "(2/10) ??????????";
                if (Number(alpha) > 29) sanjesh = "(3/10) ??????????";
                if (Number(alpha) > 39) sanjesh = "(4/10) ??????????";
                if (Number(alpha) > 49) sanjesh = "(5/10) ??????????";
                if (Number(alpha) > 59) sanjesh = "(6/10) ??????????";
                if (Number(alpha) > 69) sanjesh = "(7/10) ??????????";
                if (Number(alpha) > 79) sanjesh = "(8/10) ??????????";
                if (Number(alpha) > 89) sanjesh = "(9/10) ??????????";
                if (Number(alpha) > 99) sanjesh = "(10/10) ??????????";
                const gayembed = new Discord.MessageEmbed()
                 .setAuthor(`Requested by ${message.author.username}`, `https://cdn.discordapp.com/emojis/914253452853538917.png`)
                 .setThumbnail(`https://api.monkedev.com/canvas/gay?imgUrl=${Member.user.displayAvatarURL({ format: "png" , size: 1024 })}`)
                 .setTimestamp()
                 .setColor('RANDOM')   
                 .addField(` ????? ?? ???? ???  **${alpha}%** <a:qer:914468879546347541>??? <a:hehe:876118334662389791>`,`[${sanjesh}](${"https://zil.ink/Sobhan.SRZA"})`)   
    message.channel.send(gayembed).then(message.react('??'))
            }
    }
     
    console.log("(update) security")

    const channel = client.channels.cache.get("915924938702082068");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("(Successfully) BXZ IS RUNBOT!");
    }).catch(e => {

        console.error(e);
    });

    const server = client.guilds.cache.get("899714742619349122")
    client.user.setActivity(`${server.memberCount} All Members`, {type: "WATCHING"})

    function chNickname() {
        const targetguild = client.guilds.cache.get("899714742619349122")
        const server = targetguild.members.cache.get(client.user.id)
        let esm = ['Error','BoT IS Error','Updute BoT IS 3DAY'] 
            let godrat = Math.floor(Math.random() * esm.length)
          server.setNickname(esm[godrat])
      }; setInterval(chNickname, 5000)

    function AliveVoice() {
        const targetguild = client.guilds.cache.get("899714742619349122")
        const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        client.user.setActivity(`?? total mic | ${count}`, { type: "WATCHING"})
    }; setInterval(AliveVoice, 5000)

    function YousamPower() {
        let hungry = ["?help" , "BxZ BoT"]
        let Power = Math.floor(Math.random() * hungry.length);
        client.user.setActivity(hungry[Power], {type: "WATCHING"});
      }; setInterval(YousamPower, 5000)

});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split("899714742619349122")
    const command = messageArray[0]
    if(command == '!salam'){
        message.reply('salam')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!owner'){
        message.reply('bxzmstr')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!staffs'){
        message.reply('behdadg.gbg - arya - radin - mahan.mpr - mohsen.mg - equated - acraft - alonegamer')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!emoji'){
        message.reply(':flushed: ')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!avatarserver'){
        message.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3KAXSAGrL_ImsPa7gVHdoVjIDpe2EezZ2iCgl6bkhIP9B4-2EsUAeVqsEsoB3sxKji0&usqp=CAU')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '!bestfriend'){
        message.reply('alone - Equated - behdadgbg - mahanmpr - radin ')
    }
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == '?help'){
        message.reply('!bestfriend   !avatarserver   !emoji    !staffs     !salam      !owner')
    }
});

client.on('guildCreate', guild =>{
  const sowner = guild.owner.user;
  sowner.send('salam')
});

client.on('guildCreate', guild =>{
  const sowner = guild.owner.user;
  
          const newEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription('salam')
  sowner.send(newEmbed)
});

const channelIds = [
    '899714742619349122' // ba click rast kardan roie channel moshakhas id onjaro bardarid va inja bezarid    
];
const addReactions = (message) => {
    setTimeout(() => {
        message.react('??');
        message.react(':computer: ');
        message.react(':b: ');
    }, 750);
};
client.on('message', (message) => {
    if (channelIds.includes(message.channel.id)) {
        addReactions(message);
    }
});

const { Client , Message, User, MessageEmbed} = require('discord.js');
module.exports = {
    name : "avatar",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client , message ,args) =>{
        const member = message.mentions.members.first();
    message.channel.send(
        new  MessageEmbed()
            .setTitle(`${member.user.tag} ??????`)
            .setImage(member.user.displayAvatarURL({dynamic : true, size : 512}))
            .setColor('#a50002')
            .setFooter(
                `${message.author.tag} ?? ????? ??? ???? `,
                message.author.displayAvatarURL({ dynamic: true })
              )
            .setTimestamp()

        )

    }}

    
client.login("OTM5ODM3NDI3NDE2MTk5MjI4.Yf-p0A.0I1xiPkqBKa4ZvSE9sTBC9s0-vE");