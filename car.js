var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarAge = function () {
        return new Date().getFullYear() - this.year;
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, isElectric) {
        var _this = _super.call(this, "BMW", model, year) || this;
        _this.isElectric = isElectric;
        return _this;
    }
    BMW.prototype.showInfo = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " (").concat(this.getCarAge(), " \u0440\u043E\u043A\u0456\u0432), \u0435\u043B\u0435\u043A\u0442\u0440\u043E: ").concat(this.isElectric));
    };
    return BMW;
}(Car));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, year, batteryCapacity) {
        var _this = _super.call(this, "Tesla", model, year) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    Tesla.prototype.showInfo = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " (").concat(this.getCarAge(), " \u0440\u043E\u043A\u0456\u0432), \u0431\u0430\u0442\u0430\u0440\u0435\u044F: ").concat(this.batteryCapacity, " \u043A\u0412\u0442\u00B7\u0433\u043E\u0434"));
    };
    return Tesla;
}(Car));
// Тест
var cars = [new BMW("X5", 2020, false), new Tesla("Model 3", 2023, 75)];
cars.forEach(function (c) { return c.showInfo(); });
