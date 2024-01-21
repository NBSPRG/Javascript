const obj = {};
// how to check empty object

// if(Object.keys(obj).length === 0)
// {
//     console.log("Empty object....");
// }

// Nullish operator
let x;
x = 10 ?? 20;
console.log(x);

// if we have null or undefined instead of first value, then the second value is assigned
x = null ?? 20;
console.log(x);

x = undefined ?? 30;
console.log(x);

x = 0 ?? 450;
console.log(x);


// use of ternary operator,
// both nullish and ternary operator are different

console.log(20 == 20 ? "True" : "False");

// we have swithches case also
