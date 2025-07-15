
function sayMyName(){
console.log("S");
console.log("U");
console.log("B");
console.log("H");
console.log("A");
console.log("M");
}

// sayMyName()

// function addTwoNumbers( number1 , number2){  // parameters

//     console.log(number1 + number2);  
// }

function addTwoNumbers( number1 , number2){  // parameters

    // let result = number1 + number2
    // return result
    return number1 + number2 
 
}

const result = addTwoNumbers(3 , 5)  // arguments

// console.log("Result: " ,result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Subham"))
console.log(loginUserMessage())