var log = function (msg) {
    console.log(msg);
};
var log2 = function (msg) { return console.log(msg); };
var log3 = function (msg) {
    console.log(msg);
};
function log4(msg) {
    console.log("Arrow");
}
var log5 = function () {
    console.log("Function");
};
var percentage = function (marks, outof) {
    if (outof === void 0) { outof = 300; }
    var per = (marks / outof) * 100;
    return per;
};
function Area(radious, PI) {
    var area;
    if (PI == undefined) {
        PI = 3.14;
    }
    area = radious * radious * PI;
    return area;
}
console.log("Area is : " + Area(10.0));
console.log(Area(10.0, 7.2));
log("hello");
log2("Type");
log3("Script");
log4("Script");
log5();
console.log(percentage(270));
