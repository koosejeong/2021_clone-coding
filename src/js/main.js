
const searchBtn = document.querySelector('.search');

const mainKV = document.querySelector('.main-kv');
const sliderTemp = document.querySelector('.slide-ul');
const buttons = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = sliderTemp.querySelectorAll('li');

let idx = 1;
let opIdx = 0;
let size = slides[idx].clientWidth;
let go;

// loading ferpomence

// search form
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('clk-on');
});

// main key visual slide

update();
function update() {
    sliderTemp.style.transform = "translateX("+ (-size * idx) +"px)";
    options.forEach(op => op.classList.remove('indi-on'));
    options[opIdx].classList.add('indi-on');
}


function slide() {
    sliderTemp.style.transition = "transform .5s ease-in-out";
    update();
}

function btnCheck() {
    if(this.id == "prev") {
        idx--;
        if(opIdx == 0) {
            opIdx = 4;
        } else {
            opIdx--;
        }
    } else {
        idx++;
        if(opIdx == 4) {
            opIdx = 0;
        } else {
            opIdx++;
        }
    }
    slide();
}

function optionFucn() {
    let i = Number(this.getAttribute('option-index'));
    idx = i + 1;
    opIdx = i;
    slide();
}

sliderTemp.addEventListener('transitionend', () => {
    if(slides[idx].id === "first") {
        sliderTemp.style.transition = "none";
        idx = slides.length - 2; //5
        sliderTemp.style.transform = "translateX("+ (-size * idx) +"px)";
    } else if(slides[idx].id === "last") {
        sliderTemp.style.transition = "none";
        idx = 1;
        sliderTemp.style.transform = "translateX("+ (-size * idx) +"px)";
    }
})

buttons.forEach(bnt => bnt.addEventListener('click', btnCheck));
options.forEach(opt => opt.addEventListener('click', optionFucn));


