"use strict";
(() => {
    const todo1 = {
        title: "할일 1",
        content: "내용 1",
    };
    const todo2 = {
        content: "내용 2",
    };
    const todo3 = {
        title: "할일 2",
    };
    function updateTodo(todo, newTodo) {
        return Object.assign(Object.assign({}, todo), newTodo);
    }
    console.log(updateTodo(todo1, todo2));
    console.log(updateTodo(todo1, todo3));
})();
