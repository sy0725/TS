"use strict";
(() => {
    function echo(msg) {
        return msg;
    }
    const result1 = echo("hello");
    console.log(result1.substring(1, 3));
    const result2 = echo(3.141592);
    console.log(result2.toFixed(2));
})();
