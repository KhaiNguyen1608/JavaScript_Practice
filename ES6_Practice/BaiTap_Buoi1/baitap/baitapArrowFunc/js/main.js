
 const colorList = ["pallet", "viridian", "pewter", 
 "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let renderButtonColor = (param) => {
    let render = '';
    for(let i = 0; i < param.length;i++) {
        if(i !== 0) {
            render += 
            `
                <button class ="color-button ${param[i]}" onclick="addClass(this)"></button>
            `
        }
        else {
            render += 
            `
                <button class ="color-button ${param[i]} active" onclick="addClass(this)"></button>
            `
        }
    }
    document.querySelector('#colorContainer').innerHTML = render;
}

renderButtonColor(colorList);

var addClass = (e) => {
    document.querySelectorAll('.active')[0].classList.remove('active');
    e.classList.add("active")
    var pickedColor = e.classList[1];
    document.querySelector('#house').classList.add(pickedColor);
}

