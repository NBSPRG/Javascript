// console.log(this);

// const user = {
//     name : "chandan",
//     price : 999,
//     func : function(){console.log(this)}
    
// }

// console.log(user);
// user.name = "mithlesh";
// console.log(user);
// console.log(this);


// what is this in normal function
// function name()
// {
//     console.log(this);
// }
// name();         // we have many things in it;

// const chai = () => {
//     const name = "chandan";
//     console.log(this.name)
// }

// chai()

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4))

const user = () => ({"username" : "chandan"});
console.log(user())