// var arr = [3,2,4,5];
// arr.sort((n1,n2)=>n1-n2);

// var element = 9;
// count = 1;

// let low=0; upp=arr.length-1;

// while(low<upp){

//     let sum = arr[low]+arr[upp];

//     if(element==sum){
//         console.log(`pairs = ${arr[low]} & ${arr[upp]}`);
//         break;
//     }
//     else if(element>sum){
//         low++;
//     }
//     else if (element<sum){
//         upp--;
//     }

//         count++;

// }

// console.log(`number of counts ${count}`);



// arr1 =[1,3,5,7,4,9,10];
// arr2 =[1,4,3,6,7,9.10];
// var count =1;

// for( let array1 of arr1){
//     for( let array2 of arr2){
//         if(array1==array2){
//             console.log(array1);
//         }
//         count++;
//     }
// }
// console.log("execution", count);


arr1 =[1,3,5,7,4,9,10];
arr2 =[1,4,3,6,7,9,10];

arr1.sort((n1,n2)=>n1-n2);
arr2.sort((n1,n2)=>n1-n2);

var p1= 0; p2 =0;
var count = 1;

while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log(`common elements ${arr1[p1]}`);
        p1++;
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
    else{
        p2++;
    }
    count++;

}

console.log(`Execution ${count}`);