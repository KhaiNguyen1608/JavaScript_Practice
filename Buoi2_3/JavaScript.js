


//Bài tập 1:
function baiTap1() {
    //Input
    var workDays =  document.getElementById("txtNum").value;
    var salPerDate = document.getElementById("txtNum1").value
    //Process
    var result1 = workDays * salPerDate;
    //Output
    document.getElementById("resultBT1").innerHTML = result1;
}

//Bài tập 2
function baiTap2() {
    var input = document.getElementById("txtNumBT2").value;
    var arr = [];
    arr = input.split(" ");
    var i = 0;
    var result2 = 0;
    //Process
    while(i < arr.length) {
        result2 += arr[i]*1;
        i++;
    }
    result2 = result2 / arr.length;
    //Output
    document.getElementById("resultBT2").innerHTML = result2;
}


//Bài tập 3


function baiTap3() {
    //Input
    var usd = document.getElementById("txtNumBT3").value;
    var vnd = 23.500;
    //Process
    var result3 = usd * vnd;
    //Output
    document.getElementById("resultBT3").innerHTML = result3;
}

//Bài tập 4
function baiTap4() {
   //Input
    var recWidth = document.getElementById("txtNumBT4_width").value;
    var recHeight = document.getElementById("txtNumBT4_heigth").value;
    //Process
    var result41 = recHeight * recWidth;
    var result42 = (recHeight + recWidth) * 2;
    //Output
    var innerHTML = '';
    innerHTML = "Diện tích: " + result41 + "; " + "Chu vi: " + result42;
    document.getElementById("resultBT4").innerHTML = innerHTML;
   
}


//Bài tập 5
function baiTap5() {
    //Input
    var tmpNumber = document.getElementById("txtNumBT5").value;
    //Process
    var so_hang_dv = tmpNumber % 10;
    var so_hang_chuc = parseInt((tmpNumber%100)/10)
    var result5 = so_hang_dv + so_hang_chuc;
    //Output
    document.getElementById("resultBT5").innerHTML = result5;
   
 }
