const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348101800510";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_36_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAwLFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMkRsRDRoM0RsdW5uTldnRHF4WURHUWs0dkw3TWhzRmxRV1ozM0MrOFF2OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibDhxNG1KTndRMEt5cVAxNnFJWVlFUVwiLFxuICBcInBob25lSWRcIjogXCJlZWNmNDk4ZC04NjliLTRmNzctYjE5Yy05MjdhOGEwOTBiYThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTU1LFxuICAgICAgMTE2LFxuICAgICAgMjM3LFxuICAgICAgMjA5LFxuICAgICAgNyxcbiAgICAgIDIxMyxcbiAgICAgIDI1MCxcbiAgICAgIDE2MixcbiAgICAgIDIzOCxcbiAgICAgIDE3MSxcbiAgICAgIDk5LFxuICAgICAgMjEwLFxuICAgICAgODAsXG4gICAgICAxMTksXG4gICAgICAyMzAsXG4gICAgICAyNTAsXG4gICAgICAyNDUsXG4gICAgICA3OSxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDQwLFxuICAgICAgMTQ3LFxuICAgICAgNTMsXG4gICAgICA4NixcbiAgICAgIDEzMyxcbiAgICAgIDI0LFxuICAgICAgMjEyLFxuICAgICAgMTM4LFxuICAgICAgMjA0LFxuICAgICAgMTE5LFxuICAgICAgMTc5LFxuICAgICAgMTgyLFxuICAgICAgNixcbiAgICAgIDE0MCxcbiAgICAgIDc0LFxuICAgICAgMTksXG4gICAgICAxOCxcbiAgICAgIDE1MCxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLU0tNSEs0SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMTgwMDUxMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FoYW1iZWRkaW5nc1wiLFxuICAgIFwibGlkXCI6IFwiMjExNTQ0NDM2NjQ1OTY5OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjJhdWUwRkVNNnp1N2NHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkVjhwRm4zSzRVKzhnbkZSWi9ZNGFBbWpDUURORXgwY1J3bmhtcWpLV3drPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNzbndYSkNNaEpVZDRGMlJRM1pUMnQrUWZlQnFEeDlGTVZIRDNLcmxNbHFmMVA3Rnk4UGtZOW93aER5TUNmY0tLV1Q0YUUrclJuQkowTE1SSHBXUUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxGalFDNHBkbkxYWXNEWmd2ZUNiVjJDTjg2NEowclVWV1liMzRxMUpmQXlrdmpVOTlrTGNEUWtjUTRRODU2VDZ5K3pnc2d6OG9pVHRSWERITFRhMmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDE4MDA1MTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjkyOTM2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUzeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTN4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSzdpUGg1QWtLMmhZTEwvcHBXVkxkcEVZUjJLTHJsc04wVmlEbjBXVVRqND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTcxNzA0MTU3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY5MjkxNzk0NTVcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
