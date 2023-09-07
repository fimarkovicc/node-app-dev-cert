class OddNumberError extends Error {
    constructor(varName= ""){
        super(varName + " must be even")
    }

    getName(){
        return "oddNumberError"
    }
}

// function evalNum(num){
//     if(typeof num !== "number") throw new TypeError("not a number")
//     if(num <= 0) throw new RangeError("number must be > 0")
//     if(num % 2){
//         const err = new OddNumberError("number")
//         err.name = "ODD NUMBER Error"
//         throw err
//     }
//     console.log("number ok")
// }

// try {
//     evalNum(4)    
// } catch (error) {
//     console.error(error.name)
// }

function evalNum(number){
    return new Promise((resolve, reject) => {
        if(typeof number !== "number") reject(new TypeError("not a number"))
        if(number <= 0) reject(new RangeError("must be larger than 0"))
        if(number % 2) reject(new OddNumberError("must be even"))
        resolve("number is ok!")
    })
}

evalNum(1).then(result=>console.log(result)).catch(err=>console.error(err))

console.log("code execution continues...")