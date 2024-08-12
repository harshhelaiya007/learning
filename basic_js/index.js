// function x() {
//     let a = 25;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z());

// function main() {
//     for (var i = 1; i <= 5; i++) {
//         function closeUp(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000)
//             console.log("Harsh")
//         }
//         closeUp(i);
//     }
// }
// main();
// function mainOuter() {
//     var x = 10;
//     function outer() {
//         function inner() {
//             // let a = 100;
//             console.log(a);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer();
// }
// outer()()();


// Function Statement
function a() {
    console.log('Function A called');
}

// Function Expression
var b = function () {
    console.log('Function B called');
}

// Anonymouse Function
// function () {

// }

// Named Function Expression
var b = function xyz() {
    console.log('Named Function');
}
 
// Difference between Parameter & Arguments ?

console.log('Start');

setTimeout(() => {
    console.log('SetTimeOut');
}, 5000);

console.log('End')


let startDate = new Date().getTime();
let endDate = startDate;

// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }


