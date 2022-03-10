var stock_details=[
    {item_name:"tomatto",mrp:60,purchase_rate:40,aval_qty:50},
    {item_name:"onion",mrp:50,purchase_rate:30,aval_qty:60},
    {item_name:"brinjal",mrp:40,purchase_rate:25,aval_qty:10},
    {item_name:"carrot",mrp:80,purchase_rate:65,aval_qty:0},
    {item_name:"potatto",mrp:75,purchase_rate:45,aval_qty:0},
    {item_name:"chilly",mrp:40,purchase_rate:20,aval_qty:10},
]



// which product has heighest margin profit

console.log(stock_details.reduce((p1,p2)=>(p1.mrp - p1.purchase_rate)>(p2.mrp - p2.purchase_rate)?p1:p2));

