
//Q1.js → Maximum element in every subarray of size k

function maxInSubarrays(arr, k) {
  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let sub = arr.slice(i, i + k);
    result.push(Math.max(...sub));
  }
  return result;
}

console.log(maxInSubarrays([1,3,2,5,4], 3)); // [3,5,5]
