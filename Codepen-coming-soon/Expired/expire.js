// your time 👇
var yourTime = new Date("aug 27, 2020 15:37:25").getTime();
// get demo element 
var demo = document.querySelector(".demo");
// create counter
var x = setInterval(function(){
  // get now time
  var now = new Date().getTime();
  
  var distance = yourTime - now;
  
  var _second = 1000; 
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  
  var day = Math.floor(distance / _day);
  var hour = Math.floor((distance % _day) / _hour);
  var minute = Math.floor((distance % _hour) / _minute);
  var second = Math.floor((distance % _minute) / _second);
  
  //demo.innerHTML = day + " D " + hour + " H " + minute + " M " + second + " S ";
  
  demo.innerHTML = `${day} d ${hour} h ${minute} m ${second} s`;
  // this condition is for expired times
  
  if(distance < 0){
     clearInterval(x);
    demo.innerHTML = "expired";
  }
  
},1000);