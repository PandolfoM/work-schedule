// display time date under header
var timeEl = document.querySelector('#currentDay');
timeEl.textContent = dayjs().format('dddd, MMMM D');