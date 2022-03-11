var weather_data=[
    {district:"tvm",temp:31},
    {district:"tvm",temp:32},
    {district:"ekm",temp:32},
    {district:"tsr",temp:29},
    {district:"idk",temp:19},    
    {district:"ekm",temp:30},
    {district:"tsr",temp:30},
    {district:"idk",temp:15}
]



// heightest temp in tvm,ekm,thr, idk

out={};

for (data of weather_data){
    let districtName = data.district;
    let curTemp = data.temp;

    if(districtName in out){
        let oldTemp=out[districtName];
        if(curTemp>oldTemp){
            out[districtName]=curTemp;
        }

    }else{
        out[districtName]=curTemp;
    }
}

console.table(out);

