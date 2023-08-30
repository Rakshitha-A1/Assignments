upSidePyramid(5)

function upSidePyramid(a){
    let v = 0;
    for (let i=1; i<=a; i++){
        let s = ''
        for(let j=i; j<a; j++){
            s += ' '
        }
        for (let k=1; k<=i+v; k++){
            s += '*'
        }
        v++
        console.log(s)
    } 
}

downSidePyramid(5)

function downSidePyramid(a){
    let v = a-1
    for(let i = 1 ; i<=a ; i++){
        let s = ''
        for(let j = 1; j<i ; j++){
            s += ' '
        }
        for(let k = i; k<=a+v ; k++){
            s += '*'
        }
        v--
        console.log(s)
    }
}

pyramid(5)

function pyramid(a){
    let totalLines = a+a-1
    let v = 0
    let u = a-1 
    for(let i=1; i<=totalLines; i++){
        let s = ''
        if (i <= a) {
            for(let j=i; j<a; j++){
                s += ' '
            }
            for(let k=1; k<=i+v; k++){
                s += '*'
            }
            v++
        } else {
            for(let l=a; l<i; l++){
                s += ' '
            }
            for(let m=i; m<totalLines+u; m++){
                s += '*'
            }
            u--
        }
        console.log(s)
    }
}

sumOfNumbers(10)

function sumOfNumbers(a) {
    let sum = 0
    for(let i=1; i<=a; i++){
        sum += i
    }
    console.log("Sum of 1 to " + a + " numbers is : "+sum)
}
//output--> Sum of 1 to 10 numbers is 55

howToIteraterAnArray([1,2,3,4])

function howToIteraterAnArray(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

howToIterateOverAnObjectData([{"id": 123, "name": "RAM", "designation": "Developer", "isPermanent": true}, {"id":145, "name": "RUDRA", "designation": "Lead-Dev", "isPermanent": true}])
function howToIterateOverAnObjectData(objArr){
    for(let i=0; i<objArr.length; i++){
        let s = ''
        s = objArr[i].id + ',' + objArr[i].name + ',' + objArr[i].designation + ',' + objArr[i].isPermanent
        console.log(s)
    }
}

var res = searchStrings("How are you", "How are yu")
console.log(res)

function searchStrings(source, toFind){
    if(source.length>=toFind.length){
        for(let i=0; i<source.length-toFind.length-1; i++){
            if(returnGivenArrayElements(source, i, toFind.length) == toFind)
                return true
        }
    }
    return false
}

function returnGivenArrayElements(source, i, l){
    let s = ''
    for(let j=i; j<i+l; j++){
       s += source[j]
    }
    return s
}

stringReverse("I am Good")

function stringReverse(s){
    let rev = ''
    for(let i=s.length-1; i>=0; i--){
        rev += s[i]
    }

    // for(let i=0; i<s.length; i++){
    //     rev = s[i] + rev
    // }
    console.log(rev)
}

arrayReverse([1,2,3,4,5,6])

function arrayReverse(arr){
    let rev = []
    for(let i=arr.length-1; i>=0; i--){
        rev.push(arr[i])
    }

    // for(let i=0; i<arr.length; i++){
    //     rev[arr.length-1-i] = arr[i]
    // }
    console.log(rev)
}