let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var seltheme = document.getElementById(“selectID”).value
    tg.MainButton.setText("ok");
    tg.MainButton.show();
    tg.sendData(seltheme, "время");
});
