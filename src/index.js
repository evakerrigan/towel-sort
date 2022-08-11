
// You should implement your task here.

module.exports = function towelSort (matrix) {

  const arr = [];

if (typeof matrix !== "undefined") {

  for (i=0; i<matrix.length; i++) {    

      if (i%2 === 0) {
        arr.push(...matrix[i]);
      } else {
        arr.push(...matrix[i].reverse());
      }
   
  }

} else {

  matrix = arr;

}

console.log('matrix = ', matrix);
console.log('arr = ', arr);
return arr;


}
