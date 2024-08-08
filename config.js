
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "rahmanullah97097@gmail.com";
global.location = "Lahore,Pakistan.";
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
global.style = process.env.STYLE || "3";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0llMHMwU0o1WE42N2dsQmZTczdMenhYZ2ZrT2g5US9jVFN1OCtLVU5Wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVAxVklWcE9DZG91Tkt1aHIwYnVNRFU0UWNhRkxLRkowRjFVQ3NFeFhEYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTW5rTUpkclRIVGRFbVpJcDVQUjhhRGRQdyswMmFid0Z1RHNLcUc0ZG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJueXJHekg5eGgvV2lzbnRCU0VRQ2NxaTJrMmVMblR4cXJFeXd5VnRzMmxvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGSWRodXBsWmRBYkIrZGxlSTVndFlkbHdQMHNicHA3WFJuV253aHExMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5WZEUvSXJCMXhVYUg2d29vSTJBREpHemFBL3Z4NXllbHgvMFBCcnR5WGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZoQ1F4S2NoNGl3dVBBd2pJcTA5RjNqMldJTWlLajNVa1l4Nmx3bHBuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGZ5ajdqd0lUc0xMbGFGYUdUTlpvaU1ad1hVU0hwVzVsL1BNdng5dkZWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9rSlJIZFVnSyt5SU04a1JyY2lSL0V6UWFrWDY3WjBZY3dSaElCM0pnWGtpekxHemxDdDRmeW51eHpjYVkvNjhOYm9uN0ZkTFdWVk5xeE80dU92WmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJ5T21sVSsrZUF4OXpKVjAvVHdzVE1uU3JienVORkhyWXVBSTRmVjR0T0VZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMxOTcwOTc4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNTU3QUE0Rjc5RUI2NUZFNjMwQkQzRkYxOTM0QTYxOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTA3NzI3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhZTYzRTVtUVFlNkZMTHBhNkNVNC1BIiwicGhvbmVJZCI6IjQ3MTBmODIxLWYzZDAtNDNhYy04ZjU0LWZmMjgwOGU0YzI1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLWk9jYVMxMHdVMzJCdXF2YTVHcktMMzZHdzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnJBNjdmcEo1MzBVckZmZ2V5NlI1ajU4OVA4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJEMUYyQkpHIiwibWUiOnsiaWQiOiI5MjMzMTk3MDk3ODE6OTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qt/Cdm6XwnZGF8J2bqyDwnZuv8J2bu/Cdm6rwnZC/XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7wk4OuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQ1FzOWdDRUlXVDByVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyc0xRTXd2SW01YllDa25aMDBHWlBLcUFJRTFtTjFtRWRNM283aWFxN3hFPSIsImFjY291bnRTaWduYXR1cmUiOiJrbzVMenFNckxCenhuUGFPOERXZjhnUXl2VkgzbWV5SW5sY3NGMWlnQUVzWFVtMmgxQndNS0JLUml4WnEyd080RnR3ZTduWmJVMVNIeXZscnM5WTBBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibncrSG1QTVVrT2pIUStoenMxVmZnc2FSeERWcUs1L2VBUUo2U01sR1ZMRWdRRGdscEJwNjdtWWxvTEdSSm1mNE1TSStXZGJkTElXS3pCczVibWlJamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMTk3MDk3ODE6OTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHJDMERNTHlKdVcyQXBKMmROQm1UeXFnQ0JOWmpkWmhIVE42TzRtcXU4UiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzEwNzcyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNRXMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
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
