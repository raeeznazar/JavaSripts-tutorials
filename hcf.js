var num1=24, num2 = 48;
hcf=1;

for(i=2; i<num1; i++){

    if((num1%i==0) && (num2%i==0)){
        hcf=i;
    }
}

console.log(`hcf of $(num1), $(num2)=$(hcf))`);