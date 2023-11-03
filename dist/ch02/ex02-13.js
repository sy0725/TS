"use strict";
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo(new Date()));
})();
11;
