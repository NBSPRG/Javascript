// How to use symbols
// Object declaration without new word is not singleton


const mySym = Symbol("key1")

const jsUser = {
    name : "Chandan",
    "full name" : "Chandan Kumar",      // by default key is taken as string;
    age : 20,
    color : "yellowish",
    [mySym] : "Key for symbol 1"
}

// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(typeof [mySym])


// If we want to modify some of the parameter
jsUser.name = "Mithlesh"
// console.log(jsUser)
// Object.freeze(jsUser)
jsUser.name = "Satish"          // It won't give error but object cannotg be modified;

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Greeting from chandan kumar")
}


//console.log(jsUser.greeting());     // undefined also coming , we will study later

jsUser.greeting2 = function(){
    console.log(`My name is ${this.name}`);
}

//console.log(jsUser.greeting2());


// Singleton Object
const newObj = new Object();
const newObj2 = {};
// console.log(newObj, newObj2);   ------> no difference only the difference of singleton and non- singleton

newObj.email = "chandanues@gmail.com"
newObj.name = {
    fullname : {
        first_name : "Chandan", 
        last_name : "Kumar"
    }
}

// how to access nested object
console.log(newObj.name.fullname.first_name)

// Object concatanation
const Obj1 = new Object({name : "chandan", "email" : "chandanues@gmail.com"})
const Obj2 = new Object({name : "Mithlesh", "email" : "mithleshues@gmail.com"})
const Obj3 = new Object({name : "Satish", "email" : "satishues@gmail.com"})
// console.log(Obj1)

// how to concat
const Obj4 = Object.assign({}, Obj1, Obj2, Obj3)
// console.log(Obj4 === Obj1, {Obj4})


// we can also use spread operator
const Obj5 = {...Obj1, ...Obj2};
console.log(Obj5)