var Cat = /** @class */ (function () {
    function Cat(name, speed) {
        if (speed === void 0) { speed = 10; }
        this.name = name;
        this.speed = speed;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0431\u0456\u0436\u0438\u0442\u044C \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ").concat(this.speed, " \u043A\u043C/\u0433\u043E\u0434"));
    };
    Cat.prototype.sound = function () {
        console.log("".concat(this.name, " \u043A\u0430\u0436\u0435: \u041C\u044F\u0443!"));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, speed) {
        if (speed === void 0) { speed = 20; }
        this.name = name;
        this.speed = speed;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " \u043B\u0435\u0442\u0438\u0442\u044C \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ").concat(this.speed, " \u043A\u043C/\u0433\u043E\u0434"));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, speed) {
        if (speed === void 0) { speed = 5; }
        this.name = name;
        this.speed = speed;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u043F\u043B\u0438\u0432\u0435 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ").concat(this.speed, " \u043A\u043C/\u0433\u043E\u0434"));
    };
    return Fish;
}());
var animals = [new Cat("Кіт"), new Bird("Сокіл"), new Fish("Карась")];
animals.forEach(function (a) { return a.move(); });
