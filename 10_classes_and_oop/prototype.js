// let myName = "subham     "
// let myChannel = "chai   "
// console.log(myName.length)



let myHeros = ["thor","spiderman"]


let heroPower ={
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.subham = function(){
    console.log(`subham is present in all object`);
    
}


Array.prototype.heySubham = function(){
    console.log(`subham says hello`);
    
}

//heroPower.subham()
// myHeros.subham()
// myHeros.heySubham()
//heroPower.heySubham()


// ------------------------ inheritance ----------------

const user ={
    name:"guddu",
    email:"guddu@google.com"
}


const Teacher = {
    makeVideo: true,
}

const TeachingSupport ={
    isAvailable: false,
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user


// modern syntax of inheritance
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername ="ChaiAurCode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()

"subham".truelength()
"BlackTea".truelength()