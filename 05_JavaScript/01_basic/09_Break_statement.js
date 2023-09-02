// TODO: Break and Continue

// Break (cursor came out of the nearest loop)
for (let p = 1; p < 10; p++) {
    if (p%7 === 0) {
        console.log("breaking now");
        break;
    }
    console.log(p);
}
console.log();

// Continue (it will take back to the nearest loop)
for (let r = 0; r < 10; r++) {
    if (r%3 ===0) {
        continue;
    }
    console.log(r);
}
console.log();