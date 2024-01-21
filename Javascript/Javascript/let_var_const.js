console.log("hello world");
const accountId = "12345";        
let accountEmail = "chandanues@gmail.com"
var accountPassword = "Password"
accountType = "Saving"      // not a good way;
let accountState;           // momery reserved;

console.table([accountId, accountEmail, accountPassword, accountType, accountState])

// prefer not to use var, it doesn't work on scope, it change variable globally;
// because of issue in block scope and functional scope
// use let
// const for constant

console.log(typeof undefined);          // undefined
console.log(typeof null);               // object

// null is an empty value, it is not as same as undefined;