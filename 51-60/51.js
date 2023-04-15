let sampleArr = [1,1,2,2,3];

function countUniqueValue(arr) {
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i += 1;
            arr[i] = arr[j];
        } 
        console.log(i, j);
        console.log(sampleArr);
    }
}

console.log(countUniqueValue(sampleArr));

