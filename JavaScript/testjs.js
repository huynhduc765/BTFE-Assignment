var json = require('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json'); //(with path)
const {users} = json;
//console.log(users); // output 'all data of users'

//--Cau1
 let myArray = users;
// for(let i = 0; i < myArray.length; i++){

//    console.log(myArray[i].id + myArray[i].first_name);
// }

myArray.forEach(function(element) {
    console.log(element.first_name +" "+element.last_name);
});

//--Cau2


// function cau1(){
//     var json = JSON.parse(data);
// }
// fs.readFile('./content.json', (err, data) => {
//     if (err)
//       console.log(err);
//     else {
//       var json = JSON.parse(data);
//     //your code using json object
//     }
// })
// Synchronous
// var json = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json').toString());