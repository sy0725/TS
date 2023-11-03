"use strict";
(() => {
    var todo1 = {
        _id: 1,
        title: "할 일1",
        content: "인터페이스 사용",
        done: false,
    };
    var todo2 = {
        _id: 2,
        title: "할 일2",
        content: "인터페이스 사용2",
    };
    var toggleFn = function (param) {
        param.done = !param.done;
    };
    // todo1._id = 3; // 읽기 전용속성으로 _id 에 할당할 수 없습니다. 라는 에러문구가 나온다.
    todo1.title = "집에가자";
    toggleFn(todo1);
    toggleFn(todo1);
    console.log(todo1);
    console.log(todo2);
})();
