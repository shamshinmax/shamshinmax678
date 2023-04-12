let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");


var time = document.getElementById("startTime").value;


btn.addEventListener("click", function(){
    
    tg.MainButton.setText("ok");
    tg.MainButton.show();
    tg.sendData(time);
});
