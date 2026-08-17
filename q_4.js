
//Q2.js → Count subarrays with sum = 0

function countZeroSumSubarrays(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) count++;
    }
  }
  return count;
}

console.log(countZeroSumSubarrays([1,-1,2,-2,3])); // 3
