var arr=[1,4,6,7,3,87,5];

Element=90;
flag = 0;
for(let num of arr ){
    if(num==Element){
        flag+=1;
        break
    }
}
console.log(flag==0?"No Element" : "Element found");