

function baiTap1() {
   var sum = 0;
   var i = 0;
   while(sum < 10000) {
     i++
     sum += i;
   }
   
   document.getElementById("resultBT").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}


function baiTap2() {
     var exponent = document.getElementById("exponent").value;
     var base = document.getElementById("base").value;
     var i = 1*1;
     var sum = base*1;
     
     while(i < exponent) {
          i++
          sum += Math.pow(base,i);
     }
     document.getElementById("resultBT2").innerHTML = sum;
}


function baiTap3() { 
     var x = document.getElementById("inputBT3").value;
     var i = 1;
     var result = 1;
     while(i < x) {
          i++
          result *= i
     }
    document.getElementById("resultBT3").innerHTML = result;
}


function baiTap4() { 
    var i = 1;
    var result = '';
    while(i <= 10) {
          if(i % 2 == 0) {
               result +=  '<div style="background-color:#DC3545;color:white;height:25px">div chẵn</div>'
          }
          else {
               result +=  '<div style="background-color:#0D6EFD;color:white;height:25px">div lẻ</div>'
          }
          i++
    }
    document.getElementById("resultBT4").innerHTML = result;
}