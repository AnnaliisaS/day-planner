let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let currentHour24= parseInt(moment().format('HH'));
let hour = parseInt(hourNow);


$('#currentDay').append(timeNow);

let nineAm = $('#slot1').text();
let tenAm = $('#slot2').text();
let elevenAm = $('#slot3').text();
let twelveAm = $('#slot4').text();
let onePm = $('#slot5').text();
let twoPm = $('#slot6').text();
let threePm = $('#slot7').text();
let fourPm = $('#slot8').text();
let fivePm = $('#slot9').text();

hourColor();

function hourColor() {
  // checks whether or not the time is between 9am and 5pm (5pm is 17 in the 24 hour clock)
  if(currentHour24 >= 9 && currentHour24<= 17) {
    //   since our slot numbers start at 1, i must start at 1
    for (let i = 1; i <=9 ; i++) { 
     let hour = parseInt($('#slot' + i).text());
      if (hour < 9) {
        hour = hour + 12;
      }  
    //   sets the current hour to red
      if (hour == currentHour24) {
        $('#textInput' + i).css('background-color', 'red');
        continue;
      }
    //   if has a value less than the current hour, sets color to grey
      if (hour < currentHour24) {
        $('#textInput' + i).css('background-color', 'lightgray');
    
      } else {
        $('#textInput' + i ).css('background-color', 'lightgreen');
      }
    }
  }
}



