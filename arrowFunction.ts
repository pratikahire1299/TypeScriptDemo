let log = function(msg){
    console.log(msg);
}

let log2 = (msg) => console.log(msg)


let log3 = (msg) =>{
    console.log(msg)
}

function log4(msg){
    console.log("Arrow");
}
 let log5 = () => {
     console.log("Function");
 }



let percentage = (marks:number,outof:number = 300) =>
{ 
   var per = (marks/outof) * 100; 
   return per; 
} 

function Area(radious:number,PI?:number):number  /// pi is optional parameter
{ 
    var area:number;
    if(PI == undefined)
    {
        PI = 3.14;
    }
    area = radious*radious*PI;
    return area; 
 }


 console.log("Area is : "+Area(10.0));
 console.log(Area(10.0,7.2));

log("hello");
log2("Type");
log3("Script");
log4("Script");
log5();
console.log(percentage(270));
