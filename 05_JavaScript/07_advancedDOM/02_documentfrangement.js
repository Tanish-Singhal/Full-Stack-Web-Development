// adding 100 para
let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = "This is a para " + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(newElement);


console.log("This took " + (t2 - t1) + " ms");

// in this case there is 1 Reflow, 1 Repaint