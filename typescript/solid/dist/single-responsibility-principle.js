"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(workedHours, valuePerHour) {
        this.workedHours = workedHours;
        this.valuePerHour = valuePerHour;
    }
    Employee.prototype.save = function () {
        console.log('[save] workedHours', this.workedHours);
        console.log('[save] valuePerHour', this.valuePerHour);
    };
    return Employee;
}());
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR(workedHours, valuePerHour) {
        return _super.call(this, workedHours, valuePerHour) || this;
    }
    HR.prototype.calculatePay = function () {
        return this.workedHours * this.valuePerHour;
    };
    HR.prototype.reportHours = function () {
        return this.workedHours;
    };
    return HR;
}(Employee));
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(workedHours, valuePerHour) {
        return _super.call(this, workedHours, valuePerHour) || this;
    }
    Accounting.prototype.calculatePay = function () {
        return this.workedHours * this.valuePerHour;
    };
    Accounting.prototype.reportHours = function () {
        return this.workedHours;
    };
    return Accounting;
}(Employee));
var hr = new HR(120, 20);
hr.save();
var accounting = new HR(80, 15);
accounting.save();
