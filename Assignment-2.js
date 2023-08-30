//variable data types
console.log(typeof 10)
console.log(typeof "Abc")
console.log(typeof [1,2,3,4])
console.log(typeof true)
console.log(typeof {name:'John', age:34})
console.log(typeof 3.14)

//output --->
//number
//string 
//object 
//boolean
//object 
//number

//Calculator
function calculator(operator,a,b){
    switch(operator)
    {
        case '+':return a+b
        case '-':return a-b
        case '*':return a*b
        case '/':return a/b
        default:return 0

    }
    
}
console.log(calculator('+',1,2))
console.log(calculator('*',9,2))
//output--> 3
//output--->18

//iterate array values
let array=[2,4,5,6,7,8]
array.forEach(element => {console.log(element)  
});

//iterate using while
let array1=[1,2,3,4]
let i=0;
while(i<array1.length){
    console.log(array1[i])
    i++
}

//sum arrayy values
let sumArray=[9,4,6,7,8]


