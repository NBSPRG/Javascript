const map = new Map();
map.set("In", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

console.log(map);


// map are iterable
// and forOf loop is used on iterable data structure
for (const [key, value] of map) {
    console.log(key, ":-", value);
}

// but objects are not iterable
const obj = {
    name: "chandan",
    id: "IIT2021209"
}

// for (const [key, value] of obj) {
//     console.log(key, value);
// }

// we will get the error, object are not iterable;

// use of for in loop
  
for (const key in obj) {
    console.log(`${key} is the shortcut for ${obj[key]}`);
}

// can we use forin loop in map
// let's try

// won't print any result
for (const key in map) {
   console.log(key, map[key]);
}
    