const Discord = require("discord.js")
const client = new Discord.Client({disableMentions: "everyone"});

client.on("ready", () => {
  console.log('code worked xd')
})

client.login("PUT TOKEN HERE")

client.on('message', message => {
    if (message.content.toLowerCase().startsWith('susbot' + 'say')) {
      message.delete()
        if (message.author.bot) return;
        const SayMessage = message.content.slice(9).trim();
        if (!SayMessage) return message.channel.send('Ayo i cant say nothing')
        message.channel.send("" + SayMessage + "")
        
    }
});

client.on('message', message =>{
if (message.content.toLowerCase().startsWith('susbotping')) {
  
  // It sends the user "Pinging"
        message.channel.send("Pinging...").then(m =>{
          
            var ping = m.createdTimestamp - message.createdTimestamp;

          // Basic embed
            var embed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${ping} nice ethernet bro`)
            .setColor("RANDOM")
            
            // Then It Edits the message with the ping variable embed that you created
            m.edit(embed)
        });
    }
})

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('**ad** raid shadow legends free on mobile and also in gaming toaster')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
	)
	.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg')
	.setTimestamp()
	
  client.on('message', message =>{
    if (message.content.toLowerCase().startsWith('susbothamburger')) {
      message.channel.send(exampleEmbed);
    }
  }
  )

const friesEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('**ad** raid shadow legends free on mobile and also in gaming toaster')
  .setImage('https://www.kitchen-arena.com.my/media/blog/Copycat-McDonalds-French-Fries-.jpg')
  .setTimestamp()

  client.on('message', message =>{
    if (message.content.toLowerCase().startsWith('susbotfries')) {
      message.channel.send(friesEmbed);
    }
  }
  )


client.on('message', message => {
  if (message.content.toLowerCase() ==='susbotsusrate') {
    var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s susrate is ${rating}%`);
 }
});


client.on('message', message => {
 if (message.content.toLowerCase() ==='susbotcrewrate') {
   var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s crewrate is ${rating}%`);
 }
});

client.on('message', message => {
  if (message.content.toLowerCase().startsWith('susbotvbux')) {
    var mc = Math.floor(Math.random() * 10) + 1;
    var vbux = Math.floor(Math.random() * 10000000000000) + 1;
    var password = Math.floor(Math.random() * 10) + 1;
    var username = Math.floor(Math.random() * 10) + 1;
    var email = Math.floor(Math.random() * 10) + 1;
  message.channel.send('Hacking into Epik Gaemz...')
  .then(message.channel.send(`Finding ${message.member.displayName}'s Epik Gaemz account`))
  .then(message.channel.send(`Username:${message.member.displayName}${username}`))
  .then(message.channel.send(`Password:${message.member.displayName}${password}`))
  .then(message.channel.send(`Most common number:${mc}`))
  .then(message.channel.send(`E-mail:${message.member.displayName}gameing${email}@susmail.com`))
  .then(message.channel.send(`Attempting to give vbux to ${message.member.displayName}'s Epik Gaemz account`))
  .then(message.channel.send('Attempt successful')
  .then(message.channel.send(`Congratulations ${message.member.displayName}! You now have ${vbux} vbux!`)))

  }
})

const helpEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Join the official SusBot support server here!')
  .setURL('https://discord.gg/4hMFhAn5uq')
	.setDescription('SusBot commands')
  .setImage("https://cdn.discordapp.com/attachments/857929401773981697/894403199702827028/IMG_20211004_095854.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/857929401773981697/894403199702827028/IMG_20211004_095854.png")
  .addFields(
		{ name: 'susbotping', value: 'shows your ping', inline: true },
		{ name: 'susbotsay [message]', value: 'says the message after the command', inline: true },
    { name: 'susbothamburger', value: 'shows a picture of a hamburger'},
    { name: 'susbotfries', value: 'shows a picture of french fries'},
    { name: 'susbotcrewrate', value: ' a cringe command, it tells your crewmate rate'},
    { name: 'susbotsusrate', value: 'idk man someone seems a bit sus'},
    { name: 'susbotvbux', value: 'FREE VBUX'})
  .setFooter('type susbothelp2, susbot help 2 or susbot commands 2  for the next page')

client.on('message', message => {
  if (message.content.toLowerCase().startsWith('susbotbobux')) {
    message.channel.send('Hacking into Boblox HQ :ok_hand:')
    .then(message.channel.send(`Finding ${message.member.displayName}'s Boblox account :cold_face: :ok_hand:`))
    .then(message.channel.send(`Username:${message.member.displayName}69420`))
    .then(message.channel.send(`Password:69420`))
    .then(message.channel.send(`Most common number:69420`))
    .then(message.channel.send(`E-mail:${message.member.displayName}69420@susmail.com`))
    .then(message.channel.send(`Attempting to give vbux to ${message.member.displayName}'s Boblox account :cold_face: :ok_hand:`))
    .then(message.channel.send('Attempt successful')
    .then(message.channel.send(`Congratulations ${message.member.displayName}! You now have 69 bobux :cold_face: :ok_hand:`)))

  }
})

client.on('message', message => {
 if (message.content.toLowerCase() ==='susbotcrewmate') {
   var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s crewrate is ${rating}%`);
 }
});

client.on('message', message => {
 if (message.content.toLowerCase() ==='susbot crew rate') {
   var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s crewrate is ${rating}%`);
 }
});

client.on('message', message => {
 if (message.content.toLowerCase() ==='susbot crewmate rate') {
   var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s crewrate is ${rating}%`);
 }
});

client.on('message', message => {
 if (message.content.toLowerCase() ==='susbotcrewmaterate') {
   var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s crewrate is ${rating}%`);
 }
});

client.on('message', message =>{
    if (message.content.toLowerCase().startsWith('susbot fries')) {
      message.channel.send(friesEmbed);
    }
  }
  )

client.on('message', message => {
  if (message.content.toLowerCase() ==='susbot sus rate') {
    var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s susrate is ${rating}%`);
 }
});

client.on('message', message => {
  if (message.content.toLowerCase() ==='susbot susrate') {
    var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s susrate is ${rating}%`);
 }
});

client.on('message', message => {
  if (message.content.toLowerCase() ==='susbotsusrating') {
    var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s susrate is ${rating}%`);
 }
});

client.on('message', message => {
  if (message.content.toLowerCase() ==='susbot sus rating') {
    var rating = Math.floor(Math.random() * 100) + 1;
  message.channel.send(`${message.member.displayName}'s susrate is ${rating}%`);
 }
});

client.on("message", message => {
  if (message.content.toLowerCase().startsWith('susbot commands 2')) return;
  if (message.content.toLowerCase().startsWith('susbot commands 3')) return;
  if (message.content.toLowerCase().startsWith('susbot commands')) {
    message.channel.send(helpEmbed)
  }
})

client.on("message", message => {
  if (message.content.toLowerCase().startsWith('susbot help 2')) return;
  if (message.content.toLowerCase().startsWith('susbot help 3')) return;
  if (message.content.toLowerCase().startsWith('susbot help')) {
    message.channel.send(helpEmbed)
  }
})

client.on("message", message => {
  if (message.content.toLowerCase().startsWith('susbothelp2')) return;
  if (message.content.toLowerCase().startsWith('susbothelp3')) return;
  if (message.content.toLowerCase().startsWith('susbothelp')) {
    message.channel.send(helpEmbed)
  }
})
