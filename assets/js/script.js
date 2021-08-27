dayjs.extend(window.dayjs_plugin_advancedFormat)
dayjs.extend(window.dayjs_plugin_isSameOrAfter)
dayjs.extend(window.dayjs_plugin_isBetween)

var details = {};

var nineAmEL = document.querySelector('#nineAm');
var tenAmEL = document.querySelector('#tenAm');
var elevenAmEL = document.querySelector('#elevenAm');
var twelvePmEL = document.querySelector('#twelvePm');
var onePmEL = document.querySelector('#onePm');
var twoPmEL = document.querySelector('#twoPm');
var threePmEL = document.querySelector('#threePm');
var fourPmEL = document.querySelector('#fourPm');
var fivePmEL = document.querySelector('#fivePm');

// display time date under header
var timeEl = document.querySelector('#currentDay');
timeEl.textContent = dayjs().format('dddd, MMMM Do');

function changeTimeStatus() {
  // check what time of day it is
  var time9Am = dayjs().set('hour', 9).set('minute', 00);
  var time10Am = dayjs().set('hour', 10).set('minute', 00);
  var time11Am = dayjs().set('hour', 11).set('minute', 00);
  var time12Pm = dayjs().set('hour', 12).set('minute', 00);
  var time1Pm = dayjs().set('hour', 13).set('minute', 00);
  var time2Pm = dayjs().set('hour', 14).set('minute', 00);
  var time3Pm = dayjs().set('hour', 15).set('minute', 00);
  var time4Pm = dayjs().set('hour', 16).set('minute', 00);
  var time5Pm = dayjs().set('hour', 17).set('minute', 00);
  var time6Pm = dayjs().set('hour', 18).set('minute', 00);
  // between 9-10
  if (dayjs().isBetween(time9Am, time10Am)) {
    $(nineAmEL).removeClass('past');
    $(nineAmEL).addClass('present');
  } else if (dayjs().isBefore(time9Am)) {
    $(nineAmEL).removeClass('past');
    $(nineAmEL).addClass('future');
  }
  // between 10-11
  if (dayjs().isBetween(time10Am, time11Am)) {
    $(tenAmEL).removeClass('past');
    $(tenAmEL).addClass('present');
  } else if (dayjs().isBefore(time10Am)) {
    $(tenAmEL).removeClass('past');
    $(tenAmEL).addClass('future');
  }
  // between 11-12
  if (dayjs().isBetween(time11Am, time12Pm)) {
    $(elevenAmEL).removeClass('past');
    $(elevenAmEL).addClass('present');
  } else if (dayjs().isBefore(time11Am)) {
    $(elevenAmEL).removeClass('past');
    $(elevenAmEL).addClass('future');
  }
  // between 12-1
  if (dayjs().isBetween(time12Pm, time1Pm)) {
    $(twelvePmEL).removeClass('past');
    $(twelvePmEL).addClass('present');
  } else if (dayjs().isBefore(time12Pm)) {
    $(twelvePmEL).removeClass('past');
    $(twelvePmEL).addClass('future');
  // between 1-2
  } if (dayjs().isBetween(time1Pm, time2Pm)) {
    $(onePmEL).removeClass('past');
    $(onePmEL).addClass('present');
  } else if (dayjs().isBefore(time1Pm)) {
    $(onePmEL).removeClass('past');
    $(onePmEL).addClass('future');
  }
  // between 2-3
  if (dayjs().isBetween(time2Pm, time3Pm)) {
    $(twoPmEL).removeClass('past');
    $(twoPmEL).addClass('present');
  } else if (dayjs().isBefore(time2Pm)) {
    $(twoPmEL).removeClass('past');
    $(twoPmEL).addClass('future');
  }
  // between 3-4
   if (dayjs().isBetween(time3Pm, time4Pm)) {
    $(threePmEL).removeClass('past');
    $(threePmEL).addClass('present');
  } else if (dayjs().isBefore(time3Pm)) {
    $(threePmEL).removeClass('past');
    $(threePmEL).addClass('future');
  }
  // between 4-5
  if (dayjs().isBetween(time4Pm, time5Pm)) {
    $(fourPmEL).removeClass('past');
    $(fourPmEL).addClass('present');
  } else if (dayjs().isBefore(time4Pm)) {
    $(fourPmEL).removeClass('past');
    $(fourPmEL).addClass('future');
  }
  // between 5-6
  if (dayjs().isBetween(time5Pm, time6Pm)) {
    $(fivePmEL).removeClass('past');
    $(fivePmEL).addClass('present');
  } else if (dayjs().isBefore(time4Pm)) {
    $(fivePmEL).removeClass('past');
    $(fivePmEL).addClass('future');
  }
}

$('.saveBtn').on('click', function () {

  var textContent = $('textarea').val();
  console.log(textContent);
})

function saveDetails() {
  localStorage.setItem('details', JSON.stringify(details));
}

changeTimeStatus();