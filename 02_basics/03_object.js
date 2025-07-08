// singleton  --> constructor se object banega
// Object.create --> This is called constructor method

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Subham",
    "full name": "Subham Saha",
    [mySym]: "mykey1", //  [] --> is the way to delcare symbol in object
    age: 20,
    location: "Rampur",
    email: "subham@cse.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) --> another way to access any key of object
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Subham@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Subham@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
