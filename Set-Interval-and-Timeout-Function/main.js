const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function time() {
    const date = new Date();
    const hours = date.getHours();
    const fullHour = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    if(fullHour < 10) {
        hour.textContent = `0${fullHour}`;
    }
    else {
        hour.textContent = fullHour;
    }
    if(minutes < 10) {
        minute.textContent = `0${minutes}`;
    }
    else {
        minute.textContent = minutes;
    }
    if(seconds < 10){
        second.textContent = `0${seconds}`;
    }
    else {
        second.textContent = seconds;
    }

}

setInterval(time, 1000);
