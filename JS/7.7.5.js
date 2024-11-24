 function sortUniqueArray (arr) {
        const uniqueArray = [...new Set(arr)];
        return uniqueArray.sort((a, b) => a - b);
}
 
  const numbers = [2, 5, 1, 2, 10, 5, 100, 2];
  
  console.log(sortUniqueArray(numbers));