interface Shape{  
    x:number,
    y:string,
    z:boolean
}

let draw = (points: Shape) =>{
    console.log(points);
}

draw({x:1,y:"Red",z:true});