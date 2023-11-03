"use strict";
// 인터페이스 상속의 계층 구조
// ex01-14.ts 복사
(function () {
    var todo1 = {
        title: "할일1",
        content: "등록할 때 사용",
    };
    var todo2 = {
        _id: 2,
        title: "할일2",
        content: "상세 조회에 사용",
    };
    var todo3 = {
        _id: 3,
        title: "할일 3",
        content: "시간을 포함한 상세 조회에 사용",
        done: true,
        createdAt: new Date(),
        updateAt: new Date(),
    };
    console.log(todo1, todo2, todo3);
})();
