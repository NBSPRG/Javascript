// not strict comparison

console.log("2" == 2);      // convert the string into number
console.log(null > 0);      // null is converted into number
console.log(null == 0);     // here work differently
console.log(null >= 0);     // converted into number


// -----------------------Some inconsistrency problem thus we use === 
// it checks value as well as datatypes
console.log("it is" ,  "3" === 3.0);    

console.log(undefined > 0);     // for undefined all same value;
console.log(undefined == 0);
console.log(undefined >= 0);

// Thus for giving strictness we use typescript

