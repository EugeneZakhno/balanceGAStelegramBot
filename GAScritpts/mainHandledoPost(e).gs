//Главная системная функция doPost(e) (фреймворка Google App Script):

const newDate = new Date(); //Получаем текущау дату и время
const REGEXPORTALID = /^[A-Z0-9]{32}$/;

function doPost(e) {

  // получаем данные от бота 
  var update = JSON.parse(e.postData.contents);
  var msg = update.message;
  var chatId = msg.chat.id;
  var firstName = msg.chat.first_name;
  var lastName = msg.chat.last_name;
  var userName = msg.chat.username;
  var sign = msg.text;
 
    if("/start" === sign){
      data = checkStart(chatId);
    } else if (REGEXPORTALID.exec(sign)) {
      data = checkPortalID(chatId);
    } else {
      data = somethingWentWrong(chatId);
    }

  writeValueEditSheet(chatId, firstName,lastName,userName,newDate, msg.text);
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);;
}

function writeValueEditSheet(chatId,firstname,lastname,username, date, text) {
  SpreadsheetApp.openById(sheetId).getSheetByName("Messages").appendRow([null,chatId,firstname,lastname,username,date,text]);
}

