"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return (price * 0.19) + price;
        }
        Taxes.calculateIva = calculateIva;
        function calculatePenalityIva(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculatePenalityIva = calculatePenalityIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
/// <reference path="utility.ts" />
let utils = Utility.Taxes;
console.log(utils.calculateIva(100));
