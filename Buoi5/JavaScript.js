
function calcSum() {
    var a = 5;
    var b = 7;
    var sum = a + b;
    console.log(sum);
}
// tạo ra function 
// calcSum()

//gọi ra function

function calcsum2(a, b, c) {
    var sum = a + b + c;
    console.log(sum);
}
// không cần khai báo biến a b c nhưng khi gọi ra phải cho a b c giá trị để tính
// calcsum2(11, 5, 9);
// function có tham số  đầu vào
var res = calcsum2(7, 8, 9);

function calcsum2(a, b, c) {
    var sum = a + b + c;
    return sum;
}
// console.log(res)

//Scope : phạm vi truy cập của biến (global scope vs function scope)


//BT quản lý tuyển sinh
// function score(a, b, c, area, human) {
//     totalscore = a + b + c + area + human
//     if (a * b * c == 0) { console.log("thí sinh có điểm liệt") }
//     if (totalscore > 35) { console.log("đậu") } else { console.log("rớt") }
//     console.log(totalscore);
// }
// score(7, 8, 1, 1, 1);
function calcareagrade(area) {
    if (area === "A") { 
        return 2 
    } 
    else if (area === "B") { 
        return 1 
    } 
    else if (area === "c") { 
        return 0.5 
    } 
    else if (area === "X") { 
        return 0 
    }
}

function calcstudenttypegrade(studenttype) {
    if (studenttype === "1") { 
        return 2.5 
    } 
    else if (studenttype === "2") { 
        return 1.5 
    } else if (studenttype === "3") { 
        return 0.5 
    } else if (studenttype === "0") { 
        return 0 
    }
}

function score() {
    var standardgrade = 23;
    var sub1 = 8;
    var sub2 = 5;
    var sub3 = 4;
    var area = "A";
    var studenttype = "1";
    var areagrade = calcareagrade(area);
    var studenttypegrade = calcstudenttypegrade(studenttype);
    total = sub1 + sub2 + sub3 + areagrade + studenttypegrade;
    if (sub1 * sub2 * sub3 === 0) { 
        console.log("có điểm liệt", total) 
    };
    if (total > standardgrade) { 
        console.log("đậu", total) 
    } else 
    { 
        console.log("rớt", total) 
    }
}
score()

//BT tính tiền điện
function pay(a, kw) {
    if (kw < 50) { 
        total = 500 * kw;
    } 
    else if (kw > 50 && kw <= 100) { 
        total = 500 * 50 + (kw - 50) * 650;
    } 
    else if (kw > 100 && kw <= 200) { 
        500 * 50 + 650 * 50 + (kw - 100) * 850;
    } 
    else if (kw > 200 && kw <= 350) { 
        total = 500 * 50 + 650 * 50 + 850 * 100 + (kw - 200) * 1100;
    } 
    else if (kw > 350) { 
        total = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (kw - 350) * 1300;
    };
    console.log(a, total);
}
pay("Khải", 550);


//Tính Thuế Thu nhập cá nhân
function taxes() {
    var name = "Khải";
    var totalyear = 600;
    var people = 4;
    tax = totalyear - 4 - (people * 1.6);
    if (tax <= 60) {
        tax *= 0.05;
    } 
    else if (tax > 60 && tax <= 120) {
        tax = (tax * 0.05) + (tax - 60)* 0.1;
    } 
    else if (tax > 120 && tax <= 210) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax - 120) * 0.15;
    } 
    else if (tax > 210 && tax <= 384) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax - 210) * 0.2;
    } 
    else if (tax > 384 && tax <= 642) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax * 0.2) + (tax - 384) * 0.25;
    } 
    else if (tax > 642 && tax <= 960) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax * 0.2) + (tax * 0.25) + (tax - 642) * 0.3;
    } 
    else if (tax > 960) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax * 0.2) + (tax * 0.25) + (tax* 0.3) + (tax - 960) * 0.35;
    }
    console.log("Thuế thu nhập cá nhận:", tax);
}
taxes()

//Tiền cáp
function capBill() {
    var customercode = 123456789;
    var customertype = "DN";
    var billProcess = 4.5;
    var basic = 20.5;
    var lux = 7.5;
    var channel = 4;
    var bill = basic + billProcess + (7.5 * channel)
    console.log("Mã khác hàng:", customercode, "Tiền cáp:", bill)
}
capBill();