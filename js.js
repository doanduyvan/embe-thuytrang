function dom(selector,ALL = false){
    if(ALL == 'ALL'){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}

const slide = dom('.slides');
const slides = dom('.item','ALL');
const prev = dom('.btn .left');
const next = dom('.btn .right');
let active = 0;
// let creatInterval = setInterval(() => { next.click() }, 4000);

next.onclick = () => {
    if (active === slides.length - 1) {
        active = 0;
    }else{
        active++;
    }
    slide.style.transition = '0.4s linear';
    autoslide();
}
prev.onclick = () => {
    if (active === 0) {
        active = slides.length - 1;
    }else{
        active--;
    }
    slide.style.transition = '0.4s linear';
    autoslide();
}

function autoslide() {
  //  const positionX = slides[active].offsetLeft;
    const width = slides[0].offsetWidth;
    slide.style.transform = `translateX(-${width * active}px)`;
}