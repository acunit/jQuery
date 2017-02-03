  var buttonClicked = 0;

$(document).ready( function(){
  $("button").on("click", function() {
    validator();
    buttonClicked++;
    console.log(buttonClicked);
  });
})

function validator() {
  if (buttonClicked > 3) {
    alert("Button off");
    $("button").off("click");
  }
  var userId = $("#uid").val();
  var password = $("#pwd").val();
  if (userId !== password) {
    $("#crit1").text("Username and password the same? No");
  } else {
    $("#crit1").text("Username and password the same? Yes");
    $("#uid").val("");
    $("#pwd").val("");
  }
  if (userId.length >= 6) {
    $("#crit2").text("Username and password longer than 6? Yes");
  } else {
    $("#crit2").text("Username and password longer than 6? No");
    $("#uid").val("");
  }
  if (password.length >= 6) {
    $("#crit2").text("Username and password longer than 6? Yes");
  } else {
    $("#crit2").text("Username and password longer than 6? No");
    $("#pwd").val("");
  }
  if (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")) {
    $("#crit3").text("Username contains !#$? No");
  } else {
    $("#crit3").text("Username contains !#$? Yes");
    $("#uid").val("");
  }
  if (password.includes("!") || password.includes("#") || password.includes("$")) {
    $("#crit4").text('Password contains !#$? Yes');
  } else {
    $("#crit4").text('Password contains !#$? No');
    $("#pwd").val("");
  }
  var hasNumber = false; //a boolean variable that will be set to true if our password has a number
  var pwdArray = password.split(""); //an array of our password, split by character
  pwdArray.forEach(function(element){ //for every element in our password array
    if(!isNaN(parseInt(element))){ //if the parseInt elemet is <span class="red">No</span>T <span class="red">No</span>t a Number
      hasNumber=true; //then it is a number and we set hasNumber to true
    }
  })
  if(hasNumber===true){
    $("#crit5").text('Password contains digit? Yes');
  } else {
    $("#crit5").text('Password contains digit? No');
    $("#pwd").val("");
  }

  var hasUpper = false;
  var hasLower = false;

  pwdArray.forEach(function(element){
    if(element.charCodeAt(0)>=65 && element.charCodeAt(0)<=90){
      hasUpper=true;
    }
    else if(element.charCodeAt(0)>=97 && element.charCodeAt(0)<=122){
      hasLower=true;
    }
  })

  if(hasUpper && hasLower){
    $("#crit6").text('Password has upper and lower case? Yes');
  } else {
    $("#crit6").text('Password has upper and lower case? No');
    $("#pwd").val("");
  }
}
