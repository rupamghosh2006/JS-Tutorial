// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('rupam');

// ()() ---> IIFE

/*
(function () {
    // code
})();

(() => {
    // arrow function version
})();
*/

/*
IIFE is used to create a private scope in JavaScript 
and execute code immediately after it's defined. 
It's commonly used to avoid polluting the global namespace and 
to encapsulate variables or logic 
that shouldn't be accessible from outside the function.

*/