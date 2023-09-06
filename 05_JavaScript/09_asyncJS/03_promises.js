// We have a promise code.
// so now there are two states:
// first, the code is working
// second, the code is not working

// as this code is woking in future, so we can save this code inside a variable => Pending State

// if the code is in "Resolve State" => "then" will work
// if the code is in "Reject State" => "catch" will work

// FIXME: it is important to write new before Promise as Promise is a constructor function

let ans = new Promise((res, rej) => {
    
    if (true) {
        return res();
    } else {
        return rej();
    }
});

ans
    .then(function() {
        console.log("Resolve ho gya.");
    })
    .catch(function() {
        console.log("Reject ho gya.");
    })




console.log("");




// TODO: Ques) user will ask for a number bwtween 0 to 9 and if the number is below 5 resolve if not reject
var uwu = new Promise((res1, rej1) => {
    let num = Math.floor(Math.random()*10);

    if (num < 5) {
        return res1();
    }
    else {
        return rej1();
    }
});

uwu
    .then(function() {
        console.log("Number is smaller then 5");
    })
    .catch(function() {
        console.log("Number is greater than 5");
    })




console.log("");




// TODO: there are lot of Async Task. the order of the task was random, but you want to print the task in order.
// order:
// 1. sabse pahele ghar par aao
// 2. gate kholo and gate lagao
// 3. khana banao and khana khao
// 4. incognito mode chalao
// 5. sooja oo

let ArraArra = new Promise(function(res2, rej2){
    return res2("1. sabse pahele ghar par aao");
})

let p2 = ans.then(function(data){
            console.log(data);

            return new Promise(function(res2, rej2){
                return res2("2. gate kholo and gate lagao");
            })
        })

let p3 = p2.then(function(data){
            console.log(data);

            return new Promise(function(res2, rej2){
                return res2("3. khana banao and khana khao");
            })
        })

let p4 = p3.then(function(data){
            console.log(data);

            return new Promise(function(res2, rej2){
                return res2("4. incognito mode chalao");
            })
        })

let p5 = p4.then(function(data){
            console.log(data);

            return new Promise(function(res2, rej2){
                return res2("5. sojaa oo");
            })
        })