// function name1(nr) {
//     console.log("Started function with " ,nr);
//     if(nr>0){
//         name1(nr-1);
//     }else{
//         console.log("Done with recursion ");
//     }
// console.log("Endeded function with " ,nr);
// }
// name1(3)

// function func1() {
//     console.log("Hello from func1");
//     function func2() {
//         console.log("Hello from func2");
//     }func2();
// }func1();

let funcVar = function() {
    console.log("Hello from funcVar");
};
console.log(funcVar)
function newfunc() {
         console.log("Hello from funcVar");
     };

function doFlexible(executablefunc) {
    executablefunc();
    console.log("Hello from doFlexible");
}

doFlexible(newfunc);
setTimeout(funcVar,10000);

