const times = document.getElementById("startTime");
let tg = window.Telegram.WebApp;
console.log(times);
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");
var time = 1;

startTime.addEventListener("input", () => {
    time = startTime.value;
}, false);


btn.addEventListener("click", function(){
    
    tg.MainButton.setText("ok");
    tg.MainButton.show();
    tg.sendData(time);
});
