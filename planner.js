let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);

$('#currentDay').append(timeNow);