var arr=[
    [10,34],
    [25,55],
    [50,60],
    [3,4],
    [61,80],
    [100,2]
]


// print all numbers >25 - filter

arr.flat().filter(num=>num>25).forEach(num=>console.log(num));

// Array sorting - .sort

arr.flat().sort((n1,n2)=>n1-n2);

console.log("************************");

console.log("************************");

// find sum of aarray  - reduce

console.log(arr.flat().reduce((n1,n2)=>n1+n2));



// find largest number - reduce

console.log("************************");

console.log("************************");



console.log(arr.flat().reduce((n1,n2)=>n1>n2? n1:n2));

console.log("************************");

console.log("************************");


// check 66 presnt or not

console.log(arr.flat().some(n=>n==66));

console.log("************************");

console.log("************************");

// sort numbers in decensing order 

arr.flat().sort((n1,n2)=>n2-n1).forEach(n=>console.log(n))