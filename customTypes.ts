var name1:string = "PUCSD";
console.log(name1);
console.log(typeof(name1));


let fun = (a,b,c,x,y) =>{
// do something
}

let fun2 = (point) => {
    console.log(point);
    console.log(point.x);
}

fun2({
    x:1,
    y:2,
    z:3,
    name : "Pratik"
});


let fun3 =(points:{x:number,name:string, y:any})=>{
    console.log(points);
}

fun3({
    x:1,
    y:true,
    name : "Pratik"
});
