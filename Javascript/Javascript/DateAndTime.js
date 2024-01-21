// let currentDate = new Date()
// console.log(currentDate)
// console.log(currentDate.toString())
// console.log(currentDate.toLocaleString())

// use of string interpolation
// let currentDate = new Date();
// console.log(`${currentDate.getFullYear()},${currentDate.getHours()}`);

// // putting a new date 
// let newDate = new Date("10-11-2023")
// let nextDateNew = new Date(2023,0, 10, 9, 58)
// console.log(nextDateNew.toString())
// console.log(newDate.toLocaleString())

//  getting the time stamp in millisecond
// console.log(Date.now())



// customizing our date
let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday:'long',
}))

