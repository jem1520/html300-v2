
//Setup JQuery function
$(function () {
  //Create variables and array
        const input = $('.input'),
              submit = $('.submit'),
              resultSum = $('.sum'),
              findInArray =[12,14,16,18,36,72,216];
//Link javascript to submit button in html
submit.on('click', function () {
        //Take the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        //Varify that the user input is a number
        if (!isNaN(num)) {
        //See if number input is greater than any in array
        const sum = findInArray.filter(value => value > num);
        //Show result on the page
        resultSum.text(sum);
        //Reset the input value to nothing
        input.val('');
      }
   });
});

//Setup JQuery function
$(function () {
  //Create variables
        const input = $('.inputtwo'),
              submit = $('.submittwo'),
              resultSum = $('.sumtwo'),
              word = "magic";
//Link javascript to submit button in html
submit.on('click', function () {
        //Pickup input value
        val = input.val();
        //See if input matches anything in keyword
        const searchword = word.includes(val);
        resultSum.text(searchword);
        //Reset the input value to nothing
        input.val('');
   });
});

//Setup JQuery function
$(function () {
  //Create variables
        const input = $('.inputthree'),
              submit = $('.submitthree'),
              resultSum = $('.sumthree'),
              numberArray = [10,14,16,20,35,84,345];
//Link javascript to submit button in html
submit.on('click', function () {
        //Take the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        //Varify that the user input is a number
        if (!isNaN(num)) {
        //Divide array by input
        const sum = numberArray.map(value => value / num);
        //Show result on the page
        resultSum.text(sum);
        //Reset the input value to nothing
        input.val('');
      }
   });
});

$(function () {
        //Create variables and data
        const input = $('.inputfour'),
              submit = $('.submitfour'),
              resultSum = $('.sumfour'),
              greeting = "Thanks for visiting this page"
//Link javascript to submit button in html
submit.on('click', function () {
        //Pickup input value
        val = input.val();
        //Add input value to greeting string
        const thanks = greeting + (` ${val}!`);
        //Show result on page
        resultSum.text(thanks);
        //Reset the input value to nothing
        input.val('');
   });
});
