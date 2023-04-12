var times = document.getElementById("startTime").value;
let tg = window.Telegram.WebApp;
console.log(times);
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");



btn.addEventListener("click", function(){
    
    tg.MainButton.setText("ok");
    tg.MainButton.show();
    tg.sendData(times);
});
