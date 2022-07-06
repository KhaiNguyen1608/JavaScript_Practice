


//Bài tập 1: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
//Input: Nhập 1 mảng số
var arrNumber = [3,11,2];
//Process
arrNumber.sort((a,b) => a - b);
//Output
console.log("Chuỗi số sau khi sắp xếp là:", arrNumber);

//Bài tập 2:
//Input:
var familyMember = 'E';
var greeting = '';
//Process
switch (familyMember)
{
    case 'B':
        greeting = "Con chào Ba";
        break;
    case 'A':
        greeting = "Em chào Anh";
        break;
    case 'E':
        greeting = "Anh chào Em";
        break;
    default:
        greeting = "Con chào Mẹ";
}
//Output
console.log(greeting);

//Bài tập 3:
//Input: Nhập 1 mảng số
var arrNumber2 = [69,22,101];
var oddCount = 0;
var evenCount = 0;
//Process
arrNumber2.forEach(function(x) {
    if(x % 2 > 0)
        oddCount++;
    else
        evenCount++;
});
//Output
console.log("Số luống số lẻ:",oddCount);
console.log("Số luống số chẵn:",evenCount);

//Bài tập 4: Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
//Input:
var a = 2;
var b = 2;
var c = 2;
var triangle = "Tam giác bình thường";
var powA = Math.pow(a,2);
var powB = Math.pow(b,2);
var powC = Math.pow(c,2);
//Process
if(a === b && b === c) {
    triangle = "Tam giác đều";
}
else if(a === b || a === c || b === c) {
    triangle = "Tam giác cân";
}
else if (powC === powA + powB || powA === powC + powB || powB === powA + powC) {
    triangle = "Tam giác vuông";

}
//Output
console.log("Hình",triangle);
