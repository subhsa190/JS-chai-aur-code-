const user = {
    username : "subham",
    price : 999,

    welcomeMessage: function(){
       console.log(`${this.username} , welcome to website`);
      // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Guddu"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "subham"
//     console.log(this.username);
    
// }

// chai()



// const chai = function(){
//     let username = "subham"
//     console.log(this.username);
// }

const chai = () => {  // This is basic arrow function
    let username = "subham"
    console.log(this);
    
}

// chai()



// const addTwo = (num1 , num2) => {  
//     return num1 + num2
// }

//const addTwo = (num1 , num2) => num1 + num2  // this is implicit return of arrow function

//const addTwo = (num1 , num2) => (num1 + num2)  

// arrow function main curly braces ho toh return use karna padega , parenthisis main use nahi hoga

const addTwo = (num1 , num2) => ({username: "subham"}) 

console.log(addTwo(3, 4))


