var num=123;
let sum =0;
while(num!=0){
    let lastDigit =num%10;
    sum=sum+(lastDigit**3);
    num=Math.floor(num/10)

}

console.log(sum);