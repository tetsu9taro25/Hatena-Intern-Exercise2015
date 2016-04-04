// 課題 JS-1: 関数 `parseLTSVLog` を記述してください
var logStr =
  "path:/\tepoch:200000\n" +
  "path:/help\tepoch:300000\n" +
  "path:/\tepoch:250000\n";

function parseLTSVLog (rowData){

  var parse = [];
  colLog = rowData.split(/\n/);//各行で切り分ける

  for (i=0; i<colLog.length-1; i++){
    logElement = colLog[i].split(/\t/);//tabで切り分ける
    var obj = {};

    for (j=0; j<logElement.length; j++){
      keyVal = logElement[j].split(':');

      if (keyVal[0]==='epoch'){
        obj[keyVal[0]] = Number(keyVal[1]);
      }else{
        obj[keyVal[0]] = keyVal[1];
      }
    }
    parse[i] = obj;
  }
 return parse;
}

parseLTSVLog(logStr);

// 課題 JS-2: 関数 `createLogTable` を記述してください
