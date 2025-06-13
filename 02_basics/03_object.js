// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Rupam",
    "full name": "Rupam Ghosh",
    [mySym]: "mykey1",
    age : 18,
    location : "Kolkata",
    email : "rupam@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rupam@chatgpt.com"
//Object.freeze(JsUser)
/*
Object.freeze() in JavaScript is used to make 
an object immutable, meaning:

You cannot add new properties.

You cannot remove existing properties.

You cannot change the values of existing properties.

You cannot change the object's prototype.
*/

// JsUser.email = "rupam@microsoft.com"
// console.log(JsUser);

// const user = {
//   name: "Rupam",
//   address: {
//     city: "Kolkata"
//   }
// };

// Object.freeze(user);
// user.address.city = "Delhi"; // ✅ still works (nested object not frozen)

// console.log(user.address.city); // "Delhi"


JsUser.greeting = function(){
    console.log("Hello JS user");
    //return 0;
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greetingTwo();
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());