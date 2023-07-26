// TODO: Window
// Window is a top level entitiy in which DOM, BOM, JS Core exists.
// in other words, in 'Window' allt eh function of JavaScript exists.
console.log("Hello");
window.console.log("Kaise ho!");

alert('window.console.log')
window.alert('Alert');

// Window Object
// Things which are not the part of the language, but that things are provided to you by the browser you are working on. Like console, document, settimeout and many more (you can find them in inspect element)
// to use it :- write "window" in console and then click on the drop down menu
var a = 12;
let b = 12;

// if you see in browser "window"
// then the a = 12 inside the "window" and b = 12 wasn't shown.
// but it is not good, by this "var" exposses your variable and data to everyone, which is not good. So that's why in let this was not given


console.log();


// TODO: DOM (Document Object Model)
// In this all the code of the webiste, whether it was HTML  or CSS code was converted into JS Object
console.log(document);


console.log();


// TODO: BOM
// It allows Js to talk to the browser about the matter or things (like location, history, etc.) other than the content of the page.