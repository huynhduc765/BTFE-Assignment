var json = require('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json'); //(with path)
const {users} = json;
//console.log(users); // output 'all data of users'


var expr = '11';
   switch (expr) {
    case '1': //--Exercise 1: forEach
        var myArray = users;
        myArray.forEach(function(element) {
            console.log(element.first_name +" "+element.last_name);
        });
      break;

    case '2':  //Exercise 02: filter User filter to find out which user is male and age is under 40         
        let myArray2 = users;
        const ageAndGender = users => users.age < 40 && users.gender === "Male";
        const arr3 = myArray2.filter(ageAndGender);
        console.log('arr3', arr3);
      break;

    case '3': //Exercise 03: map Same like Exercise 01 but you must use map
        // let myArray3 = users;
        // myArray3.map(function(element) {
        //     console.log(element.first_name +" "+element.last_name);
        // });

        let myArray3 = users.map((username, index, users) => {
          return username.first_name +" "+username.last_name 
      })
        console.log(myArray3)
      break;

    case '4'://--Exercise 4 camelCase chữ đầu thường chữ sau hoa (key) Last_Name =>lastName
        const transformed = users.map(({id, last_name: lastName, first_name: firstName,email,gender,salary }) => ({id, lastName, firstName, email,gender,salary }));
        console.log(transformed);
      break;
      
    case '5'://--Exercise 5 Use reduce to calculate the average age in users
            
        var initialValue = 0;
        var sum = users.reduce(
            (accumulator, currentValue) => accumulator + currentValue.age
            ,initialValue
        );
        const agv = sum /users.length;

        console.log(sum); 
        console.log(agv);
      break;
    case '6'://--Exercise 6: reduce cont. Use reduce to implement Exercise 01 – Exercise 4

        var myArrayBai3 =myArrayFilter.reduce((a,currentValue)=>{
            a.push(currentValue);
            return a;
        },[]);
        //console.log(myArrayBai3); 

            const myArrayFilter=users;
        var myArrayBai2 =myArrayFilter.reduce((a,currentValue)=>{
        if(currentValue.gender==='Male'&&currentValue.age<40)
            {
            a.push(currentValue);
            }
            return a;
        },[]);
        //console.log(myArrayBai2);
        var myArrayBai1 =myArrayFilter.reduce((a,currentValue)=>{
            a.push(currentValue.last_name +" "+ currentValue.first_name);
            return a;
        },[]);
        //console.log(myArrayBai1); 

        const reduceBai4_reducer = (acc, cur) => {
            var result = {};
            result.id = cur.id;
            result.firstName = cur.first_name;
            result.lastName = cur.last_name;
            result.email = cur.email;
            result.gender = cur.gender;
            result.age = cur.age;
            result.salary = cur.salary;
            acc.push(result);
            return acc;
          };
          var reduceBai4 = users.reduce(reduceBai4_reducer, []);
         //console.log(reduceBai4);
          

        break;
    case '7':  //--Exercise 7:Implement map Write a function named map that takes an array, and a transformation function.
    //Map function have the same functionality like Array.prototype.map
        
    let myArray7 = users;
        function Map1(myArray7, callback){
            var returnValue = []
            for(var i=0 ; i< myArray7.length; i++){
                var newElements = callback(users)
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
      
      case '8':    //--Exercise 8:Implement filter Write a function named filter that takes an array, and a predicate function.
      //Map function have the same functionality like Array.prototype.filter      
        let myArray8=users;
        function filter1(myArray8,filterFunc){
        const filterArr=[];
        for(let i=0;i<myArray8.length;i++){
        const result = filterFunc(myArray8[i],i,myArray8);
        if(result)
        filterArr.push(myArray8[i]);
        }
        return filterArr;
        }
        var x=filter1(myArray8,(a,b,c)=>{
        console.log(a);
        });
        console.log(x);
         break;

      case '9':
      // Exercise 09: Implement reduce Write a function named reduce that take an array, a function and a default value.
          // Map function have the same functionality like Array.prototype.reduce
          
      let arr9=users;
      function reduce1(arr9,reducer,initialValue){
          let accumulator = initialValue === undefined ? 0 : initialValue
          for(let i=0;i<arr9.length;i++)
              accumulator = reducer(accumulator, arr9[i], i, arr9);
          return accumulator;
      }
      var x2=reduce1(arr9,(a,b,c,d)=>{
          console.log(d);
      });
      // console.log(x2)
         break;

      case '10':
      // Exercise 10: Implement map, filter using reduce Reuse function reduce of Exercise 09 to write function map (Exercise 07) and function filter (Exercise 08) without using loops.
          
 //---------------Implement map using reduce--------------------------
     var reduce = function(array, value, defaultvalue){
            defaultvalue = value(defaultvalue, array)
            return defaultvalue;
        }
        function map(arr10, callback){
            var returnValue = []      
            var newElements = callback(reduce(arr10, (acc,elem)=>elem , ""))
            returnValue.push(newElements)       
            return returnValue
        }
        var x = map(user,(a)=>{
            console.log(a)
        });
      //  ---------------Implement filter using reduce--------------------------
        var reduce = function(array, value, defaultvalue){
          defaultvalue = value(defaultvalue, array)
          return defaultvalue;
      }
      function filter(arr10, callback){
          var returnValue = []      
          var newElements = callback(reduce(arr10, (acc,elem)=>elem , ""))
          returnValue.push(newElements)       
          return returnValue
      }
      var x = filter(user,(a)=>{
          //console.log(a)
      });
      
         break;

      case '11':  // Exercise 11: Using reduce
      //1.	Use reduce to create function sum which will calculate the sum of every item in array.
      //2.	Use reduce to create function product which will calculate the product of every item in array.
      //3.	Use reduce to create function reverse which will reverse the position of every item in array.

        //câu 1 
        const reduce_product  = function(array){
        return array.reduce((acc,num) => acc + num.id,0); 
        }    
        //console.log(reduce_product(users));
           
        //câu 3 
        let myArray11 = users;
        function Reverse(myArray7, callback){
            var returnValue = [];
            for(var i=myArray7.length-1 ; i>=0 ; i--){
                var newElements = callback(users[i])
                returnValue.push(newElements)
            }
            return returnValue
        }
        var x = Reverse(myArray11,(a,b,c)=>{
            console.log(a)
        // console.log(b)
        //   console.log(c)
        });


        break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  

