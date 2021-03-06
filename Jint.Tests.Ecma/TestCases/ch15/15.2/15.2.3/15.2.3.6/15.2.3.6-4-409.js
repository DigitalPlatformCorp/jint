/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-409.js
 * @description ES5 Attributes - Inherited property whose [[Enumerable]] attribute is set to false is enumerable (RegExp instance)
 */


function testcase() {
        try {
            Object.defineProperty(RegExp.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            var regObj = new RegExp();

            var verifyEnumerable = false;
            for (var p in regObj) {
                if (p === "prop") {
                    verifyEnumerable = true;
                }
            }

            return !regObj.hasOwnProperty("prop") && verifyEnumerable;
        } finally {
            delete RegExp.prototype.prop;
        }
    }
runTestCase(testcase);
