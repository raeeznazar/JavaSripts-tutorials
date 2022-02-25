var num = 123;

var res =" ";

while (num!=0) {

  let lastDigit =num %10;
  res=res+lastDigit;
  num=Math.floor((num/10));

}

console.log(res);