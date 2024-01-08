//   var  i = 0

//   console.log(i);
//   console.log(++i);
//   console.log(i++);
//   console.log(i);


// var i = 0;

// while(i < 10) {
// console.log(i);
// i++
// // }


// var i = 0

// do{
//   console.log(i);
//   i++
// }while(i < 10)

// do{
//     var num = +prompt('write a number')
// }while( isNaN(num) || num < 10) {
// console.log("you wrote a number");
// }


// for(let i = 0; i <= 10; i++) {
//     if(i %2 == 1) {
//        console.log( 'number ' + i);


//     }
// }


// let count = 0;
// let sum = 0;
 
// for(let i = 1; i < 30; i++) {
//     if(i %2 == 0) {
//         count++
//     }else if(i %2 == 1) {
//      sum++
//     }
// }

// console.log('chetniye ' + count);
// console.log('nechetniye ' + sum);


// let sum = 1;

// for(let i = 1; i <= 10; i++) {
//     sum += i
// }

// console.log('summa ' + sum);

let x = +prompt('soum');
let sum = 0;

for (let i = 1; i <= x; i++) 
  if (i % 2 == 0) {
    sum += i;
}
console.log(sum);

