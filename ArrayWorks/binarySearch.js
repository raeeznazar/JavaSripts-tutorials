var arr=[1,4,6,7,3,87,5];

var low=0; upp=arr.length-1;
var srch_ele = 87;
var flag=0; 

while(low<=upp){
    let mid= Math.floor((low+upp)/2);

    if(arr[mid]==srch_ele){
        flag+=1;
        break;
    } 
    else if (srch_ele<arr[mid]){
        upp=mid-1;
    }
    else if(srch_ele>arr[mid]){
        low=mid+1;
    }
}

console.log(flag==0?"Elements not found" : "elements found");