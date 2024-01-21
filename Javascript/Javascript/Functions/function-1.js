function loggedIn(username = "me") {        // me is used as a default value for the argument;
    if(!username)           // equivalent to (username === undefined )
    {
        console.log("Please Enter the name : ");
        return ;
    }

    return (`${username} just loggedIn`);
}

console.log(loggedIn("Mithlesh"))