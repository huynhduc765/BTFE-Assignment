var json = require('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json'); //(with path)
const {users} = json;
//console.log(users); // output 'all data of users'

    //--Exercise 1: forEach
// let myArray = users;
// for(let i = 0; i < myArray.length; i++){

//    console.log(myArray[i].id + myArray[i].first_name);
// }


// function printmyArray(users){
// var myArray = users;
// myArray.forEach(function(element) {
//     element.first_name +" "+element.last_name;
// });
// }
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// let myArray = users;
// for(let i = 0; i < myArray.length; i++){

//    console.log(myArray[i].id + myArray[i].first_name);
// }


// function printArray(myArray){
//     for(let i = 0; i < myArray.length; i++){

//         console.log(myArray[i].id + myArray[i].first_name);
//      }
      
// }
// printArray(myArray)

// var x = printmyArray(users.first_name,users.last_name);
// console.log(x);
/* function ex
var x = myFunction(4, 3);
console.log(x);
function myFunction(a, b) {
  return a * b;
}
*/

// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
 
// console.log(other);
// // => [1, 2, 3, [4]]
 
// console.log(array);
// // => [1]
// const myArray1 = [1,2,3,4];
// const sum = myArray1.reduce((acc,currValue,currIndex,array)=>{
//   return acc+currValue;
// },0);
// const agv = sum /myArray1.length;
// console.log(myArray1);
// console.log(agv);



// const myArray1 = users;
// const sum = myArray1.reduce((acc,currValue,currIndex,array)=>{
//   return acc+currValue;
// },0);
// const agv = sum /myArray1.length;
// console.log(myArray1);
// console.log(agv);

// var initialValue = 0;
// const reduced = users.reduce((acc, item ,array) => {
//    acc = item.age;
//   return acc += item.age;
//   //acc=item.age;

// },initialValue);

// console.log(reduced);


var initialValue = 0;
var sum = users.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age
    ,initialValue
);
const agv = sum /users.length;

console.log(sum); 
console.log(agv);



