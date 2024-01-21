(function chai(){
    console.log(`DB connected`);
})();       // semi-colon to ensure where to stop

( () => {
    console.log(`DB connected2`)
})();


// If expecting an argument
((name)=>{
    console.log(`DB connected ${name}`);
})('chandan')