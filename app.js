
/* 1st option
const math = require('./math');
console.log(math.PI)

console.log(math.square(9))
*/

// 2nd options
const {PI, square}= require('./math');

const cats = require('./shelter').allCats

console.log("Require an entire directory!", cats)

//console.log(PI)

//onsole.log(square(9))