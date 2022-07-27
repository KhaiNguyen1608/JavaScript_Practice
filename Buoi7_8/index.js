

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
     var arr =  document.getElementById("resultNumber").innerHTML.split(',');
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
     var arr =  document.getElementById("resultNumber").innerHTML.split(',');
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
     var min = Math.min(arr);
     console.log(min);
}


function baiTap4() { 
     var i = 0;
     var newArr = [];
     for(i = 0; i < arr.length - 1; i++)
     {
          if(i >= 0) {
               newArr.push(arr[i]);
          }
     }
     var min = Math.min(newArr);
     console.log(min);
}

function baiTap5() { 
     var i = 0;
     var newArr = [];
     for(i = 0; i < arr.length - 1; i++)
     {
          if(i%2 === 0) {
               newArr.push(arr[i]);
          }
     }
     var tmp = newArr[newArr.length-1]
     console.log(tmp);
}


function baiTap6() { 
     var tmpValue = 0;
     if(arr[i] != undefined && arr[k] != undefined) {
          tmpValue = arr[i];
          arr[i] = arr[k];
          arr[k] = tmpValue;
     }
}

function baiTap7() { 
    arr.sort((a,b) => a - b);
}

function baiTap8() { 
     var tmpValue = 0;
     if(arr[i] != undefined && arr[k] != undefined) {
          tmpValue = arr[i];
          arr[i] = arr[k];
          arr[k] = tmpValue;
     }
}

function baiTap9() {
     var i = 0;
     var count = 0;
     for(i = 0; i < arr.length - 1; i++)
     {
          if(Number.isInteger(arr[i])) {
               count++
          }
     }
     console.log(count);
}


function baiTap10() {
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
          console.log("Số dương = Số âm")
     }
     else if(countNeg > countPos) {
          console.log("Số dương < Số âm")
     }
     else if(countNeg < countPos)
     {
          console.log("Số dương > Số âm")
     }
}