// var x = 'global';
// let y = 'global';
// console.log(this.x); // "global" 전역 객체의 속성 x를 생성
// console.log(this.y); // undefined 전역 객체의 속성 y를 생성하지 않음




// // console.log(NonAbc);
// // console.log(varAbc);
// // console.log(letAbc);
// // console.log(constAbc);

// {
//     NonAbc = 'NABC';
//     var varAbc = 'VABC';
//     let letAbc = 'LABC';
//     const constAbc = 'CABC';

//     console.log("in " + NonAbc);
//     console.log("in " + varAbc);
//     console.log("in " + letAbc);
//     console.log("in " + constAbc);

//     {
//         console.log("in " + "in " + NonAbc);
//         console.log("in " + "in " + varAbc);
//         console.log("in " + "in " + letAbc);
//         console.log("in " + "in " + constAbc);
//     }

//     for (let i = 0; i < 5; i++ ) {
//         console.log("for in" + i);
//     }
//     console.log("for out" + i);
// }

// console.log("out" + i);
// console.log(NonAbc);
// console.log(varAbc);
// //console.log(letAbc);
// //console.log(constAbc);


// $(#aaaa).css('width');


// function createCounter() {
//     var count = 0;
//     function addCount() {
//         count++;
//         return count;
//     }
//     return addCount;
// }

// var counter = createCounter();

// document.write("1. count = " + counter(), "<br>");
// document.write("2. count = " + counter(), "<br>");
// document.write("3. count = " + counter(), "<br>");


function createCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}

let counter = createCounter();

document.write("type: " + typeof (counter), "<br>");
document.write("1. count = " + counter(), "<br>");
document.write("2. count = " + counter(), "<br>");
document.write("3. count = " + counter(), "<br>");
