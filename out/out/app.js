"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var greeter_1 = require("./Model/greeter");
var app = new vue_1.default({
    data: function () {
    },
    methods: {},
    mounted: {
        var: stu = new greeter_1.Student("李", "四")
    }
}).$mount("#app");
//# sourceMappingURL=app.js.map 
//# sourceMappingURL=app.js.map