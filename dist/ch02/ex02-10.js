"use strict";
(() => {
    function createDropdown(list) {
        // <select><option>서울시</option><option selected>인천시</option><option>광주시</option></select>
        let result = "<select>";
        list.forEach((item) => {
            result += `<option ${item.selected ? "selected" : ""}>${item.value}</option>`;
        });
        result += "</select>";
        return result;
    }
    var cityList = [
        { value: "서울시", selected: false },
        { value: "인천시", selected: true },
        { value: "광주시", selected: false },
    ];
    const cityTag = createDropdown(cityList);
    console.log(cityTag);
    var zipcodeList = [
        { value: 12345, selected: false },
        { value: 34567, selected: false },
        { value: 56789, selected: true },
    ];
    const zipcodeTag = createDropdown(zipcodeList);
    console.log(zipcodeTag);
})();
