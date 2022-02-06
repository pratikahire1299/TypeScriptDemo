var Point = /** @class */ (function () {
    function Point(z) {
        console.log(z);
    }
    Point.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    return Point;
}());
var objPoint = new Point("Hello");
objPoint.x = 10;
objPoint.y = 20;
objPoint.draw();
