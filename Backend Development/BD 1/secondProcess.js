// Fetch

function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFun(result) {
    result.json().then(logResponseBody);
}

let sendObj = {
    method: "GET"
};

fetch("http://localhost:3000/handleSum?counter=10", sendObj).then(callbackFun);
// This is the alternative approach to Callback Function called Promise