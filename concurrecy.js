// Callbacks
//It's a function that is passed as an argument to another function and is executed after the first function has completed its execution.

// function doSomething(callback) {
//     console.log("Doing something...");
//     callback();
//     console.log("Done doing something.");
// }
// function sayHi() {
//     console.log("Hi");
// }

// doSomething(sayHi);

// function judge(grade) {
//     switch(true) {
//         case grade == "A":
//             console.log("You got an ",grade,": Amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a ",grade,": Good!");
//             break;
//         case grade == "C":  
//             console.log("You got a ",grade,": Fair!");
//             break;
//         case grade == "D":
//             console.log("You got a ",grade,": Poor!");
//             break;
//         default:
//             console.log("You got a ",grade,": Fail!");
//         }
// }

// function getGrade(score,callback) {
//     let grade;
//     switch(true) {
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=60:
//             grade="C";
//             break;
//         default:
//             grade="F";
//     }
//     callback(grade)
// }

// getGrade(85,judge);


// Promises

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// A promise is a placeholder for a value that will be available in the future.
// When resolve() is called, the promise is fulfilled and whatever is betweenthe arrows is returned and used as input meathod on the Promise object.

// let promise = new Promise((resolve, reject) => {
//     let x = 2;
//     if(x >= 10) {
//         resolve(x);
//     } else {
//         reject("x is less than 10");
//     }
// });

// promise.then(
//     function (value) {
//         console.log("Promise resolved with value: ", value);
//     },
//     function (error) {
//         console.log("Promise rejected with error: ", error);
//     }
// )

const promise = new Promise((resolve, reject) => {
    // resolve("Success!!");
    reject("Failire")
}).then(value=>{
    console.log(value);
    return "WE";
})
.then(value=>{
    console.log(value);
    return "CAN";
})
.then(value=>{
    console.log(value);
    return "CHAIN";
})
.then(value=>{
    console.log(value);
    return "PROMISES";
})
.then(value=>{
    console.log(value);
})
.catch(value=>{
    console.log(value);
})
