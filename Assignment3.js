//way 1 of solving equlibrium problem 
function findEquilibriumIndex(arr,n) {
    let sum = 0;
    let leftSum = 0;
    for (var i = 0; i < n; i++) {
      sum += arr[i];
    }
    for (var i = 0; i < n; i++) {
      sum -= arr[i];
      if (leftSum === sum) {
        return i; 
      }
      leftSum += arr[i];
    }
  
    return -1;
  }

  //way2 of solving equlibruim using mid variable 
function equlibrium(arr,n){
    let leftSum=0
    let rightSum=0
    let mid=parseInt(n/2)
    if(mid>1){
    for(let i=0;i<=mid;i++){
        leftSum+=arr[i]
    }
    for(let j=mid;j < n;j++){
        rightSum+=arr[j]
    }
    if(leftSum===rightSum){
        return mid
    }
}else{
    return -1
}
}
console.log(equlibrium([-7, 1, 5, 2, -4, 3, 0],7))

function sumQuery(array,query){
    let cumulative=[array[0]]
    for (let i = 1; i <array.length; i++) {
        cumulative[i] = cumulative[i - 1] + array[i];
      }
    let querySums = [];

  for (let i = 0; i < query.length; i++) {
    let L = query[i][0];
    let R = query[i][1];
    
    let sum;
    if (L > 0) {
      sum = cumulative[R] - cumulative[L - 1];
    } else {
      sum = cumulative[R];
    }

    querySums.push(sum);
  }

  return querySums;
}
console.log(sumQuery([1,2,3,4,5],[[1, 3], [0, 4], [2, 4]]))

//Time To equality Problem 
function timeToEquality(array){
    let max=0
    let differenceValue=0
    let count=0
    for(let i=0;i<array.length;i++){
        if(max<array[i]){
            max=array[i]
        }
    }
    for (let index = 0; index < array.length; index++) {
        if(array[index]<max){
            differenceValue=max-array[index]
            count+=differenceValue
        }
    }
    return count
}
console.log(timeToEquality([2, 4, 1, 3, 2]))

//productArray
function productArray(array){
    let totalProduct=1
    let product=[];
    for(let i=0;i<array.length;i++){
        totalProduct*=array[i]
    }
    for(let j=0;j<array.length;j++){
        product[j]=totalProduct/array[j]
    }
    return product
}
console.log(productArray([1,2,3,4]))