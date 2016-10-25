System.register(["aurelia-framework", "aurelia-router", './models/FnTs'], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_router_1, FnTs_1;
    var App;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (FnTs_1_1) {
                FnTs_1 = FnTs_1_1;
            }],
        execute: function() {
            App = class App {
                constructor(router, fn) {
                    this.router = router;
                    this.fn = fn;
                    this.loadRouter();
                    this.appLoaded();
                }
                loadRouter() {
                    this.router.configure((config) => {
                        config.title = "Aurelia";
                        config.map([
                            { route: ['', 'dash'], name: 'dash', moduleId: './views/dashboard/dash', nav: true, title: 'Dashboard' },
                            { route: ['functional'], name: 'functional', moduleId: './views/functional/functional', nav: true, title: 'Functional' }
                        ]);
                        return config;
                    });
                }
                loadEventHandlers() {
                    this.app_events = this.fn.ea.subscribe('react', (event) => {
                        if (event.target_name == "app") {
                            if (this[event.event_name] != null) {
                                this[event.event_name](event.data);
                            }
                        }
                    });
                }
                appLoaded() {
                }
                //event-aggregator handlers
                loadRoute(route) {
                    this.router.navigate(route);
                }
            };
            App = __decorate([
                aurelia_framework_1.inject(aurelia_router_1.Router, FnTs_1.FnTs), 
                __metadata('design:paramtypes', [aurelia_router_1.Router, FnTs_1.FnTs])
            ], App);
            exports_1("App", App);
        }
    }
});
