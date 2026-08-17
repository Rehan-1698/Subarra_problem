
//Q6.js → Maximum sum subarray (Kadane’s Algorithm)

function maxSubarraySum(arr) {
  let maxSoFar = arr[0], curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    maxSoFar = Math.max(maxSoFar, curr);
  }
  return maxSoFar;
}

console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));
