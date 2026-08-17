let arr = [2,4,6,8]

//find subArraySum of arr.
for(let i = 0; i<arr.length; i++){
    let subArr = []
    let sum = 0;
    for(let j = i; j<arr.length; j++){
        subArr = arr.slice(i,j+1);
       sum = sum + arr[j] 
    //    console.log(subArr);
        console.log(sum);
    }
    
}