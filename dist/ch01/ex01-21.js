"use strict";
(() => {
    let ClassName;
    (function (ClassName) {
        ClassName["JS"] = "JavaScript";
        ClassName["TS"] = "TypeScript";
        ClassName["REACT"] = "React";
    })(ClassName || (ClassName = {}));
    function getSchedule(subject) {
        if (ClassName.JS === subject) {
            return `${ClassName.JS}수업은 4일 교육 + 2일 프로젝트 입니다.`;
        }
        else if (ClassName.TS === subject) {
            return `${ClassName.TS} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
        }
    }
    const jsSchedule = getSchedule(ClassName.JS);
    const tsSchedule = getSchedule(ClassName.TS);
    console.log(jsSchedule);
    console.log(tsSchedule);
    console.log(ClassName);
})();
