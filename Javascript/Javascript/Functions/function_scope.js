
// // console.log(addOne(5))

// const y = addOne(5);
// console.log(y);

// These two will be executed;

function addOne(num)
{
    return num + 1;
}



// These execution won't be occured;
addTwo(5);      // this will create error -------> error of before initialization
const addTwo = function(num)
{
    return num + 2;
}

