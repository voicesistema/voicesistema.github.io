function doGet(e) {

    var tmp = HtmlService.createTemplateFromFile("page"); 
  
    return tmp.evaluate(); 
  }
  
  
  function getVoikllarsAmount(cardNumber){
    var ss = SpreadsheetApp.openById("1gqPa33wTxbiewKkvXxZgPm6UZbp8RnE9jXGxUcCMBj8");
    var ws = ss.getSheetByName("Cartões");
    row = parseInt(cardNumber)+1;
    var data = Number(ws.getRange(row, 4).getValue());
    if(data > 0){
    return data;
    } else {
    return 'Unavailable';
    }
  }
  
  function doPost(){
  
    var app = UiApp.getActiveApplication();
    return app;
  
  }
  
  function include(filename){
  
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  
  }