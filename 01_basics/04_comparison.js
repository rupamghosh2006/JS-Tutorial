// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); //false
console.log(null >= 0); //true

/*
The reason is that an equality check ==
and comparisons ><>=<= Works differently.
Comparison convert null to a number,
Treating it as 0
That is why  null >= 0 is true 
and is null == 0 false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
/*
this strictly checks with data type
*/

console.log("2" === 2);