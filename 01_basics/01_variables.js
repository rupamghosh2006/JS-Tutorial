const accountID = 57635
let accountEmail = "rupam@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;
// accountID = 2 
// not allowed
console.log(accountID);

/*
Prefer not to use var
beacse of issue in block scope and functional scope

*/
accountEmail = "rg@rg.com"
accountPassword = "54321"
accountCity = "Bengaluru"
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
