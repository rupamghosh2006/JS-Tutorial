const myArr = [0, "Rupam", 2, 3, 4]
const myArr2 = new Array(1, 2, 3, 4)
//cosnsole.log(myArr[1]);


//array methods

myArr.push(6)

// myArr.pop() => remove last element

//myArr.unshift(0) => adding elemnt at beginning
myArr.shift()
// console.log(myArr);   => remove first element

console.log(myArr.includes(3)); // true

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);// covert to string

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/*
| Feature             | `slice()`            | `splice()`                  |
| ------------------- | -------------------- | --------------------------- |
| **Modifies array?** | ❌ No                | ✅ Yes                     |
| **Return value**    | New array            | Removed elements            |
| **Use case**        | Copy/extract portion | Add/remove/replace elements |

*/

