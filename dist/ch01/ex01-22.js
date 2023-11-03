"use strict";
(() => {
    function getSchedule(subject) {
        if ("JavaScript" /* ClassName.JS */ === subject) {
            return `${"JavaScript" /* ClassName.JS */}수업은 4일 교육 + 2일 프로젝트 입니다.`;
        }
        else if ("TypeScript" /* ClassName.TS */ === subject) {
            return `${"TypeScript" /* ClassName.TS */} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
        }
    }
    const jsSchedule = getSchedule("JavaScript" /* ClassName.JS */);
    const tsSchedule = getSchedule("TypeScript" /* ClassName.TS */);
    console.log(jsSchedule);
    console.log(tsSchedule);
    // console.log(ClassName);
})();
