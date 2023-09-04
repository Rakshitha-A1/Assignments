//Amazing Subarrays
findAmazyingSubArrayCount("ABEC")

function findAmazyingSubArrayCount(arr){
    let count = 0
    for(let i=0; i<arr.length; i++){
        let temp = "" 
        if(arr[i].toLowerCase() === 'a' || arr[i].toLowerCase() === 'e' || arr[i].toLowerCase() === 'i' || arr[i].toLowerCase() === 'o' || arr[i].toLowerCase() === 'u'){
            for(let j=i; j<arr.length; j++){
                temp += arr[j]
                console.log(temp)
            }
        }
        count += temp.length
    }
    console.log(count)
}

//Even SubArrays
//console.log(findIfAllEvenSubArraysHasEvenBoundaryElements([2, 3, 4, 7]))
console.log(findIfAllEvenSubArraysHasEvenBoundaryElements([2, 4, 6, 8]))

function findIfAllEvenSubArraysHasEvenBoundaryElements(arr){
    for(let i=0; i<arr.length-1; i++){
        if((arr[i] & 1) != 1){
            console.log(arr[i])
            for(let j=i+1; j<arr.length; j=j+2){
                if((arr[j] & 1) != 1){
                    console.log(arr[j])
                    return "Yes"
                }
            }
        }
    }
    return "No"
}

//Leaders in an given array
findLeadersArray([16,17,4,3,5,2])

function findLeadersArray(arr){
    let max = Number.MIN_VALUE
    let leaderArray = []
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]>max){
            max = arr[i]
            leaderArray.unshift(arr[i])
        }
    }
    console.log(leaderArray)
}
//TC = N
//SC = N