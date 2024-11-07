const GREETING = "Шаг 1: <strong> Начинаем сессию!</strong> Пришлите мне <strong>portalId</strong>, который получили от тех.поддержки.(Пример: RT3C4E58636929057532709E1B39OPR1)";
const LOGIN = "Введите логин: (Пример: 75486115444) "
const COMMAND = "Выполните запрос командой /start или кнопкой: Начать сессию";
const START = "/start";
const WRONG = "Что-то пошло не так... Давайте сначала!\n Пробуем /start";


function checkPortalID(chatId) {
    //Проверка portalId
      var payload = {
      'method': 'sendMessage',
      'chat_id': String(chatId),
      'text': LOGIN,
      'parse_mode': 'HTML'
    }
    var data = {
      "method": "post",
      "payload": payload
    }
    return data;
  } 

//*******************************************
 
function checkStart(chatId){
    var payload = {
      'method': 'sendMessage',
      'chat_id': String(chatId),
      'text': GREETING,
      'parse_mode': 'HTML'
    }
    var data = {
      "method": "post",
      "payload": payload
    }
    return data;
}
//*******************************************
function somethingWentWrong(chatId){
    var payload = {
      'method': 'sendMessage',
      'chat_id': String(chatId),
      'text': WRONG,
      'parse_mode': 'HTML'
    }
    var data = {
      "method": "post",
      "payload": payload
    }
    return data;
}
