const date = document.getElementById('time');

setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();   
    let sec = time.getSeconds();
    let dayNight= 'AM'
    if (hours > 12) {
    dayNight = 'PM'

    hours = hours - 12
}
    if (hours < 10) {
    hours = `0${hours}`
}
    if (min < 10) {
    min = `0${min}`
}
    if (sec < 10) {
    sec = `0${sec}`
}
date.textContent = `${hours} : ${min} : ${sec} ${dayNight}`


})



