var car;
var speed;

$(document).ready(function () {


  $("#submit").on("click", function() {
    $(".reg").hide();
    $("#carInfo").text($("#make").val() + " / " + $("#model").val() + " / " + $("#year").val());
    $(".info").show();
    car = makeCar($("#make").val(), $("#model").val(), $("#year").val())
  });

  $("#increase").on("click", function() {
    car.accelerate();
  });

  $("#decrease").on("click", function() {
    car.brake();
  });



})


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeCar(make, model, year){
 //This is the closure
 speed = 0;
 return {
   make: make,
   model: model,
   year: year,
   topSpeed: 110,
   getCar: function() {
     return this.make + " " + this.model + " " + this.year;
   },
   getSpeed: function(){ return speed;},
   accelerate: function() {
     if (speed < this.topSpeed) {
       speed+=Math.ceil((this.topSpeed-speed)/5);
       if(speed>this.topSpeed*(4/5)){
         $("#carSpeed").addClass("fast");
         console.log("Speed: " + speed + " topSpeed: " + this.topSpeed);
       }
       $("#carSpeed").text(speed + " mph");
       $("#decrease").show();

     }
     else if(speed===this.topSpeed){
       $("#increase").hide();
     }
   },
   brake: function() {
    if (speed > 0) {
      speed-=getRandomInt(0,speed/2)
      $("#decrease").show();
    }
    else if(speed===0){
      $("#decrease").hide();
    }
    if(speed<this.topSpeed*(4/5)){
      $("#carSpeed").removeClass("fast");
    }
      $("#carSpeed").text(speed + " mph");
      $("#increase").show();
    },
   park: function() {speed=0}
 }
}
