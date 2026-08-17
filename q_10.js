
//Q8.js → Count subarrays with sum divisible by k

function countSubarraysDivByK(arr, k) {
  let map = new Map();
  map.set(0, 1);
  let sum = 0, count = 0;
  for (let num of arr) {
    sum += num;
    let mod = ((sum % k) + k) % k;
    if (map.has(mod)) count += map.get(mod);
    map.set(mod, (map.get(mod) || 0) + 1);
  }
  return count;
}

console.log(countSubarraysDivByK([4,5,0,-2,-3,1], 5)); // 7
