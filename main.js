function log(message) {
    console.log(message);
}
var msg = "Hello Word";
log(msg);
var temp;
var b;
var arr;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
temp = 5;
// temp = 'a';
// temp = true;
var bg = color.Blue;
console.log(temp);
