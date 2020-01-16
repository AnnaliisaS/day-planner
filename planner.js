let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let currentHour24= parseInt(moment().format('HH'));
let hour = parseInt(hourNow);


$('#currentDay').append(timeNow);

let nineAm = $('#slot1').text();
let tenAm = $('#slot2').text();
let elevenAm = $('#slot3').text();
let twelvePm = $('#slot4').text();
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

// on-click of save icon if there is a pre-exisitng value removes and replaces with existing value
// currently in the text field in local storage so there is not a bunch of duplicate entries
$('#btn1').click(function() {
    // removes any existing items 
    if($('#textInput1').val()) {
      localStorage.removeItem('textInput1');
    }
    localStorage.setItem(nineAm, $('#textInput1').val());
  });
  
  $('#btn2').click(function() {
    if($('#textInput2').val()) {
      localStorage.removeItem('textInput2');
    }
    localStorage.setItem(tenAm, $('#textInput2').val());
  });
  
  $('#btn3').click(function() {
    if($('#textInput3').val()) {
      localStorage.removeItem('textInput3');
    }
    localStorage.setItem(elevenAm, $('#textInput3').val());
  });
  
  $('#btn4').click(function() {
    if($('#textInput4').val()) {
      localStorage.removeItem('textInput4');
    }
    localStorage.setItem(twelvePm, $('#textInput4').val());
  });
  
  $('#btn5').click(function() {
    if($('#textInput5').val()) {
      localStorage.removeItem('textInput5');
    }
    localStorage.setItem(onePm, $('#textInput5').val());
  });
  
  $('#btn6').click(function() {
    if($('#textInput6').val()) {
      localStorage.removeItem('textInput6');
    }
    localStorage.setItem(twoPm, $('#textInput6').val());
  });
  
  $('#btn7').click(function() {
    if($('#textInput7').val()) {
      localStorage.removeItem('textInput7');
    }
    localStorage.setItem(threePm, $('#textInput7').val());
  })
  
  $('#btn8').click(function() {
    if($('#textInput8').val()) {
      localStorage.removeItem('textInput8');
    }
    localStorage.setItem(fourPm, $('#textInput8').val());
  })
  
  $('#btn9').click(function() { 
    if($('#textInput9').val()) {
      localStorage.removeItem('textInput9');
    }
    localStorage.setItem(fivePm, $('#textInput9').val());
  })

