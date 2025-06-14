const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// arrow function

const chai =  () => {
    let username = "hitesh"
    console.log(username);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// explicit return when {} is used

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// implicit return when () is used

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
