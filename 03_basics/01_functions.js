
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

function loginUserMessage(username = 'you'){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Subham"))
// console.log(loginUserMessage("Subham"))

function calculaateCartPrice(val1, val2, ...num1){ // here ... are rest operator in function
     return num1
}

// console.log(calculaateCartPrice(200, 400, 500, 2000))

const user ={
    username : "Subham",
    prices : 199
}

function hanadleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}

// hanadleObject(user)
hanadleObject({
    username: "subham",
    price: 399
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 500]))