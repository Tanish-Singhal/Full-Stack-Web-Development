// koi bhi aisa function jisme hum async code linkenge, kyuki async code hai to hum promises ka use kar sakte hai. 
// jab uska answer aayega, then hume then lagana padega
// us then ko lagane se bachne k liye hum, async await ka use kar sakte hai

function abcd() {
    fetch(`https://randomuser.me/api/`)
    .then (function(raw) {
        return raw.json();
    })
    .then (function(data) {
        console.log(data);
    });
};

abcd();
console.log(" ");

// jab bhi koi code async hai to hume uske liye wait karna padta hai, kyuki hume nhi pata uska answer kab aayega

async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans  = await raw.json();
    console.log(ans);
}

// awit will put that line of code into the side state.
// due to this first the line -> raw will execute and then line -> ans will execute