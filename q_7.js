
//Q5.js → Longest subarray with equal 0s and 1s

function longestEqualZeroOne(arr) {
  let map = new Map();
  let sum = 0, maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += (arr[i] === 0 ? -1 : 1);
    if (sum === 0) maxLen = i + 1;
    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}

console.log(longestEqualZeroOne([0,1,0,1,1,0])); // 6
