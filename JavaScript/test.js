var json = require('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json'); //(with path)
const {users} = json;
/* function ex
var x = myFunction(4, 3);
console.log(x);
function myFunction(a, b) {
  return a * b;
}
*/

// for (let i = 0; i < users.length; i ++) {
//     if (users[i].age < 40 ) {
//       var newElements = callback(users)

//         small_animals.push(newElements)
//     }
//     return small_animals;
// }
//console.log(small_animals);
 
// let myArray7 = users;
// function Map1(myArray7, callback){
//     var returnValue = []
//     for(var i=0 ; i< myArray7.length; i++){
//       if (myArray7[i].age < 40 && myArray7[i].gender === "Male"  ) 
//         var newElements = callback(users)
//       returnValue.push(newElements)

//     }
//     return returnValue
// }
// var x = Map1(myArray7,(a,b,c)=>{
// //    console.log(a)
// // console.log(b)
// //   console.log(c)
// });


// let myArray8=users;
// function filter1(myArray8,filterFunc){
// const filterArr=[];
// for(let i=0;i<myArray8.length;i++){
// const result = filterFunc(myArray8[i],i,myArray8);
// if(result)
// filterArr.push(myArray8[i]);
// }
// return filterArr;
// }
// var x=filter1(myArray8,(a,b,c)=>{
// console.log(a);
// });
// // console.log(x);
// var initialValue = 0;

// const numbers = users // sums to 100

// const add = (a, b) =>
//   a + b
//   initialValue
//         const sum = numbers.reduce(add)

// console.log(sum);

// var numbers = users;

// var total = numbers.reduce(function(sum, value ,array) {
// return sum + value ;
// }, 0);

// console.log(total);



//var myArray = users;
//myArray.reverse(); 

//console.log(myArray) // ['three', 'two', 'one']

// var myArray = users.reduce(function(acc, user){
//   acc = acc.concat(user);
//   return acc.reverse();
// }, []);

// console.log(myArray); 

// function reverseString(users) {
//   return users.reduce((ret, character) => (character + ret));
//  }
//  reverseString(users)
// console.log(b)
//   console.log(c)

// const reduce = function(iterable, reduceFn, accumulator){
//   for(let i of iterable){
//     accumulator = reduceFn(accumulator , i)
//   }
//   return accumulator
// }

// console.log(reduce(users, (acc,elem)=>(acc,elem))) // Prints 6

// const camelCase = str => {
//   let string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
//                   .reduce((result, word) => result + capitalize(word.toLowerCase()))
//   return string.charAt(0).toLowerCase() + string.slice(1)
// }

// const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
// camelCase(users)  // "fooBar"

// let baz = users
// let camel = camelCase(baz)
// console.log(camel)  // "fooBar"

// let array12 = users;

// const camelCaseIt = string => string.toLowerCase().trim().split(/[.\-_\s]/g).reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));
// let baz ="truong_ocheo"
// let camel =camelCaseIt(baz);
// console.log(camel)

// function myFunc(theObject) {
//   theObject.brand = "Toyota";
// }
// var mycar = {
//   brand: "Honda",
//   model: "Accord",
//   year: 1998
// };

// console.log(mycar.brand);

// myFunc(mycar);

// console.log(mycar.brand);




// const ngu= function(array,value,defaultvalue){
//   for(let i=array.lenght-1; i>=0; i--){
//     defaultvalue = value(defaultvalue,array[i])
//     console.log(defaultvalue);
//   }
//   return "";
// }
// console.log(ngu(users,(acc,elem)=>elem,""));

// camelize = function camelize(str) {
//   return str.replace(/\W+(.)/g, function(match, chr)
//    {
//         return chr.toUpperCase();
//     });
// }
// var a= users;
// console.log(camelize(a));
// console.log(camelize("JavaScriptExercises"));

// ---------------Implement map using reduce--------------------------
// var reduce = function(array, value, defaultvalue){
//     defaultvalue = value(defaultvalue, array)
//     return defaultvalue;
// }
// function map(arr10, callback){
//     var returnValue = []      
//     var newElements = callback(reduce(arr10, (acc,elem)=>elem , ""))
//     returnValue.push(newElements)       
//     return returnValue
// }
// var x = map(user,(a)=>{
//     console.log(a)
// });