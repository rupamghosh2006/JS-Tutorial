let score = "123"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "123" => 33
// "123a" => NaN
// true => 1; false => 0

let isLoggedIn = ""
//console.log(isLoggedIn)
//console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "hitesh" => true

isLoggedIn = 3
console.log(typeof isLoggedIn);

/*
we can change the data type of a variable 
within the variable itself by just changing 
the value
 */

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/*
some data may look like string but they are
actually strings
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);  => 4
// console.log(2-2);  => 0
// console.log(2*2);  => 4
// console.log(2**3);   => 8
// console.log(2/3);  => 0.6666666666
// console.log(2%3); => 2


// console.log("1" + 2);    => 12
// console.log(1 + "2");    => 12
// console.log("1" + 2 + 2);    => 122
// console.log(1 + 2 + "2");    => 32

// console.log( (3 + 4) * 5 % 3);   => 2

// console.log(+true);  =>  1
// console.log(+"");    =>  0


let gameCounter = 100
++gameCounter;
console.log(gameCounter);