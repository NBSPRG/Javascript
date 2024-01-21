const naam = "Alice";
const age = 30;

// use of back tick is called string interpolation
const message = `My name is ${naam} and I am ${age} years old.`;

console.log(message);

const gameName = new String("Chandan%20Kumar")
console.log(gameName.__proto__)

// using different function in javascript
console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('c'))

const newString = (gameName.replace("%20", "-"))
console.log(newString.split("-"))

console.log(("      chandan      ").trimRight())
console.log(("         chandan      ").trim())