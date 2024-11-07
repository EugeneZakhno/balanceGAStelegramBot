/*credentials Template (Шаблон):   
     //testVirtulaAccountBot   - name
     // @testVirtulaAccountBot  /скидывать для доступа к боту
     // https://t.me/testVirtulaAccountBot
     const token = "7665970570:AAFs3NfVGgHoNJJkCs4BzlIWwlAb48XhIdU";
     const webAppUrl = "https://script.google.com/macros/s/AKfycbx2iJsO_ORixv_IFrE6tDXZ-w0fVkT0xYShS9H6qkLmJOonOkJCGV-ihmmxGvQmQKdw/exec";
                        https://script.google.com/macros/s/AKfycbz9dSPLPULjVZwKnz4hKtbyZsnDSfnmAJnXcBBa_BTDtWNP_F1ntyGol1sImVobYfwKUQ/exec
                        
*/

//Step 1: Bot initialization
const token = "7665970570:AAFs3NfVGgHoNJJkCs4BzlIWwlAb48XhIdU";
const sheetId = "1QHzGv3OcD3l4MNvjFgcU04-a42NxfNfkcdr_fCKid3E";
const webAppUrl = "https://script.google.com/macros/s/AKfycbz9dSPLPULjVZwKnz4hKtbyZsnDSfnmAJnXcBBa_BTDtWNP_F1ntyGol1sImVobYfwKUQ/exec";
                   
//Step 2: Set webhook
function setWebhook() {
  let response = UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/setWebhook?url=" + webAppUrl);
  console.log(response.getContentText());
}
//Step 3: Получить данные о боте
 function getMe() {
 let response =  UrlFetchApp.fetch('https://api.telegram.org/bot'+ token +'/getMe');
 Logger.log(response);
}
