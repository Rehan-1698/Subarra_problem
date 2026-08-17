
//Q4.js → Largest subarray length with sum = k

function largestSubarraySumK(arr, k) {
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}

console.log(largestSubarraySumK([1,2,3,1,1,1,4], 5)); // 3
