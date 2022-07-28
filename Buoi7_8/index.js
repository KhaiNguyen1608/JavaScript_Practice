

function addNumber() {
     var numb = document.getElementById("inputNumber").value*1;
     var innerHtml = document.getElementById("resultNumber").innerHTML;
     if(numb != undefined || numb != '' || numb || null) {
          if(innerHtml === '') {
               innerHtml += numb;
          }
          else {
               innerHtml += ',' + numb;
          }
     }
     document.getElementById("resultNumber").innerHTML = innerHtml;
}


function baiTap1() {
     var arr =  document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     if(arr[0] == "") {
          return;
     }
     var i = 0;
     var sum = 0;
     for(i = 0; i <= arr.length - 1; i++)
     {
          if(arr[i] >= 0) {
               sum += arr[i]*1;
          }
     }
     document.getElementById("resultBT").innerHTML = sum
}


function baiTap2() {
     var arr =  document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     if(arr[0] == "") {
          return;
     }
     var i = 0;
     var count = 0;
     for(i = 0; i <= arr.length - 1; i++)
     {
          if(arr[i] >= 0) {
               count++
          }
     }
     document.getElementById("resultBT2").innerHTML = count
}


function baiTap3() { 
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     if(arr[0] == "") {
          return;
     }
    
     var min = Math.min(...arr);
     document.getElementById("resultBT3").innerHTML = min;
}


function baiTap4() { 
     var i = 0;
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     var newArr = [];
     for(i = 0; i < arr.length - 1; i++)
     {
          if(arr[i] >= 0) {
               newArr.push(arr[i]);
          }
     }
     var min = Math.min(...newArr);
     document.getElementById("resultBT4").innerHTML = min;
}

function baiTap5() { 
     var i = 0;
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     var newArr = [];
     for(i = 0; i < arr.length - 1; i++)
     {
          if(arr[i] % 2 === 0) {
               newArr.push(arr[i]);
          }
     }
     var tmp = newArr[newArr.length-1]
     document.getElementById("resultBT5").innerHTML = tmp;
}


function baiTap6() { 
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     var i = document.getElementById("pos1").value*1;
     var k = document.getElementById("pos2").value*1;
     var tmpValue = 0;
     if(arr[i] != undefined && arr[k] != undefined) {
          tmpValue = arr[i];
          arr[i] = arr[k];
          arr[k] = tmpValue;
     }
     document.getElementById("resultBT6").innerHTML = arr;
}

function baiTap7() { 
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     arr.sort((a,b) => a - b);
     document.getElementById("resultBT7").innerHTML = arr;
}

function baiTap8() { 
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     var i = 0;
     var result = '';
     for(i = 0; i < arr.length - 1; i++)
     {
          if(arr[i] >= 2 && arr[i] % 3 !== 0 && arr[i] % 5 !== 0 && arr[i] % 7 !== 0) {
              result = arr[i];
              break;
          }
     }
     document.getElementById("resultBT8").innerHTML = result;
}

function baiTap9() {
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     var i = 0;
     var count = 0;
     for(i = 0; i < arr.length - 1; i++)
     {
          if(Number.isInteger(arr[i])) {
               count++
          }
     }
     document.getElementById("resultBT9").innerHTML = count;
}


function baiTap10() {
     var arr = document.getElementById("resultNumber").innerHTML.split(',').map(Number);
     var i = 0;
     var countPos = 0;
     var countNeg = 0;
     for(i = 0; i < arr.length - 1; i++)
     {
          if(i >= 0) {
               countPos++
          }
          else {
               countNeg++
          }
     }
     console.log(countPos);
     console.log(countNeg);
     
     if(countNeg == countPos)
     {
          document.getElementById("resultBT10").innerHTML = "Số dương = Số âm";
          
     }
     else if(countNeg > countPos) {
          document.getElementById("resultBT10").innerHTML = "Số dương < Số âm";
         
     }
     else if(countNeg < countPos)
     {
          document.getElementById("resultBT10").innerHTML = "Số dương > Số âm";
         
     }
}