var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.scale = function (factor) {
        this.radius *= factor;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.scale = function (factor) {
        this.width *= factor;
        this.height *= factor;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    };
    Triangle.prototype.getPerimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.scale = function (factor) {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    };
    return Triangle;
}());
// Масив фігур
var shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];
var totalArea = 0;
var totalPerimeter = 0;
shapes.forEach(function (s) {
    totalArea += s.getArea();
    totalPerimeter += s.getPerimeter();
});
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430: ".concat(totalArea.toFixed(2), ", \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: ").concat(totalPerimeter.toFixed(2)));
