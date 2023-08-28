//JSON iteration Using for, for in, for of, forEach

// To convert the JSON (javascript object notation) to Object{} ----> JSON.parse()
// To convert the object{} to JSON(javascript object noation)   ----->JSON.stringify()

//let data ='{"firstName":"Dinesh","lastName":"kumaran","age":25,"isStudent":true,"hobbies":["programming","reading","cycling"]}'
//  let person1 = JSON.parse(data);
//  console.log(person1);

//let data1 ='{"firstName":"Sathish","lastName":"Gnanaprakasam","age":30,"isStudent":false,"hobbies":["programming","reading","fishing"]}'

// let person2 = JSON.parse(data1);
// console.log(person2);

//Converted JSON DATA to object

// let person1 = {
//     firstName: 'Dinesh',
//     lastName: 'kumaran',
//     age: 25,
//     isStudent: true,
//     hobbies: ['programming', 'reading', 'cycling']
// };

 
// let person2 = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// //iterating the object using for in loop
// // Only object can access using for in loop ,for remaining we need to change the object into array.

// let person1 = {
//     firstName: 'Dinesh',
//     lastName: 'kumaran',
//     age: 25,
//     isStudent: true,
//     hobbies: ['programming', 'reading', 'cycling']
// };

// let person2 = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// for(let index in person1){
//     console.log(index,person1[index]);  // we can get the key:value properties.
// }

// for(let index in person2){
//     console.log(index,person2[index]);  // we can get the key:value properties.
// }


 //iterating the object using for loop

// let person1 = {
//     firstName: 'Dinesh',
//     lastName: 'kumaran',
//     age: 25,
//     isStudent: true,
//     hobbies: ['programming', 'reading', 'cycling']
// };

// let person2 = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// let value1 = (Object.entries(person1));   // To chage a object into 2D array
// for(let i=0;i<value1.length;i++){        // To make a 2D array for tranverse
//     console.log(i,value1[i]);
// }
// console.log(value1[4][1][0]);

// let value2 =(Object.entries(person2));                 // To change a oject into 2Darray.
// for(var j=0;j<value2.length;j++){                     // To make a 2D array for iterations
    // console.log(j,value2[j]);
    // console.log(value2[j].length);                  // To identigy the entire length  
//  for(var index =0; index<value2[j].length;index++){    // To access the each value in the array.
//       console.log(value2[j][index]);
       
//   }
//  }


//iterating the object using for of loop

// let person1 = {
//     firstName: 'Dinesh',
//     lastName: 'kumaran',
//     age: 25,
//     isStudent: true,
//     hobbies: ['programming', 'reading', 'cycling']
// };

// let person2 = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// // for(let value of Object.values(person1)){ // Own created using for of  iteration
// //     console.log(value);
// // }

// // for(let value1 of Object.values(person2)){ // Own created using for of iteration
// //     console.log(value1);
// // }

//   //syntax format using for of loop
//   let obj = Object.entries(person1);  // declaring variables for 2D array
//   for(let value of obj){
//     console.log(value);
//     console.log(value[1]);
// }

// //     for(let value1 of Object.entries(person2)){   // Directly applying the method inside the for of loop.  
// //     console.log(value1);
// //     console.log(value1[1]);
// // }


// iterating the object using for Each loop

// let person1 = {
//     firstName: 'Dinesh',
//     lastName: 'kumaran',
//     age: 25,
//     isStudent: true,
//     hobbies: ['programming', 'reading', 'cycling']
// };

// let person2 = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// let obj = Object.entries(person1);
// console.log(obj);
// obj.forEach((value)=>console.log(value[1]));

// let obj1 = Object.entries(person2);
// console.log(obj1);
// obj1.forEach((value1)=>console.log(value1[1]));

