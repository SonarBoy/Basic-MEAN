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
var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._age_num = age;
            this._name_string = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name_string;
            },
            //GETS and SETS
            set: function (x) {
                this._name_string = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age_num;
            },
            set: function (x) {
                this._age_num = x;
            },
            enumerable: true,
            configurable: true
        });
        //Public Methods
        Person.prototype.sayHello = function () {
            console.log("%c The following is a paid promotion \n        endorsed by " + this._name_string, "font-size: 13px; color: red");
            return "Hello !";
        };
        Person.prototype.ReturnName = function () {
            return this._name_string;
        };
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, age, Title, Number, Salary) {
            var _this = _super.call(this, name, age) || this;
            _this.emp_Title = Title;
            _this.emp_Number = Number;
            _this.salary = Salary;
            return _this;
        }
        Object.defineProperty(Employee.prototype, "empTitle", {
            //GETS and SETS
            set: function (x) {
                this.emp_Title = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "empNumber", {
            set: function (x) {
                this.emp_Number = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "sal", {
            set: function (x) {
                this.salary = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "Title", {
            get: function () {
                return this.emp_Title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "Number", {
            get: function () {
                return this.emp_Number;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "Salary", {
            get: function () {
                return this.salary;
            },
            enumerable: true,
            configurable: true
        });
        Employee.prototype.emp_Listing = function () {
            var name = this.ReturnName();
            console.log("%c This is the employee " + name, "color: red;");
            console.log("%c This is the employees title " + this.emp_Title, "color:blue;");
            console.log("%c This is the employee salary " + this.salary, "color:green;");
        };
        return Employee;
    }(Person));
    objects.Employee = Employee;
})(objects || (objects = {}));
var best;
best = new objects.Employee("Joshua", 28, "Cyber Intelligence", 54632, 74000);
best.emp_Listing();
