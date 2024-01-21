// // const arr = [1, 2, 3, 4, 5];
// // console.log(arr.push(6), arr, arr.pop(), arr);
// // arr.unshift(10);     // adding to the first
// // console.log(arr);
// // arr.shift(20);
// // console.log(arr);
// // console.log("----------------------------------------------------------------------------------");
// // const newArr = arr.join()
// // console.log(arr);
// // console.log(typeof newArr, (newArr));       // converted into string


// // slice vs splice in javascript

// const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log("Actual array : ", arr2)
// const newArr1 = arr2.slice(1, 4);
// console.log("Sliced array : ", newArr1);

// console.log("--------------------------------------------------------------------")
// const newArr2 = arr2.splice(2, 5)
// console.log("Spliced array : ", newArr2);
// console.log("Actual array get modified on applying the splice operaations : ", arr2);       // splice operation modifies the actual array

const arr_1 = ["chandan", "mithlesh", "satish"];
const arr_2 = ["Dad" , "Mom"]

// arr_1.push(arr_2)       // nested array formation 
// console.log(arr_1);



// concat gives a new array
// const arr_3 = arr_1.concat(arr_2);
// console.log(arr_3)


// but concatation can accomodate only two array

// Thus we use spread operator, just spread all element of an array

const arr_3 = ["asdf", "zzxc", "qwer"]
const arr_4 = [...arr_1, ...arr_2, ...arr_3]
console.log(arr_4)      

// we can also faltten the nested array in order to reduce it to 1 dimension
// like

arr_1.push(arr_2)
console.log(arr_1)

const arr_5 = arr_1.flat(Infinity)
console.log(arr_5)

