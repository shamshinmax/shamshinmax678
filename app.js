
let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
let place = document.getElementById("selection").value;

var time = 0;


startTime.addEventListener("input", () => {
    time = startTime.value;
}, false);


btn.addEventListener("click", function(){
    
    tg.MainButton.setText("ok");
    tg.MainButton.show();
    tg.sendData(time, place);
});
