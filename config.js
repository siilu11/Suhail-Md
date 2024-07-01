const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260971816956";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_46_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlUxTmpHSFNhNHUxT2VaRk1SZkdRSS83T3lHM0ZISlNka3B0dFk2RXFTVkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxjUzd0YnBDUkFPRW8zNTFlVVpKLWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2RmNzVmNDgtOWJkMy00MmM1LWI2NTEtM2ZmYTkwOWVjOWU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgNixcbiAgICAgIDE0MCxcbiAgICAgIDE2MSxcbiAgICAgIDIwMCxcbiAgICAgIDgwLFxuICAgICAgMjIzLFxuICAgICAgNCxcbiAgICAgIDE1OCxcbiAgICAgIDAsXG4gICAgICA3MCxcbiAgICAgIDE1MyxcbiAgICAgIDE0OCxcbiAgICAgIDE0NyxcbiAgICAgIDMxLFxuICAgICAgMjQzLFxuICAgICAgMzgsXG4gICAgICAyNDQsXG4gICAgICAxOSxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyMTQsXG4gICAgICAxNzYsXG4gICAgICAxMjUsXG4gICAgICAxMTcsXG4gICAgICA4OSxcbiAgICAgIDcyLFxuICAgICAgMTI4LFxuICAgICAgMjMsXG4gICAgICAyMDQsXG4gICAgICAyNixcbiAgICAgIDc4LFxuICAgICAgOTUsXG4gICAgICA3NyxcbiAgICAgIDI5LFxuICAgICAgMjIzLFxuICAgICAgMTg4LFxuICAgICAgMTM3LFxuICAgICAgNzAsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjM0NkcxQkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3MTgxNjk1Njo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1ha29cIixcbiAgICBcImxpZFwiOiBcIjIxMzU2MzI3MjYwOTk3Mjo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZXBsc2tFRUppRmliUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjl3dGdBeWhFdjdsRWRBQUpsMUFOZE82SzQzeVNPM3pQM0RnSmNLU09pbXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV3lKd3JaQWV0bDAxVE03YzFnL1I0andXWTdjbStnNTJzYXROaEFHRTg4MzdsWjU1UkQ2T1JWWk1DcmJUTW9jMVRQNEE4K3llblM4MHlnN2RUemg2RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSStpSmVCM3Qyako4NlFEYWdOV2FtblZBYklhYkNHNDVnSGZ1bVpwZi9IQU14ZjZWUnBqMlNVY240TXN2N0E4aFNmL2xZSTNkdTRvMy8rZWhUNm9jRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTcxODE2OTU2OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTgxMjc2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "KING👑MAKO",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "KING👑MAKO",
  ownername:process.env.OWNER_NAME|| "MAKO15💚",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "💚MAKO💚"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
