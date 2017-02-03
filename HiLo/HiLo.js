function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand = getRandomInt(1,100);
var guesses = 6;
console.log(rand);

$(document).ready(function() {
  $("button").on("click", function() {
    //alert($("#guess").val());
    hiLo();
    // $("#guessLog").text("Guess Log:");
    $("#guessLog").append("<li>" + $("#guess").val() + "</li>")
  })
})

// function guessLogger() {
//   $("#guessLog").text("Guess Log:");
//   $("#guessLog").append("<li>" + $("#guess").val() + "</li>")
// }


  function hiLo() {
  if(guesses<=2){
    $("#feedback").addClass("warning")
  }

  if(guesses<=0){
    $("#feedback").text("Oh no! You lost!");
    $("button").hide();
    $("input").hide();
  }
  else{
    if(parseInt($("#guess").val())===rand){
      $("#feedback").text("Oh yay! You won!");
      $("button").hide();
      $("input").hide();
    }
    else if(parseInt($("#guess").val())>rand){
      $("#feedback").text("You're too hi!");
    }
    else if(parseInt($("#guess").val())<rand){
      $("#feedback").text("You're too lo!");
    }
    guesses--;
    $("#feedback").append("<p>You have " + (guesses+1) + " guesses left.</p>");
  }

}
