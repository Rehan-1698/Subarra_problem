//Q3.js → Print all possible subarrays

function printSubarrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    let subArr = [];
    for (let j = i; j < arr.length; j++) {
      subArr.push(arr[j]);
      console.log(subArr);
    }
  }
}

printSubarrays([1,2,3]);
