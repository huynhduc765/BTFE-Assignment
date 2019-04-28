var json = require('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json'); //(with path)
const {users} = json;
//console.log(users); // output 'all data of users'

    //--Cau1 forEach
// let myArray = users;
// for(let i = 0; i < myArray.length; i++){

//    console.log(myArray[i].id + myArray[i].first_name);
// }
/*
let myArray = users;
function printmyArray(){
myArray.forEach(function(element) {
    console.log(element.first_name +" "+element.last_name);
});
}
printmyArray();
*/
    //--Cau2 filter
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

    //--Cau 3 Map
// let myArray = users;
// myArray.map(function(element) {
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

    //--Cau 4 camelCase chữ đầu thường chữ sau hoa (key) Last_Name =>lastName






    
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