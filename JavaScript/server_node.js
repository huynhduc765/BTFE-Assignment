var fs=require('fs');
var data=fs.readFileSync('JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
//console.log(words);

const {users} = words;
console.log(users); // output 'testing'


// var x = words("users");
// console.log(x);

var express=require('express');

var app=express();

var server=app.listen(3030,listening);

function listening(){
console.log("listening..");
}
app.use(express.static('website'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


