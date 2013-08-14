/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-81.js
 * @description Object.defineProperties throws TypeError when P.configurable is false, P.writalbe is false, properties.value and P.value are two strings with different values (8.12.9 step 10.a.ii.1)
 */


function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { 
            value: "abcd", 
            writable: false, 
            configurable: false 
        });

        try {
            Object.defineProperties(obj, {
                foo: {
                    value: "defg"
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError) && dataPropertyAttributesAreCorrect(obj, "foo", "abcd", false, false, false);
        }
    }
runTestCase(testcase);