let userInput = prompt("Enter numbers separated by commas:"); 
let inputArray = userInput.split(',').map(Number); 

inputArray.sort(function(a, b) {
  return b - a; 
});

console.log("Sorted array in descending order: " + inputArray);
