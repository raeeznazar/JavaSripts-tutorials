var arr =[
    [10,34],
    [34,55,45],
    [50,60],
    [3,4],
    [60,80],
    [100,2]
]

arr.flat().filter(num=>num>25).forEach(num=>console.log(num));