let countVal = document.querySelector("#counter");

const increment = () => {
    let val1 = parseInt(countVal.innerHTML);      // extract the value from the vounter
    val1 = val1 + 1;
    countVal.innerHTML = val1;
}

const decrement = () => {
    let val2 = parseInt(countVal.innerHTML);      // extract the value from the vounter
    val2 = val2 - 1;
    countVal.innerHTML = val2;
}