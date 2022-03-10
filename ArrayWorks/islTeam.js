var isl=[
    // [club,M ,Won, Drawn, Lost, GF, GA, GD, Points]
    ["JamshedpurFC",18,11,4,3,36,20,16,37],	
    ["HyderabadFC",19,10,5,4,41,22,19,35],	
    ["ATKMohunBagan",18,9,7,2,36,25,11,34],
    ["KeralaBlastersFC",19,9,6,4,30,20,10,33]	,
    ["MumbaiCityFC",19,9,4,6,35,29,6,31],
    ["MumbaiCityFC",19,9,	4,6,35,29,6,31],	
    ["BengaluruFC",19,7,5,7,31,27,4,26],
    ["OdishaFC",19,6,5,8,30,38,-8,23],	
    ["ChennaiyinFC",19,5,5,9,17,34,-17,20],	
    ["FCGoa",19,4,6,9,25,31,-6,18],	
    ["NorthEastUnitedFC",20,3,5,12,25,43,-18,14],	
    ["SCEastBengal",19,1,8,10,18,35,-17,11]
    ]


    console.log(isl.some(teams=>teams[0]== "mancherster united"));

    isl.filter(team=>team[1]<19).forEach(team=>console.log(team[0]))