
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "rahmanullah97097@gmail.com";
global.location = "Lahore,Pakistan";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923319709781@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Mrunknown54/EVIL-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1271d54767e6d0c21855a.jpg";
global.devs = "923319709781";
global.sudo = process.env.SUDO || "923319709781";
global.owner = process.env.OWNER_NUMBER || "923319709781";
global.style = process.env.STYLE || "2";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://n9.cl/evil-md";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0tUbVIyamF5MlgxNUVnaTlxcCtxSXV0S2xwTlhmMGc4MUs5dTdaZ3ltVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW00MTFjcUpuTEw2TktubkxKMnd6Q2l0dmsyNmR3b2djbDJVblpRTjlRTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTE5EbC9DSFM5anI2WXAzb2NXREk5RWVJUkVnNTRpamNsMy9iYXhXOWxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucEIwVjhBZk0ydjVudUFCNTdCZHlqcHZTc2pJeHdSdWZzV0tRcUZSR2xJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCSnYydDhjVE56UlZzUXJWQ0Y2cDFhVkUwSVRKby8vQTFtdEZMUmJFMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPRjgwd0MwVTJIVGtkWjBGRTY5dmN4YnE3eHh4ZGJnLytHUWt6a0V1aUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJBU3JRNmt5YncvYkJVdmJzRnJhRWJaT0ZTbThCeU90K1puRlBuOUJrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWdpdnlYazZQNG5yRU1YQXJWVGsxa1B0QWlQMmIxM1luNTdOMzJ1UHdtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBsdDIvb3A4cXVnMzJWZzVnU1RObzgvcTZ3ZzFoTHRTWXMydWZzaWw1RVE0S2ErdUpQc3pveGRYblhiMkFkRUZsaER6c2EwUkhnQVJ2VEwxczZqc0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJIQk92VVFsSWd4dEx1b0I4SG1tcXRJU3VwbzkrUDUyOGhYWUZFT1lnU0ZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0Z1UzQ0QwSVRoNm4wU0RnUnJTUzNnIiwicGhvbmVJZCI6ImExOTJhZGQ2LThlZGQtNGE2ZS04ZDliLWIwODYxMTc3MmVhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGUFRvL2lmZUp2OXVJWkVIMFFjWmFsZGZJNDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTRDUG9FOGRIcXVDL1dHMVNBeGhRMWxaRHNrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY2TjRIV0RaIiwibWUiOnsiaWQiOiI5MjMzMTk3MDk3ODE6NzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qt/Cdm6XwnZGF8J2bqyDwnZuv8J2bu/Cdm6rwnZC/XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7wk4OuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQNlBzOWdDRVA2OWtyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyc0xRTXd2SW01YllDa25aMDBHWlBLcUFJRTFtTjFtRWRNM283aWFxN3hFPSIsImFjY291bnRTaWduYXR1cmUiOiJCZ0tKK2c2SnU5b0M1eWRjQUFjQkRPekhEZThiQU5yN2FQcXdsRTl2RER4cDcwa0w0cUpJTjBCMi9oWWVCR1dwYlFhbVNkRkhYL2ZGQzZNNlVkV2RBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWQ5WG9XZDQ2T0tqMEZsMHhqWkVyWU5MY2RLOHFWb0hHbGJoT2VlWVZCYmwxUVlQZ1daRmJySVB5NnloNldDb0xrVjJTZmlMWkhnR25SbzVTQ05ZRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMTk3MDk3ODE6NzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHJDMERNTHlKdVcyQXBKMmROQm1UeXFnQ0JOWmpkWmhIVE42TzRtcXU4UiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTk2NzQ5OX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇᴠɪʟ ᴍᴅ²⁰²⁴_*",
  author: process.env.PACK_AUTHER || "ᴇᴠɪʟ-ᴍᴅ",
  packname: process.env.PACK_NAME || "ᴇᴠɪʟ-ᴍᴅ",
  botname: process.env.BOT_NAME || "𝐄𝐕𝐈𝐋-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "ᴅᴀʀᴋ ᴇᴠɪʟ",
  errorChat: process.env.ERROR_CHAT || "923319709781",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "EVIL").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
