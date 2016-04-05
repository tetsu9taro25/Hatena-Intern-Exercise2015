// 課題 JS-1: 関数 `parseLTSVLog` を記述してください
var logStr =
  "path:/\tepoch:200000\n" +
  "path:/help\tepoch:300000\n" +
  "path:/\tepoch:250000\n";

function parseLTSVLog (rowData){

  var parse = [];
  colLog = rowData.split(/\n/);//各行で切り分ける

  for (i=0; i<colLog.length; i++){
    if (colLog[i]==="") break;//改行で区切ると空要素が出来ることがあるので、それを退避
    logElement = colLog[i].split(/\t/);//tabで切り分ける
    var obj = {};//各行をオブジェクトで区切る

    for (j=0; j<logElement.length; j++){
      keyVal = logElement[j].split(':');//keyとvalueに分ける

      if ( !isNaN(keyVal[1]) ){//Stringの中身が数値のみの場合
        obj[keyVal[0]] = Number(keyVal[1]);
      }else{
        obj[keyVal[0]] = keyVal[1];
      }
    }
    parse[i] = obj;
  }
 return parse;
}

// 課題 JS-2: 関数 `createLogTable` を記述してください
function createLogTable (targetElement,parseData) {
  keyList = Object.keys(parseData[0]);
  console.log(keyList);
  var makeTable = document.createElement('table');
  for (i=0; i<keyList; i++)
  makeTable.innerHTML = "<thead><tr>" +   + "</tr></thead><tbody></tbody>";
  targetElement.appendChild(makeTable);
}
var targetElement = document.getElementsByTagName("body").item(0);
createLogTable (targetElement,parseLTSVLog(logStr));

