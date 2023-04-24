//With a for loop, create a JavaScript code that creates a new array in reverse order.
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([1, 3, 5, 7, 9, 11]));
console.log(reverseArray([20, 50, 30, 60, 200])); 
console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));