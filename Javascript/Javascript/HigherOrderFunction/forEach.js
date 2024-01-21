const arr = ["js", "ruby", "swift", "solidity", "golang", "python"];

arr.forEach(function (item) {
  console.log(item);
})

console.log("")
console.log("```````````````````````````````````````````````````");

const arr2 = 
[
  {
    "name" : "chanda",
    "id" : "209"
  }, 
  {
    "name" : "mithliesh",
    "id" : "205"
  }
]
arr2.forEach( (item) => {
  console.log(item.name, item.id);
})