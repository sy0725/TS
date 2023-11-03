"use strict";
/* eslint-disable @typescript-eslint/no-inferrable-types */
(() => {
    // string
    var str = "hello";
    // str = 100;
    // number
    var age = 30;
    // boolean
    var done = true;
    // object
    var todo = { todo: "Typescript 공부", done: false };
    // Array
    var items = ["JS공부", "TS공부"];
    var todoList = ["JS 프로젝트", "TS 프로젝트"];
    // tuple
    var users = ["김철수", 30];
    // any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var userName = "이일구";
    userName = 219;
    // null
    var nullVal = null;
    // undefined
    var undefined;
    console.log(str, age, done, todo, items, todoList, users, userName, nullVal, undefined);
    console.log(typeof str, typeof age, typeof done, typeof todo, typeof items, typeof todoList, typeof users, typeof userName, typeof nullVal, typeof undefined);
})();
