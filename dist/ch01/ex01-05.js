"use strict";
// 유니언 타입
(() => {
    function logString(msg) {
        console.log(msg);
    }
    function logNumber(msg) {
        console.log(msg);
    }
    logString("hello");
    logNumber(100);
    // 위의 방법도 되지만 여러개가 있다고 한다면 아래있는 유니언타입을 사용하면 더 좋다
    // 타입이 여러개일거 같을때 유니언 타입을 사용
    // 유니언 타입 사용
    function log(msg) {
        console.log(msg);
    }
    var msg1 = "world";
    var msg2 = 200;
    msg1 = 300;
    log(msg1);
    log(msg2);
})();
