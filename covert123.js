var num = 111;
const oriNum=num;
res = '';
while (num != 0) {
    lastDigit = num % 10;
    res = res + lastDigit;
    num = Math.floor((num / 10));
}

console.log(res);
console.log(res=oriNum?"Palindrome": "Not Palindrom" );