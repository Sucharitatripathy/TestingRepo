"use strict";
var service_1 = require('./service');
describe('TestService', function () {
    beforeEach(function () {
        this.testService = new service_1.TestService();
    });
    it('should have name property set', function () {
        expect(this.testService.getNames().length).toEqual(2);
    });
});
/*
//import {beforeEachProviders,Inject,beforeEach,it} from '@angular/core/testing';
describe('service testing',()=>{
      let service:TestService;
      beforeEachProviders(()=> {
        TestService
      });
      
      beforeEach(Inject([TestService], s:any => {
        service=s;
      }));
      


    it('should return two names',()=>{
        let names=service.getNames();
        expect(names).toContain('Murthy');
        expect(names).toContain('Kavitha');
        expect(names.length).toEqual(2);
    })

})

*/
//# sourceMappingURL=service.spec.js.map