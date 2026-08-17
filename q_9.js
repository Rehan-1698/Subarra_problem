
//Q7.js → Maximum product subarray

function maxProductSubarray(arr) {
  let maxProd = arr[0], minProd = arr[0], result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let temp = maxProd;
    maxProd = Math.max(arr[i], arr[i] * maxProd, arr[i] * minProd);
    minProd = Math.min(arr[i], arr[i] * temp, arr[i] * minProd);
    result = Math.max(result, maxProd);
  }
  return result;
}

console.log(maxProductSubarray([2,3,-2,4])); 
