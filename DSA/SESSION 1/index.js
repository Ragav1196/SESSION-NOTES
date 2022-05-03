// Factorial of a number using recursion method:
function factorial(n) {
  if (n <= 1) return 1;
  console.log("E");
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Binary search:
let dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(searchElement) {
  let start = 0,
    end = dataSet.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    if (dataSet[mid] === searchElement) {
      return mid;
    } else if (dataSet[mid] < searchElement) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(1));

// To find number in an array using linear search or normal for loop method:

function linearSearch(searchElement) {
  for (i = 0; i < dataSet.length; i++) {
    if (dataSet[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(9));
