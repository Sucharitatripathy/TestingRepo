"use strict";
var _this = this;
var app_component_1 = require('./app.component');
//Test Suite
describe('AppComponent', function () {
    //hook
    beforeEach(function () {
        _this.app = new app_component_1.AppComponent();
    });
    //Test
    it('Should have a property name  set to Murthy ', function () {
        expect(_this.app.name).toBe('Murthy');
    });
});
//# sourceMappingURL=app.component.spec.js.map