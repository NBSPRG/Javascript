const course = new Object({courseName : "Machine Learning", price : "999", courseInstructor : "Chandan Kumar"});
console.log(course);

// Now object destructuring

const {courseInstructor : Instructor} = course;
console.log(`Instructor is ${Instructor}`);


// Json Object = Javascript Object Notation

// {
//     "name" : "chandan"
// }


// Array of objects

// [
//     {},
//     {},
//     {}
// ]