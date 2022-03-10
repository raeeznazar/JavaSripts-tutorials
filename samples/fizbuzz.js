var num=37;

var res = "";

if(num%3==0){
    res+="fizz"
}

if(num%5==0){
    res+="buzz"
}

console.log(res == ""? "invalid" : res);