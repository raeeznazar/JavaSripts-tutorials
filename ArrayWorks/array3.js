var arr=[2,3,4,5];
sum = 6;

for( let i=0; i<=arr.length; i++){

    for(let j=i+1; j<arr.length; j++){
        let total = arr[i]+arr[j];
        if(sum==total){
        console.log(`pair is ${arr[i]}, ${arr[j]}`);
        break;
        }
    }

}