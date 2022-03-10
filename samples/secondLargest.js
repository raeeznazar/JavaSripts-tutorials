var n1=30, n2=30, n3=30;


if(n1>n2 && n1>n3){
    console.log(n1);

    if(n2>n3){
        console.log(n2, "Second largest");
    }
    else{
        console.log(n3, "Second largest");
    }
}
else if(n2>n1 && n2>n3){
    console.log(n2);
    if(n1>n3){
        console.log(n1, "Second largest");
    }
    else{
        console.log(n3, "Second largest");
    }
}
else if(n3>n1 && n3>n2){
    console.log(n3);
    if(n1>n2){
        console.log(n1, "Second largest");
    }
    else{
        console.log(n2, "Second largest");
    }
}
else if(n1==n2 && n1==n3){
    console.log("equal");
}