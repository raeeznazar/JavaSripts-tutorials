// Print numbers greater than 50.

// var arr = [
//     [20,30],
//     [11,23],
//     [60,65],
//     [80,86],
//     [90,91],
//     [89,88],
//     [85,82]

// ]



// for( let subarray of arr){
//     for(let num of subarray){
//         if(num>50){
//             console.log(num);
//         }
//     }
// }

//  print even numbers in this sub arrays

 var arr = [
     [20,30],
     [11,23],
     [60,65],
     [80,86],
     [90,91],
     [89,88],
     [85,82]

]


for(let subarray of arr){
    for(num of subarray){
        if(num%2 !==0){
            console.log(num);
        }
    }
}