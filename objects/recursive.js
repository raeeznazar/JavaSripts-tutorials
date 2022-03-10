var pattern = "ABBAC"
var rc={};

var out =[];

[...pattern].map(char=>char in rc? out.push(char) : rc[char]=1 )

console.log(out);

// for(let char of pattern){

//     if(char in ){
//         console.log("first recursive character");
//         break
//     }
//     else{
//         rc[char]=1;
//     }
    
// }


