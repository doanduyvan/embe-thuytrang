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


function updateCountdown() {



    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0); // Năm mới sẽ là năm hiện tại + 1
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //  const countdownElement = document.getElementById('countdown');
  //  countdownElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    // Nếu đến năm mới, có thể thực hiện một hành động khác ở đây
    if (timeLeft <= 0) {
      //  countdownElement.innerHTML = 'Happy New Year!';
        // Thực hiện hành động cụ thể cho thời điểm năm mới
    }else{
        dom('.day').innerHTML = formatNumber(days);
        dom('.hour').innerHTML = formatNumber(hours);
        dom('.minute').innerHTML = formatNumber(minutes);
        dom('.second').innerHTML = formatNumber(seconds);

    }
}

// Gọi hàm updateCountdown mỗi giây
setInterval(updateCountdown, 1000);

// Gọi hàm ngay khi trang được tải để hiển thị ngay khi trang được mở
updateCountdown();

function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
}