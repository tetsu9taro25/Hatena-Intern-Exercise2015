// 課題 JS-1

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

// 課題 JS-2
function createLogTable (targetElement,parseData) {
  keyList = Object.keys(parseData[0]);
  var makeTable = document.createElement('table');

  var makeThead = "";
  for (i=0; i<keyList.length; i++){
    makeThead += "<th>";
    makeThead += keyList[i];
    makeThead += "</th>";
  }

  var makeTbody= "";
  for (i=0; i<parseData.length; i++){
    makeTbody += "<tr>";
    obj = parseData[i];
    for(var key in obj) {
      makeTbody += "<td>";
      makeTbody += obj[key];
      makeTbody += "</td>";
    }
    makeTbody += "</tr>"
  }

  makeTable.innerHTML = "<thead><tr>" +  makeThead  + "</tr></thead><tbody>" + makeTbody + "</tbody>";
  targetElement.appendChild(makeTable);
}

var targetElement = document.getElementById("table-container");


// 課題 JS-3 の実装をここに記述してください。
document.getElementById('submit-button').onclick = function(){

  logStr = document.getElementById('log-input').innerHTML;
  createLogTable (targetElement,parseLTSVLog(logStr));

}
