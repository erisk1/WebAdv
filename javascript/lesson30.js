// var input = document.getElementById("input");
// var button = document.getElementById("btn");
// var text = document.getElementById("h1");

// button.onclick = function(){
//     text.innerHTML = (input.value >10)
//         h1.innerHTML= "input value is greater than 10";

        
// }
function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM"
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
}

var oneSecond = 100;
    setInterval(showCurrentTime, oneSecond);