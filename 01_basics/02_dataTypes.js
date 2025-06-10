"use strict";// treat all JS code as newer version

//alert(3+3)
//we are using nodejs, not browser

// code readability should be high
console.log(3+3);


let name = "Rupam";
let age = 18
let isLoggedIn = false
let state;

/*
number => 2 to the power 53
bigint
string =>  ""
boolean => true/false
null => standalone value
undefine => undefined
symbol => unique

object
*/

console.log(typeof null); //object

/*
This is actually a well-known bug in JavaScript.

null is not an object, but typeof null returns "object" 
due to a legacy bug in the language that dates back to its early implementation.

What is null then?
null is a primitive value that represents the intentional absence of any object value.

It’s often used to indicate that a variable should later hold an object, but currently does not.
*/
