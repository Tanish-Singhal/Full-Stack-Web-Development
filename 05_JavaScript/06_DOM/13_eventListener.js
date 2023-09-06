// This code will execute, ehen we click of the h1

let a = document.querySelector("h1");

a.addEventListener("click", function() {
    a.innerHTML = "Change ho gya hu me.";
    console.log("Hey, ho hya change!");
    a.style.color = "yellow";
    a.style.backgroundColor = "black";
})