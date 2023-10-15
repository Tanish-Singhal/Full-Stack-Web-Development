const express = require ('express');
const app = express();

// In htnl, we can't perform claculation. if we try 1+2 it will print 1+2
// so we want Dynamic HTML, which is EJS
app.set("view engine", "ejs");

// configuration of the Static File
app.use(express.static('./public'));

// Template Engine
// Template Engine are the markup style jo ki baad me convert hojaayegi html me
// there are many other template engine like pug, ejs, jade HandlebarsJS, etc.
// but EJS is very very similar to HTML

// here we attach our ejs
app.get('/', function (req, res) {
    res.render("index", {age: 20});
});

app.get('/profile', function (req, res) {
    res.render("profile", {name: "Tanish Singhal"});
});
// That's how we can make the change in hte HTML page
// just write <%= name %> inthe HTML page where you want to make the changes accordign to the user  



// Error Handling
app.use('/error', function(req, res,next) {
    throw Error("I don't know, figure out yourself.");
});
// in this the throw Error will search for the errorHandler in the whole page and then the errorHandler will show you the error which you want to print
// by this you can hrow coustom error on the page

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
});



app.listen(3000);