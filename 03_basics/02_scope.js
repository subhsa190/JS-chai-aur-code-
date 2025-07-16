
let  a = 300
if (true) {
    let a = 10 
    const b = 20 
   // console.log("Inner: ",a);
    
}


//console.log(a);
//console.log(b);

// browser ke ander console mai scope and 
// code-environment main node ke through code run karte hain tab global scope alag hota hain

function one(){
    const username = "subham"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);
    two()
    
}

// one()

if (true) {
    const username = "subham"
    if (username === "subham") {
        const website = " youtube"
      //  console.log(username + website)
    }
   // console.log(website);
    
}

//console.log(username);


// ++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2 
}
