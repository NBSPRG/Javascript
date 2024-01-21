const newNumber = new Number(1000)
console.log(newNumber)

console.log(newNumber.toPrecision(3))

console.log((123.890).toPrecision(4))

// console.log((1000000000000).toLocaleString())        International Standard
console.log((10000000000000000000000000).toLocaleString('en-IN'))       // Indian Standard

console.log(newNumber.toFixed(2))

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)

