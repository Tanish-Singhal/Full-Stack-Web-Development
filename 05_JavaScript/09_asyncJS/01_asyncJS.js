// Synchronous Js => jab tak wk command complete na ho, tab tak dusra command ececute nhi hoga
// Asynchronous Js => saare kaam ek sath shuru kardo, jiska answer phele aa jaaye uska answer dedena

// FIXME: If the code contain (setTimeout, setInterval, promises, fetch, axios, XMLHttpRequest) that means you write Asynchronous code. otherwise you write Synchronous code.


// TODO: Why we write Async Js code?
// kai baar hamara final code depend karta hai kisi aur k server par. Is case me hume nhi pata hota ki hamara answer uske server se kab laut kar aayega. To hum iss wajah se Synchronous code nhi likh sakte.
// isse nipatne k liye hum log Asynchronous code likhte hai taaki blocking na ho and jab bhi hamara answer aaye, then hamare answer k respect me chalne wala code chal jaaye


// FIXME: callback function
// setTimeout(callback(), time)
console.log("hey!");
setTimeout(function(){
    console.log("hey 2!");      // so this function was run after 2 sec
}, 2000)                        // 2 sec


// TODO: Working of Synchronous and Asynchronous Code
// there are two types of stack: Main stack and Side stack
// the things which take things fro side stack to the main stack are called Event Loop.
console.log("hey!");
setTimeout (function() {
    console.log("hey 2!");      // so this function was run after 2 sec
}, 2000)                        // 2 sec
console.log("hey 3!");

// Story: - Synchronous code to main me daalkar chala diya, and Async ko side stack me daal diya, then main stack k saare task chala diya and then side stack k saare code ko ek ek karke (jis jis ka kaam hota jaa rha hai) unko main stack me daalkar chala diya

// FIXME: JavaScript can do a task at a time, but it is asynchronous also. IT is a Single Threaded Language.