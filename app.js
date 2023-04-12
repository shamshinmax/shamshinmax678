const times = document.getElementById("startTime");
let btn = document.getElementById("btn");
var time = 1;
startTime.addEventListener("input", () => {
    time = startTime.value;
    console.log(time);
}, false);
btn.addEventListener("click", function(){
    console.log(times);
    
});
