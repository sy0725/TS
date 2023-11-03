"use strict";
(() => {
    function echoString(msg) {
        return msg;
    }
    function echoNum(msg) {
        return msg;
    }
    const result1 = echoString("hello");
    console.log(result1);
    const result2 = echoNum(3.141592);
    console.log(result2);
})();
