class Point{
x:number;
  y:number;

  constructor(z?:string){
      console.log(z);
  }
     draw() {
console.log(this.x,this.y);
    }

}

let objPoint=new Point("Hello");
objPoint.x=10;
objPoint.y=20;
objPoint.draw();

