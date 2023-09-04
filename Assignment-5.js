//Special Index
findSpecialIndexCount([1,1,1])

function findSpecialIndexCount(arr){
    let cmEvenArray = []
    let cmOddArray = []
    let oddSum = 0
    let evenSum = 0
    for(let i=0; i<arr.length; i++){
        if(i&1 == 1) {
            oddSum += arr[i]
        } else{
            evenSum += arr[i]
        }
        cmEvenArray.push(evenSum)
        cmOddArray.push(oddSum)
    }
    console.log(cmEvenArray)
    console.log(cmOddArray)
    let count = 0
    for(let j=0; j<arr.length; j++){
        let cmEvenSum = 0
        let cmOddSum = 0
        if(j==0){
            cmEvenSum = cmOddArray[arr.length-1]-cmOddArray[j]
            cmOddSum = cmEvenArray[arr.length-1]-cmEvenArray[j]
        } else if (j == arr.length-1){
            cmEvenSum = cmEvenArray[j-1]
            cmOddSum = cmOddArray[j-1]
        } else {
            cmEvenSum = cmEvenArray[j-1] + (cmOddArray[arr.length-1]-cmOddArray[j])
            cmOddSum = cmOddArray[j-1] + (cmEvenArray[arr.length-1]-cmEvenArray[j])
        }
        if(cmEvenSum == cmOddSum){
            count++
        }
    }
    console.log(count)
}

//Pick from both sides
findMaxSum([2, 3, -1, 4, 2, 1], 4)
//findMaxSum([5,-2, 3, 1, 2], 3)
function findMaxSum(arr, b){
    let forwardSumArr = []
    let backwardSumArr = []
    let forwardSum = 0
    let backwardSum = 0
    for(let i=0; i<b; i++){
        forwardSum += arr[i]
        backwardSum += arr[arr.length-1-i]
        forwardSumArr.push(forwardSum)
        backwardSumArr.push(backwardSum)
    }
    console.log(forwardSumArr)
    console.log(backwardSumArr)
    let max = Number.MIN_VALUE
    for(let j=0; j<forwardSumArr.length-1; j++){
        if(forwardSumArr[j]+backwardSumArr[forwardSumArr.length-2-j]>max){
            max = forwardSumArr[j]+backwardSumArr[forwardSumArr.length-2-j]
        }
    }
    if(forwardSumArr[forwardSumArr.length-1]>max){
        max = forwardSumArr[forwardSumArr.length-1]
    }
    if(backwardSumArr[backwardSumArr.length-1]>max){
        max = backwardSumArr[backwardSumArr.length-1]
    }
    console.log(max)
}

//Special Subsequences "AG"
findSubsequences("ABCGAG")

function findSubsequences(s){
    let subsequence = 0
    let gCount = 0
    for(let i=s.length-1; i>=0; i--){
        if(s.charAt(i)=='G'){
            gCount++
        }
        if(s.charAt(i)=='A'){
            subsequence += gCount
        }
    }
    console.log(subsequence)
}

//Closest MinMax
findClosestMinMax([2, 6, 1, 6, 9])

function findClosestMinMax(arr){
    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
    console.log(min)
    console.log(max)
    let minIndex = -1
    let maxIndex = -1
    let arrLength = 0
    for(let j=0; j<arr.length; j++){
        if(arr[j]==min){
            minIndex = j
        }
        if(arr[j]==max){
            maxIndex = j
        }
        if(minIndex>=0 && maxIndex>=0){
            if (minIndex==maxIndex){
                arrLength = 1
            } else {
                arrLength = Math.abs(maxIndex-minIndex) + 1
            }
            break
        }
    }
    console.log(arrLength)
}

//Bulb
findNumberOfSwitches([0, 1, 0, 1])

function findNumberOfSwitches(arr){
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(count & 1 == 1){
            arr[i] ^= 1
        }
        if(arr[i] == 0){
            count++
            arr[i] ^= 1
        }
    }
    console.log(arr)
    console.log(count)
}