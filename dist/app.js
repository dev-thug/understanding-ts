"use strict";
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
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    //  {
    //   console.log(`Department (${this.id}): " (${this.name})`);
    // }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found.");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ', this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Hyunjoong") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('Hyunjoong');
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment("d1", ["Hyunjoong"]);
it.addEmployee("Hyunjoong");
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Someting went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Hyunjoong");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.printReports();
