let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function() {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        console.log("Switched ON");
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = "transparent";
        console.log("Switched OFF");
        flag = 0;
    }
});