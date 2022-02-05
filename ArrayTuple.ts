var arr1:number[];
arr1 = [1, 2, 3, 4, 5];


var arr2:number[] = [11, 21, 51, 101]; 

var arr3:number[] = new Array(4)  
arr3 = [1,2,3,4];

for(var i = 0; i < arr3.length; i++) 
{ 
   console.log(arr3[i]); 
}

var subject:string[] = new Array("PPA","PYTHON","UNIX","NODE","ANGULAR"); 

for(var i = 0;i<subject.length;i++) 
{ 
   console.log(subject[i]); 
}

var tuple1 = [10,"PUCSD",3.14];

// Accessing elements of tuples
console.log(tuple1[0]); 
console.log(tuple1[1]);
console.log(tuple1[2]);
console.log("Length of tuple : "+tuple1.length);

// Insert element into tuples
tuple1.push("SPPU");
console.log(tuple1[3]);
console.log("Length of tuple after push : "+tuple1.length);

// Remove element from tuple
tuple1.pop();
console.log("Length of tuple after pop : "+tuple1.length);

// Update value of tuple
tuple1[0] = "Pune";

// Traversing tuples
console.log("Elements of tuples are");

for(var i=0; i<tuple1.length;i++)
{
    console.log(tuple1[i]);
}