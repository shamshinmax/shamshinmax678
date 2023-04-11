let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");

var seltheme = document.getElementById("selectID");
console.log(seltheme)
btn.addEventListener("click", function(){
    
    tg.MainButton.setText("ok");
    tg.MainButton.show();
    tg.sendData(seltheme);
});
