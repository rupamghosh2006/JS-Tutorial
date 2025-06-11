let date = new Date();
/*
console.log(date.toString()); //Wed Jun 11 2025 21:19:34 GMT+0530 (India Standard Time)   
console.log(date.toDateString());   //Wed Jun 11 2025
console.log(date.toISOString());    //2025-06-11T15:52:56.985Z
console.log(date.toLocaleDateString()); //11/6/2025
console.log(date.toJSON()); //2025-06-11T15:56:01.603Z
*/

// typeof Date => object 

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);    // time in millisecond
// console.log(myCreatedDate.getTime());    // time in millisecond
// console.log(Math.floor(Date.now()/1000));    // time in second

newDate.toLocaleString('default', {
    weekday: "long",
    
})
