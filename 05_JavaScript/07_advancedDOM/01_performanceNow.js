// It is used to meansure the time taken by the code to execute the code
// for this you will have to use performance now at starting and at the end of the code


const t1 = performance.now();

// adding 100 para
for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = "This is a para " + i;

    document.body.appendChild(newElement);
}

const t2 = performance.now();

console.log("This took " + (t2 - t1) + " ms");

// in this there is 1 Reflow, and 1 Repaint