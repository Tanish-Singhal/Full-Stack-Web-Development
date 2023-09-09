// This code will execute, when we click of the h1

let a = document.querySelector("h1");

function eventFunction() {
    a.innerHTML = "Change ho gya hu me.";
    console.log("Hey, ho gya change!");
    a.style.color = "yellow";
    a.style.backgroundColor = "black";
}

// FIXME: to add a event-listener
a.addEventListener('click', eventFunction);

// FIXME: to remove a event-listener
// a.removeEventListener('click', eventFunction);