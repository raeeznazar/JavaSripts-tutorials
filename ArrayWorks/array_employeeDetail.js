var employees=[
    [1000,"ram","developer","kochi",25000,5],
    [1000,"ravi","developer","kochi",36000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",18000,1],
    [1000,"fred","sales","mumbai",22000,2],
    [1000,"abi","sales","mumbai",65000,5],

]

console.log("****Number of employee****");
// number of employees
console.log(employees.length);

// print employee name

console.log("****print name of employee****");
for (let emp of employees){
    console.log(emp[1]);
}
// print developer employee

console.log("****print developer employee****");

for(let emp of employees){
    if(emp[2]== "developer"){
        console.log(emp[1]);
    }
}

console.log("****print names of employees whose salary > 30,000 ****");

for(let emp of employees){
    if(emp[4]>30000){
        console.log(emp[1]);
    }
}

// Is there is any employee working as a qa

console.log("********Is there is any employee working there as qa********");


// print all employee names.
console.log("********Printing employee names using map********");
var emp_names= employees.map(n=>n[1])

console.log(emp_names);


console.log("********print details of qa with exp>1 ********");

var qa_desi = employees.filter(emp=>emp[2]=="qa" && emp[5] >1);
console.log(qa_desi); 