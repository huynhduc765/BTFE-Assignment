var json = require('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json'); //(with path)
const {users} = json;
//console.log(users); // output 'all data of users'

    //--Exercise 1: forEach
// let myArray = users;
// for(let i = 0; i < myArray.length; i++){
//    console.log(myArray[i].id + myArray[i].first_name);
// }

// let myArray = users;
// function forEach(myArray, callback){
//     for(var i=0 ; i< myArray.length; i++){
//         callback(myArray[i].first_name,i,myArray)
//     }
// }


  

// var myArray = users;
// function printmyArray(){
// myArray.forEach(function(element) {
//     console.log(element.first_name +" "+element.last_name);
// });
// }

    //Exercise 02: filter User filter to find out which user is male and age is under 40

// let myArray1 = users;  //get age <40
// const arr1 = myArray1.filter(users => users.age < 40);
// console.log('arr1', arr1);

// let myArray2 = users;
// const arr2 = myArray2.filter(users => users.gender === "Male");
// console.log('arr2', arr2);

// let myArray3 = users;
// const ageAndGender = users => users.age < 40 && users.gender === "Female";
// const arr3 = myArray3.filter(ageAndGender);
// console.log('arr3', arr3);

    //Exercise 03: map Same like Exercise 01 but you must use map

// let myArray03 = users;
// myArray03.map((element)=> {
//     console.log(element.first_name +" "+element.last_name);
// });

//var kvArray = [users];
//Sử dụng hàm khởi tạo Map để chuyển một 2D key-value Array vào một map
//var myMap = new Map(kvArray);
//myMap.get(users.id); // returns "value1"

//Sử dụng hàm Array.from để chuyển một map vào một 2D key-value Array
//console.log(Array.from(myMap)); // Sẽ hiện ra Array giống hệt kvArray
// Hoặc sử dụng duyệt keys hoặc values và chuyển chúng thành một mảng
//console.log(Array.from(myMap.keys())); // Sẽ hiện ["key1", "key2"]

    //--Exercise 4 camelCase chữ đầu thường chữ sau hoa (key) Last_Name =>lastName
// const transformed = users.map(({id, last_name: lastName, first_name: firstName,email,gender,salary }) => ({id, lastName, firstName, email,gender,salary }));
// console.log(transformed);
    
    //--Exercise 5 Use reduce to calculate the average age in users
// var initialValue = 0;
// var sum = users.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.age
//     ,initialValue
// );
// const agv = sum /users.length;

// console.log(sum); 
// console.log(agv);

    //--Exercise 6: reduce cont. Use reduce to implement Exercise 01 – Exercise 4


    //--Exercise 7:Implement map Write a function named map that takes an array, and a transformation function.
        //Map function have the same functionality like Array.prototype.map

// let myArray = users;
//     function Map1(myArray, callback){
//         var returnValue = []
//         for(var i=0 ; i< myArray.length; i++){
//             var newElements = callback(myArray[i].first_name+ '\t' +myArray[i].last_name)
//             returnValue.push(newElements)
//         }
//         return returnValue
//     }
//     var x = Map1(myArray,(a,b,c)=>{
//         console.log(a)
//        // console.log(b)
//      //   console.log(c)
//     });
//    // console.log(x);

var expr = '5';
   switch (expr) {
    case '1':
        var myArray = users;
        myArray.forEach(function(element) {
            console.log(element.first_name +" "+element.last_name);
        });
      break;

    case '2':            
        let myArray2 = users;
        const ageAndGender = users => users.age < 40 && users.gender === "Female";
        const arr3 = myArray2.filter(ageAndGender);
        console.log('arr3', arr3);
      break;

    case '3':
        // let myArray3 = users;
        // myArray3.map(function(element) {
        //     console.log(element.first_name +" "+element.last_name);
        // });

        let myArray3 = users.map((username, index, users) => {
          return username.first_name +" "+username.last_name 
      })
        console.log(myArray3)
      break;

    case '4':
        const transformed = users.map(({id, last_name: lastName, first_name: firstName,email,gender,salary }) => ({id, lastName, firstName, email,gender,salary }));
        console.log(transformed);
      break;
      
    case '5':
            
        var initialValue = 0;
        var sum = users.reduce(
            (accumulator, currentValue) => accumulator + currentValue.age
            ,initialValue
        );
        const agv = sum /users.length;

        console.log(sum); 
        console.log(agv);
      break;
    case '6':
    console.log('Cherries are $3.00 a pound.');

    case '7':
      
let myArray7 = users;
    function Map1(myArray7, callback){
        var returnValue = []
        for(var i=0 ; i< myArray7.length; i++){
            var newElements = callback(myArray7[i].first_name+ '\t' +myArray7[i].last_name)
            returnValue.push(newElements)
        }
        return returnValue
    }
    var x = Map1(myArray7,(a,b,c)=>{
        console.log(a)
       // console.log(b)
     //   console.log(c)
    });
   // console.log(x);

      break;
      
      case '8':
      console.log('Cherries are $3.00 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  

    //--Exercise 8:Implement filter Write a function named filter that takes an array, and a predicate function.
        //Map function have the same functionality like Array.prototype.filter

    // Exercise 09: Implement reduce Write a function named reduce that take an array, a function and a default value.
        // Map function have the same functionality like Array.prototype.reduce
        
    // Exercise 10: Implement map, filter using reduce Reuse function reduce of Exercise 09 to write function map (Exercise 07) and function filter (Exercise 08) without using loops.
        
    // Exercise 11: Using reduce
        //1.	Use reduce to create function sum which will calculate the sum of every item in array.
        //2.	Use reduce to create function product which will calculate the product of every item in array.
        //3.	Use reduce to create function reverse which will reverse the position of every item in array.




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