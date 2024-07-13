let score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.59123
/* if Value is more than 5 
EX => {
    12.57890
    AWS = 12.58
    }
*/
console.log(otherNumber.toPrecision(2));


const hundeds = 100000;
console.log(hundeds.toLocaleString('en-IN'));