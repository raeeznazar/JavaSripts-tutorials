// var num = 8;
// var i = 1;
// res = "";
// while (i <= num) {
//     res = res + num;
//     console.log(res);
//     i++;
// }

// var num = 4;
// var i = 1;
// var pattern = "";
// var sum = 0;

// while (i <= num) {
//     pattern = pattern + num;
//     console.log(pattern);
//     sum = sum + Number(pattern);
//     i++;
// }
// console.log(sum);

// var num = 143;
// const originalNo = num;
// var str = ""
// while (num != 0) {
//     let lastDigit = num % 10;
//     str = str + lastDigit;
//     num = Math.floor(num / 10);
// }
// console.log(str);
// console.log(originalNo ==str? "equal": "not eequal" );

// for (let i = 3; i>=1; i--){
//     console.log(i);
// }

// var num = 153;

// const res = num;
// var sum =0;
// while(num!=0){
//     let lastDigit = num%10;
//     sum+=lastDigit**3;
//    num = Math.floor((num/10));
// }

// console.log(sum);
// console.log(res==sum? "amstrong" : "not amstrong");


// var fact =1;
// for ( let i=1; i<=4; i++){
//  fact = fact*i;
// }
// console.log(fact);


// var num = 17;
// var flag = 0;

// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = 1;
//         console.log("prime");
//         break;
//      }
//  else {
//         console.log("not prime");
//         break;
//          }
//     }


for ( let row = 1; row<=4; row++){
    let str ="";
    for( let col = 1; col<=row; col++){
     str = str+"*"; 
    } 
    console.log(str);
}

