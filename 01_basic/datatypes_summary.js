//*******************premitive datatypes***************************//
// const score = 100;
// const isloggedin = false
// const outsidetemp = null
// let userEmailid;
// const id = Symbol('123')
// const bigNumber = 1234567n

// console.log(typeof score)
// console.log(typeof isloggedin)
// console.log(typeof outsidetemp)
// console.log(typeof userEmailid)
// console.log(typeof id)
// console.log(typeof bigNumber)

// @Abhi181998 ➜ /workspaces/learning-js (main) $ node 01_basic/datatypes_summary.js
// number
// boolean
// object
// undefined
// symbol
// bigint



//*********************refrencetypes or non premitive ****************/
//array
// const  Heros =["luffy","zoro","sanzi","sabo"]
// //object 
// let myobj = {
//     name:"abhishek",
//     age: 25,
// }
// // function 
// const myFunction=function(){
//     console.log("hello world");
// }
// console.log(typeof Heros);
// console.log(typeof myobj);
// console.log(typeof myFunction);

// @Abhi181998 ➜ /workspaces/learning-js (main) $ node 01_basic/datatypes_summary.js
// object
// object
// function
//https://262.ecma-international.org/5.1/#sec-11.4.3





//*************************************************************************************************//
 //stack is used with premitive type //heap is used with non primitive type

// Stack example

//  let username= "abhishek kumar"
//  another_name = username
//  another_name="dibakar pradhan"
//  console.log(another_name)
//  console.log(username)

//  output:
// @Abhi181998 ➜ /workspaces/learning-js (main) $ node 01_basic/datatypes_summary.js
// dibakar pradhan
// abhishek kumar

// Heap example:

// let userone={
//     email: "abhi@gmail.com",
//     phone: 82514,

// }
// let usertwo =userone
// usertwo.email= "abhi.ak222",
// console.log(userone);

// output

// @Abhi181998 ➜ /workspaces/learning-js (main) $ node 01_basic/datatypes_summary.js
// { email: 'abhi@gmail.com', phone: 82514 }

// @Abhi181998 ➜ /workspaces/learning-js (main) $ node 01_basic/datatypes_summary.js
// { email: 'abhi.ak222', phone: 82514 }