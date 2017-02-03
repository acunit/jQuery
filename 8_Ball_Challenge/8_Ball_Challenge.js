function enter(x) {
  if (x.keyCode == 13) {

  }
}

$(document).ready(function() {
  var responses = "Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, Do the opposite, Your answer here.".split(",");
  //^^^ Takes a string and seperates it into an array using .split(",") to split the string with every comma

  $("button").on("click", function() {
  //  alert($("#question").val());
    var resp = responses[getRandomInt(0, responses.length-1)] //gets a random response
    $("#answer").text($("#question").val() + " " + resp);
    $("#question").val("");
  });

});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //gets a random number between min and max
}
