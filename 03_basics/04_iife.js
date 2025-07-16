// Immediately Invoked Function Expressions (IIFE)

// global scope ke polution(variable) ko hatane ke liye IIFE use hota hain
(function chai(){
    console.log(`DB CONNECTED`);  
})()

// ()() ---> first () is function definition , second () is function call