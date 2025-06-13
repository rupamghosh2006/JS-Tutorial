const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

//push modifies in the existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// concat => creates a new Array
const all_new_heros = [...marvel_heros, ...dc_heros] // we can also input multiple array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Rupam"))
console.log(Array.from("Rupam"))
console.log(Array.from({name: "rupam"})) // interesting --> returns empty array

/*
 Use map function

console.log(Array.from([1, 2, 3], x => x * 2)); 
// Output: [2, 4, 6]
*/
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/*
Array.of() is a static method in JavaScript used to 
create a new array instance from a variable number of arguments, 
regardless of the number or type of the arguments.

🔹 Syntax:

Array.of(element0, element1, ..., elementN)

console.log(Array.of(1));           // [1]
console.log(Array.of(1, 2, 3));     // [1, 2, 3]
console.log(Array.of());           // []
console.log(Array.of('a', 'b'));   // ['a', 'b']

*/