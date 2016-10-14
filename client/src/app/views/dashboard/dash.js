System.register(['aurelia-framework', '../../models/utilities'], function(exports_1, context_1) {
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
    var aurelia_framework_1, utilities_1;
    var Dash;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }],
        execute: function() {
            Dash = class Dash {
                constructor(utils) {
                    this.utils = utils;
                    this.toggle_visibility = {
                        panel_body_1: 'show'
                    };
                }
                attached() {
                    this.utils.addEventListener('toggle_panel_1', 'dash.ts', (state) => {
                        if (state) {
                            this.toggle_visibility.panel_body_1 = 'show';
                        }
                        else {
                            this.toggle_visibility.panel_body_1 = 'hide';
                        }
                    });
                }
            };
            Dash = __decorate([
                aurelia_framework_1.inject(utilities_1.Utilities), 
                __metadata('design:paramtypes', [utilities_1.Utilities])
            ], Dash);
            exports_1("Dash", Dash);
        }
    }
});
