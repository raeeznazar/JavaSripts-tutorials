var expenses = [20000, 3000, 450000, 56000]

for(let expense of expenses ){
    console.log(expense);
}

console.log("******* expenses greater than 40000 ********");
for(let expense of expenses ){
    if(expense > 40000){
        console.log(expense);
    }
}

console.log("********* sum of all expenses ************");

var sum=0;
for(let expense of expenses){
    sum=sum+expense;
}
ß
console.log(sum);

console.log("********* max expenses ************");

var max_exp= expenses[0] 

for(let i=1; i<expenses.length;i++){
    if(expenses[i]>max_exp){
        max_exp=expenses[i]
    }
}

console.log(max_exp);

console.log("********* min expenses ************");

var min_exp= expenses[0] 

for(let i=1; i<expenses.length;i++){
    if(expenses[i]<min_exp){
        min_exp=expenses[i]
    }
}

console.log(min_exp);