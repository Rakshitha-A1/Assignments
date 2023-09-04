//Max Sum Contiguous Subarray
function contiguousMaxSum(array){
    let sumArray=[]
    for(let i=0;i<array.length;i++){
        let sum=0
        for(let j=i;j<array.length;j++){
            sum+=array[j]
            sumArray.push(sum)
        }
    }
    let max=Number.MIN_VALUE;
    let min=Number.MAX_VALUE;
    for(let i=0;i<sumArray.length;i++){
        if(sumArray[i]>max){
            max=sumArray[i]
        }
    }
    return max
}
console.log(contiguousMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//Sum of All Subarrays
function sumSubArray(array){
    let result=0
    for(let i=0;i<array.length;i++){
        let subSum=0
        for(let j=i;j<array.length;j++){
            subSum+=array[j]
            result+=subSum
        }
    }
    return result
}
console.log(sumSubArray([1,2,3]))

//
function findMinAvgSubarray(A, K) {
    let N = A.length;
    let start = 0;
    let end = K - 1;
    let windowSum = 0;
    for (let i = 0; i < K; i++) {
        windowSum += A[i];
    }

    let minSum = windowSum;
    let minStart = start;

    while (end < N - 1) {
        let avg = windowSum / K;
        if (avg < minSum / K) {
            minSum = windowSum;
            minStart = start;
        }

        windowSum = windowSum - A[start] + A[end + 1];
        start++;
        end++;
    }

    return minStart;
}

console.log(findMinAvgSubarray([3, 7, 90, 20, 10, 50, 40], 3)); 
console.log(findMinAvgSubarray([3, 7, 5, 20, -10, 0, 12], 2)); 

//Maximum Subarray
function MsumArray(array,a,b){
    let sumArray=[]
    for(let i=0;i<a;i++){
        let sum=0
        for(let j=i;j<a;j++){
            sum+=array[j]
            sumArray.push(sum)
        }
    }
    for(let i=0;i<sumArray.length;i++)
    {
        if(sumArray[i]<=b){
            return b;
        }else if(sumArray[i]>b){
            return 0
        }

    }
}
console.log(MsumArray([2, 1, 3, 4, 5],5,12))