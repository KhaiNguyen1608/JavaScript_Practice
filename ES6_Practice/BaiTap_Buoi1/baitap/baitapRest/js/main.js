

let avg = (...inputParam) => {
    let total = 0;
    for(let val of inputParam) {
        total += val*1;
    }
    return total / inputParam.length;
}



let fnCal1 = () => {
    let diemToan = document.querySelector('#inpToan').value*1
    let diemLy = document.querySelector('#inpLy').value*1
    let diemHoa = document.querySelector('#inpHoa').value*1
    let avgScore = avg(diemToan, diemLy, diemHoa);
    document.querySelector('#tbKhoi1').innerHTML = avgScore;
}

let fnCal2 = () => {
    let diemVan = document.querySelector('#inpVan').value*1
    let diemSu = document.querySelector('#inpSu').value*1
    let diemDia = document.querySelector('#inpDia').value*1
    let diemEn = document.querySelector('#inpEnglish').value*1
    let avgScore = avg(diemVan, diemSu, diemDia, diemEn);
    document.querySelector('#tbKhoi2').innerHTML = avgScore;
}

document.querySelector('#btnKhoi1').addEventListener('click', fnCal1)
document.querySelector('#btnKhoi2').addEventListener('click', fnCal2)