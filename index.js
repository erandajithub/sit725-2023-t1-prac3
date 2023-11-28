// var express = require("express")
// var app = express()
// const path = require('path');

// var port = 3000;

// //serve static files
// app.use('/', express.static(path.join(__dirname, '/public')));
// app.use('/home', express.static(path.join(__dirname, '/public', 'home.html')));

// //localhost:3000

// //index
// app.get('/', (req, res) => {

// });



// app.listen(port,()=>{
// console.log("App listening to: "+port)
// })

var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})