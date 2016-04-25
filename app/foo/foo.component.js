System.register(['angular2/core', '../shared/remove.vowels.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, remove_vowels_pipe_1;
    var FooComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (remove_vowels_pipe_1_1) {
                remove_vowels_pipe_1 = remove_vowels_pipe_1_1;
            }],
        execute: function() {
            FooComponent = (function () {
                function FooComponent() {
                    this.fooClicked = new core_1.EventEmitter();
                }
                FooComponent.prototype.onClick = function () {
                    this.fooClicked.emit(this.pageTitle);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FooComponent.prototype, "pageTitle", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], FooComponent.prototype, "fooClicked", void 0);
                FooComponent = __decorate([
                    core_1.Component({
                        selector: 'app-foo',
                        pipes: [remove_vowels_pipe_1.RemoveVowelsPipe],
                        templateUrl: 'app/foo/foo.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooComponent);
                return FooComponent;
            }());
            exports_1("FooComponent", FooComponent);
        }
    }
});
//# sourceMappingURL=foo.component.js.map