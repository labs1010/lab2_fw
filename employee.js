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
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    Developer.prototype.pay = function () {
        console.log("".concat(this.name, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443 ").concat(this.salary));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    Manager.prototype.pay = function () {
        console.log("".concat(this.name, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443 ").concat(this.salary));
    };
    return Manager;
}(Employee));
// Масив співробітників
var employees = [
    new Developer("Іван", 25, 3000),
    new Manager("Оксана", 35, 5000)
];
var totalBonus = employees.reduce(function (sum, e) { return sum + e.getAnnualBonus(); }, 0);
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0431\u043E\u043D\u0443\u0441: ".concat(totalBonus));
