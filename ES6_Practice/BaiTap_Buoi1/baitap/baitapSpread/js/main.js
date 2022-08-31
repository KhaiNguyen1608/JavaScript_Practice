
let renderHTML = () => {
    let html = '';
    let str = document.querySelector('.heading').innerHTML;
    let chars = [...str];
    for(let value of chars) {
        html += `<span>${value}</span>`
    }
    document.querySelector('.heading').innerHTML = html;
} 

renderHTML();