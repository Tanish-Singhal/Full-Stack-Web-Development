// fs is a library in node js, which has capability to read things from a file
const fs = require("fs");

function fileRead(err, data) {
    console.log(data);
};

fs.readFile("a.txt", "utf-8", fileRead);