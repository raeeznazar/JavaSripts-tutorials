
var person={
    name:"ram",
    age:25,
   
    desig:"develop",
}


// console.log(person["name"]);
// console.log(person.gender);

// for(let k in person){
//     console.log(k);
//     console.log(person[k]);

// }

// // for updating a field
// person.car="BMW, "
// console.log(person);

// // Adding another elemet with exixting element

// person.car+="Audi"
// console.log(person);

// // Adding another key and its value


// if("car_colours" in person){

// }else{
//     person["car_colours"] =true;
// }

// console.log(person);



// if("gender" in person ){

// }
//     else{
//         person["male"]=true;
//      }
//         console.log(person);   

// if(!("gender" in person)){
//     person.gender="male";
// }

// console.log(person);


// var text = "hello hai hello hai";
// var words = text.split(" ");
// var wc ={};

// for (let word of words){
//     if(word in wc){
//             wc[word]+=1;
//     }

//     else{
//         wc[word]=1;
//     }
// }

// console.log(wc);

var text ="hello hai hello hai";
var wc={};
text.split(" ").map(word=>word in wc? wc[word]+=1: wc[word]=1);
console.log(wc);
