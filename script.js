// Need a variable with coding questions (5 or 6)
// Some way to generate random group of possible answers that tie into selected quiz question
// Timer will start at 75 seconds, for every wrong answer It will take a few seconds off the timer.
// Final score will be amount of time left after answering all questions.
// 

// Need a timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 75;
// Function that will set Timer to decrease by 1 second repeatedly until specified parameters are met, thus Halting the countdown.
function setTime() {
    // Sets interval in variable (Defines how often to repeat, In this case every second.) 
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time:" + secondsLeft ;
  
      if(secondsLeft === 0) {
        // Stops timer countdown function At specified point.
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);

}
setTime()
// Need some way to log score

// Need An event listener and function that will be able to tell if they answered question correctly
// Need an alert or message to appear that says Wrong or correct depending on user answer
// need an event lsitener that know's when you click "start game" to trigger the rest of the functions
// A way to log form submission at the end so User can input initials , pair that with High score and log it into list of high scores.
// A button that can clear highscores.